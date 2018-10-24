"use strict";
import { LitElement, html } from "@polymer/lit-element";
import "@01ht/ht-spinner";
import "./ht-elements-catalog-search.js";
import "./ht-elements-catalog-filter.js";
import "./ht-elements-catalog-list.js";
import "./ht-elements-catalog-actions.js";
import "./ht-elements-catalog-selected-filters.js";
import {
  getParametersFromPath,
  getPathFromParameters
} from "./ht-elements-catalog-path-parser.js";
import {
  // callTestHTTPFunction,
  callFirebaseHTTPFunction
} from "@01ht/ht-client-helper-functions";

class HTElementsCatalog extends LitElement {
  render() {
    const {
      firstLoading,
      loading,
      parameters,
      view,
      cartChangeInProcess
    } = this;
    return html`
      <style>
        :host {
          display: block;
          position:relative;
          box-sizing:border-box;
        }

        ht-elements-catalog-search {
          margin-top:16px;
          width:100%;
        }

        #main ht-elements-catalog-filter {
          display:flex;
          position:relative;
          width:100%;
          min-width: 240px;
        }

        ht-elements-catalog-actions {
          width:100%;
        }

        ht-elements-catalog-selected-filters {
          margin-top:32px;
          width:100%;
        }

        ht-elements-catalog-list {
          width:100%;
          margin-top:8px;
        }

        #container {
          display:flex;
          width:100%;
          flex-direction: column;
          align-items:center;
        }

        #main {
          display: grid;
          grid-template-columns: 0.3fr 1fr;
          width:100%;
          margin-top:32px;
          grid-gap:32px;
        }

        #list {
          display:flex;
          flex-direction:column;
        }

        .spinner-container {
          display: flex;
          flex-direction: column;
          width: 100%;
          align-items: center;
          align-content: center;
          margin-top:64px;
        }

        @media screen and (max-width:1120px) {
          #main {
            grid-gap:16px;
          }
        }

        @media screen and (max-width:700px) {
          #main {
            grid-template-columns: 1fr;
            grid-gap:0;
          }

          #main ht-elements-catalog-filter {
            display:none;
          }
        }

        [hidden] {
          display:none !important;
        }
      </style>
      <div id="container">
        <ht-elements-catalog-search .parameters=${parameters}>
          <ht-elements-catalog-filter slot="filter" .parameters=${parameters}></ht-elements-catalog-filter>
        </ht-elements-catalog-search>
        <div class="spinner-container" ?hidden=${!firstLoading}>
          <ht-spinner></ht-spinner>
        </div>
        <section id="main" ?hidden=${firstLoading}>
          <ht-elements-catalog-filter .parameters=${parameters}></ht-elements-catalog-filter>
          <section id="list">
            <ht-elements-catalog-actions .view=${view} .parameters=${parameters}></ht-elements-catalog-actions>
            <ht-elements-catalog-selected-filters parameters=${JSON.stringify(
              parameters
            )}></ht-elements-catalog-selected-filters>
            <ht-elements-catalog-list view=${view} ?hidden=${loading} .cartChangeInProcess=${cartChangeInProcess}></ht-elements-catalog-list>
            <div class="spinner-container" ?hidden=${!loading}>
              <ht-spinner></ht-spinner>
            </div>
          </section>
        </section>
      </div>
`;
  }

  static get is() {
    return "ht-elements-catalog";
  }

  static get properties() {
    return {
      path: { type: String },
      firstLoading: { type: Boolean },
      loading: { type: Boolean },
      parameters: { type: Object },
      view: { type: String },
      cartChangeInProcess: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.parameters = {};
    this.firstLoading = true;
    this.loading = false;
    // view
    let view = localStorage.getItem("catalog-list-view-mode");
    view === null ? (this.view = "grid") : (this.view = view);
  }

  firstUpdated() {
    this.shadowRoot.addEventListener("parameters-changed", e => {
      e.stopPropagation();
      const parameters = e.detail;
      this._updateLocation(parameters);
    });
    this.shadowRoot.addEventListener("view-changed", e => {
      e.stopPropagation();
      const view = e.detail;
      this._changeView(view);
    });
    this.shadowRoot.addEventListener("close-chip", e => {
      e.stopPropagation();
    });
  }

  set path(path) {
    this._setParameters(path);
  }

  get search() {
    return this.shadowRoot.querySelector("ht-elements-catalog-search");
  }

  get filter() {
    return this.shadowRoot.querySelector("#main ht-elements-catalog-filter");
  }

  get filterInSearch() {
    return this.shadowRoot.querySelector(
      "ht-elements-catalog-search ht-elements-catalog-filter"
    );
  }

  get list() {
    return this.shadowRoot.querySelector("ht-elements-catalog-list");
  }

  get selectedFilters() {
    return this.shadowRoot.querySelector(
      "ht-elements-catalog-selected-filters"
    );
  }

  async _setParameters(path) {
    let parameters = await getParametersFromPath(path);
    this.parameters = parameters;
    this._getItems(parameters);
  }

  async _getItems(parameters) {
    try {
      this.loading = true;
      // test function
      // let data = await callTestHTTPFunction(
      //   "httpsItemsGetCatalogPageDataIndex",
      //   parameters
      // );
      // real function
      // callTestHTTPFunction;
      let data = await callFirebaseHTTPFunction({
        name: "httpsItemsGetCatalogPageDataIndex",
        options: {
          method: "POST",
          headers: new Headers({
            "Content-Type": "application/json"
          }),
          body: JSON.stringify(parameters)
        }
      });
      await this._setData(data);
      if (this.firstLoading) this.firstLoading = false;
      this.loading = false;
    } catch (error) {
      console.log("_getItems: " + error.message);
    }
  }

  async _setData(data) {
    try {
      this.list.data = data.items;
      this.filter.data = data.filter;
      this.filterInSearch.data = data.filter;
      this.selectedFilters.data = data;
      this.loading = false;
    } catch (err) {
      console.log("_setData: " + err.message);
    }
  }

  async _updateLocation(parameters) {
    let path = await getPathFromParameters(parameters);
    if (this.path === path) return;
    history.pushState(null, "", path);
    this.dispatchEvent(
      new CustomEvent("change-location", {
        bubbles: true,
        composed: true,
        detail: path
      })
    );
  }

  _changeView(view) {
    localStorage.setItem("catalog-list-view-mode", view);
    this.view = view;
  }

  _showSelectedFilters(parameters) {
    if (Object.keys(parameters).length) return true;
    return false;
  }
}

customElements.define(HTElementsCatalog.is, HTElementsCatalog);
