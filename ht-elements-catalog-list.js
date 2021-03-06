"use strict";
import { LitElement, html, css } from "lit-element";
import { repeat } from "lit-html/directives/repeat.js";
import "./ht-elements-catalog-list-item.js";
import { installMediaQueryWatcher } from "pwa-helpers/media-query.js";
import "@01ht/ht-nothing-found-placeholder";

import { stylesBasicWebcomponents } from "@01ht/ht-theme/styles";

class HTElementsCatalogList extends LitElement {
  static get styles() {
    return [
      stylesBasicWebcomponents,
      css`
        ht-elements-catalog-list-item {
          padding: 32px;
          transition: box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1);
        }

        ht-elements-catalog-list-item:hover,
        ht-elements-catalog-list-item:focus-within {
          box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2),
            0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12);
        }

        #container {
          display: grid;
          grid-template-columns: 1fr;
          position: relative;
        }

        #container[view="grid"] {
          display: grid;
          grid-template-columns: 0.5fr 0.5fr;
        }

        ht-nothing-found-placeholder {
          margin: 32px auto;
        }

        @media screen and (max-width: 1120px) {
          ht-elements-catalog-list-item {
            padding: 16px;
          }
        }

        @media screen and (max-width: 900px) {
          #container[view="grid"] {
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: 16px;
          }
        }
      `
    ];
  }

  render() {
    const { view, smallScreen, items, cartChangeInProcess } = this;
    return html`
      <div id="container" view=${
        view === "list" && !smallScreen ? "list" : "grid"
      }>
          ${repeat(
            items,
            item =>
              html`<ht-elements-catalog-list-item .data="${item}" .cartChangeInProcess="${cartChangeInProcess}" view="${
                view === "list" && !smallScreen ? "list" : "grid"
              }"></ht-elements-catalog-list-item>`
          )}
      </div>
      ${
        items.length === 0
          ? html`<div id="not-found">
      ${
        this.portfolio
          ? html`<ht-nothing-found-placeholder main="Элементы не найдены" sub="У пользователя нет элементов, либо они скрыты"></ht-nothing-found-placeholder>`
          : html`<ht-nothing-found-placeholder main="Ничего не найдено" sub="Попробуйте использовать другие ключевые слова или другие фильтры поиска"></ht-nothing-found-placeholder>`
      }
    </div>`
          : null
      }
`;
  }

  static get properties() {
    return {
      items: { type: Array },
      view: { type: String },
      smallScreen: { type: Boolean },
      cartChangeInProcess: { type: Boolean },
      portfolio: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.items = [];
    this.smallScreen = false;
    this.portfolio = false;
  }

  firstUpdated() {
    installMediaQueryWatcher(
      `(max-width: 1120px)`,
      matches => (this.smallScreen = matches)
    );
  }

  shouldUpdate() {
    if (this.items !== undefined) return true;
    return false;
  }
}

customElements.define("ht-elements-catalog-list", HTElementsCatalogList);
