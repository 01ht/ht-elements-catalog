"use strict";
import { LitElement, html } from "@polymer/lit-element";
import "@polymer/iron-iconset-svg/iron-iconset-svg.js";
import "@polymer/paper-icon-button";
import "./ht-elements-catalog-list-item-horizontal.js";
import "./ht-elements-catalog-list-item-vertical.js";
class HTElementsCatalogListItem extends LitElement {
  _render({ data, view }) {
    return html`
      <style>
        :host {
          display: block;
          position:relative;
          box-sizing:border-box;
        }

        #actions {
          align-self: flex-end;
          display: flex;
          justify-content: flex-end;
          width: 100%;
          margin-top: auto;
        }

        paper-icon-button {
          border-radius: 50%;
          color: var(--secondary-text-color);
        }

        [hidden] {
          display:none;
        }
      </style>
      <iron-iconset-svg size="24" name="ht-elements-catalog-list-item">
          <svg>
              <defs>
                <g id="add-shopping-cart">
                  <path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"></path>
                </g>
              </defs>
          </svg>
      </iron-iconset-svg>
      <ht-elements-catalog-list-item-horizontal data=${data} hidden?=${
      view === "list" ? false : true
    }>
      <div id="actions" slot="actions">
        <paper-icon-button icon="ht-elements-catalog-list-item:add-shopping-cart"></paper-icon-button>
      </div>
      </ht-elements-catalog-list-item-horizontal>
      <ht-elements-catalog-list-item-vertical data=${data} hidden?=${
      view === "grid" ? false : true
    }><div id="actions" slot="actions">
        <paper-icon-button icon="ht-elements-catalog-list-item:add-shopping-cart"></paper-icon-button>
      </div></ht-elements-catalog-list-item-vertical>
`;
  }

  static get is() {
    return "ht-elements-catalog-list-item";
  }

  static get properties() {
    return {
      data: Object,
      view: String
    };
  }

  constructor() {
    super();
  }
}

customElements.define(HTElementsCatalogListItem.is, HTElementsCatalogListItem);
