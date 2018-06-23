"use strict";
import { LitElement, html } from "@polymer/lit-element";
import { repeat } from "lit-html/lib/repeat.js";
import "./ht-elements-catalog-filter-item-checkbox.js";
class HTElementsCatalogFiterBlockTools extends LitElement {
  _render({ items, parameters }) {
    return html`
    <style>
        :host {
            display: block;
            position: relative;
            box-sizing: border-box;
        }
    
        #container {
            display: flex;
            flex-direction: column;
        }
    
        #number {
            color: var(--secondary-text-color);
        }
    </style>
    <div id="container">
        ${repeat(
          items,
          item => html`
            <ht-elements-catalog-filter-item-checkbox data=${item} parameters=${parameters} type="tools"></ht-elements-catalog-filter-item-checkbox>`
        )}
    </div>
`;
  }

  static get is() {
    return "ht-elements-catalog-filter-block-tools";
  }

  static get properties() {
    return {
      items: Array,
      parameters: Object
    };
  }

  constructor() {
    super();
    this.items = [];
    this.parameters = {};
  }

  get data() {
    let selected = [];
    let selectedCheckboxes = this.shadowRoot.querySelectorAll(
      "ht-elements-catalog-filter-item-checkbox"
    );
    selectedCheckboxes.forEach(checkbox => {
      if (checkbox.isChecked()) {
        selected.push(checkbox.data.name);
      }
    });
    return selected.join(",");
  }

  set data(data) {
    this.items = data;
  }
}

customElements.define(
  HTElementsCatalogFiterBlockTools.is,
  HTElementsCatalogFiterBlockTools
);
