"use strict";
import { LitElement, html } from "@polymer/lit-element";
import { repeat } from "/node_modules/lit-html/lib/repeat.js";
import "ht-elements-catalog/ht-elements-catalog-list-item.js";
class HTElementsCatalogList extends LitElement {
  render({ items, notFound }) {
    return html`
      <style>
        :host {
          display: block;
          position:relative;
          box-sizing:border-box;
        }

        .item {
          max-width:50%;
          width: 50%;
          flex:1 0 auto;
        }

        #container {
          display:flex;
          flex-wrap:wrap;
          margin: 0 -16px;
        }

        ht-elements-catalog-list-item{
          margin:16px;
        }

        #not-found {
          display: flex;
          flex-direction: column;
          align-items:center;
          justify-content:center;
          width:100%;
          margin-top:32px;
        }

        #not-found svg {
          max-width: 420px;
        }

        #not-found #title {
          margin-top: 24px;
          margin-bottom: 8px;
          line-height: 1.5;
          font-size: 20px;
          font-weight: 500;
        }

        #not-found #sub-title {
          margin-top: 8px;
          font-size: 16px;
          font-weight: 400;
          color: var(--secondary-text-color);
        }

        @media screen and (max-width:1024px) {
          #container {
            margin: 0 -8px;
          }

          ht-elements-catalog-list-item{
            margin:8px;
          }

          .item {
            width: calc(50% - 2 * 8px);
          }
        }

        @media screen and (max-width:768px) {
          .item {
            width: calc(100% - 2 * 8px);
          }
        }

        @media screen and (max-width:650px) {
          .item {
            width: calc(50% - 2 * 8px);
          }
        }

        @media screen and (max-width:550px) {
          .item {
            width: calc(100% - 2 * 8px);
          }
        }

        [hidden] {
          display: none !important;
        }
      </style>
      <div id="container">
      ${repeat(
        items,
        item =>
          html`<div class="item"><ht-elements-catalog-list-item data=${item}></ht-elements-catalog-list-item></div>`
      )}
      <div id="not-found" hidden?=${!notFound ? true : false}>
        <svg viewBox="0 0 230 130" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g viewBox="0 0 230 130" class="style-scope yt-icon">
        <defs class="style-scope yt-icon">
          <clipPath id="clip-path" class="style-scope yt-icon">
              <path d="M3.43 126.34H227a29.17 29.17 0 0 0-5.06-24c-4.42-6.11-10-12.51-9.71-28.73s-.4-59.23-20.9-67.3c-28.87-11.37-53.18 18.05-71.57 19s-32.31-9.34-45.87-4.5-11.63 16.68-18.17 19.83-20.58.73-25.18 13.8S34.06 77.8 25 83.73c-8.82 5.75-27.62 9.32-21.57 42.61z" fill="none" class="style-scope yt-icon"></path>
          </clipPath>
        </defs>
        <path fill="#ffc100" d="M3.43 126.34H227a29.17 29.17 0 0 0-5.06-24c-4.42-6.11-10-12.51-9.71-28.73s-.4-59.23-20.9-67.3c-28.87-11.37-53.18 18.05-71.57 19s-32.31-9.34-45.87-4.5-11.63 16.68-18.17 19.83-20.58.73-25.18 13.8S34.06 77.8 25 83.73c-8.82 5.75-27.62 9.32-21.57 42.61z" class="style-scope yt-icon"></path>
        <g clip-path="url(#clip-path)" class="style-scope yt-icon">
            <path fill="#ffd61d" d="M103 87a6 6 0 0 1 6-5.78 5.79 5.79 0 1 1 0 11.57 6 6 0 0 1-6-5.79zm-92.16 31.41a6 6 0 0 1 6-5.78 5.79 5.79 0 0 1 0 11.57 6 6 0 0 1-6-5.79zm14.3-41.94c0-5 4.34-8.8 9.31-9s9 4.33 9 9a9 9 0 0 1-9 9 9.32 9.32 0 0 1-9.31-9zm129.13-12.59H166v11.53h-11.73c-.69 0-1.25-.69-1.25-1.81v-8.26a1.43 1.43 0 0 1 1.25-1.46zM103 111.22c0-4.73 4.12-8.37 8.85-8.55s8.56 4.11 8.56 8.56a8.56 8.56 0 0 1-8.56 8.56 8.86 8.86 0 0 1-8.85-8.57z" class="style-scope yt-icon"></path>
            <path fill="#ffc100" d="M111.73 113.07a1.9 1.9 0 0 1-1.82-1.88 1.82 1.82 0 1 1 3.64 0 1.88 1.88 0 0 1-1.82 1.88z" class="style-scope yt-icon"></path>
            <path fill="#ffd61d" d="M176.68 27.32c0-4.26 3.72-7.54 8-7.71s7.71 3.71 7.71 7.71a7.71 7.71 0 0 1-7.74 7.68 8 8 0 0 1-7.97-7.68z" class="style-scope yt-icon"></path>
            <path fill="#ffc100" d="M184.52 31.19a4 4 0 0 1-3.81-3.94 3.81 3.81 0 1 1 7.62 0 3.94 3.94 0 0 1-3.81 3.94z" class="style-scope yt-icon"></path>
            <path fill="#ffd61d" d="M24.59 56.92A5.47 5.47 0 0 1 30 51.68a5.24 5.24 0 0 1 0 10.48 5.43 5.43 0 0 1-5.41-5.24z" class="style-scope yt-icon"></path>
            <path fill="#ffc100" d="M29.92 59.55a2.7 2.7 0 0 1-2.59-2.68 2.59 2.59 0 1 1 5.18 0 2.68 2.68 0 0 1-2.59 2.68z" class="style-scope yt-icon"></path>
            <path fill="#ffd61d" d="M40 53.15a5.47 5.47 0 0 1 7.53.13 5.24 5.24 0 0 1-7.41 7.41 5.43 5.43 0 0 1-.12-7.54z" class="style-scope yt-icon"></path>
            <path fill="#ffc100" d="M41.87 58.78a2.7 2.7 0 0 1 .06-3.72 2.59 2.59 0 0 1 3.66 3.66 2.68 2.68 0 0 1-3.72.06z" class="style-scope yt-icon"></path>
            <path fill="#ffd61d" d="M52.78 56.92a5.47 5.47 0 0 1 5.42-5.24 5.24 5.24 0 0 1 0 10.48 5.43 5.43 0 0 1-5.42-5.24z" class="style-scope yt-icon"></path>
            <path fill="#ffc100" d="M58.11 59.55a2.7 2.7 0 0 1-2.59-2.68 2.59 2.59 0 1 1 5.18 0 2.68 2.68 0 0 1-2.59 2.68z" class="style-scope yt-icon"></path>
            <path fill="#ffd61d" d="M211 110.72c0-5.23 4.57-9.27 9.8-9.47s9.48 4.56 9.48 9.48a9.48 9.48 0 0 1-9.48 9.48 9.82 9.82 0 0 1-9.8-9.49z" class="style-scope yt-icon"></path>
            <path fill="#ffc100" d="M220.66 113.7a3.06 3.06 0 0 1-2.93-3 2.93 2.93 0 1 1 5.86 0 3 3 0 0 1-2.93 3z" class="style-scope yt-icon"></path>
            <path fill="#ffd61d" d="M104.28 108.46a.5.5 0 0 1-.45-.73l9.57-18.93a.5.5 0 1 1 .89.45l-9.57 18.94a.5.5 0 0 1-.44.27zm96.37 12.97l-3.35-5.08a1.75 1.75 0 0 1-.1-1.75l3.45-6.84-3.45-6a1.75 1.75 0 0 1 0-1.64l3.5-7-3.38-5.57a1.75 1.75 0 0 1 0-1.76l3.42-6.13h5l-3.91 7 3.41 5.61a1.75 1.75 0 0 1 .07 1.68l-3.48 7 3.44 6a1.75 1.75 0 0 1 0 1.65l-3.49 6.91 3.91 5.93zM53 32.24l5.08-3.35a1.75 1.75 0 0 1 1.75-.1l6.84 3.45 6-3.45a1.75 1.75 0 0 1 1.64 0l7 3.5 5.57-3.38a1.75 1.75 0 0 1 1.76 0l6.13 3.42v5l-7-3.91-5.61 3.41a1.75 1.75 0 0 1-1.68.07l-7-3.48-6 3.44a1.75 1.75 0 0 1-1.65 0l-6.91-3.49L53 37.23z" class="style-scope yt-icon"></path>
            <rect fill="#ffd61d" x="153.02" y="54.34" width="5.88" height="5.88" rx="1.4" ry="1.4" class="style-scope yt-icon"></rect>
            <rect fill="#ffd61d" x="153.02" y="44.21" width="5.88" height="5.88" rx="1.4" ry="1.4" transform="rotate(-90 155.965 47.145)" class="style-scope yt-icon"></rect>
            <rect fill="#ffd61d" x="95.08" y="47.15" width="11.9" height="11.9" rx="2.82" ry="2.82" transform="rotate(-90 101.03 53.1)" class="style-scope yt-icon"></rect>
            <rect fill="#ffd61d" x="178.75" y="78.83" width="8.54" height="16.87" rx="2.85" ry="2.85" class="style-scope yt-icon"></rect>
            <rect fill="#ffd61d" x="138.51" y="6.23" width="32.52" height="29.92" rx="2.39" ry="2.39" class="style-scope yt-icon"></rect>
            <rect fill="#ffd61d" x="49.06" y="69.72" width="17.55" height="13.74" rx="1.22" ry="1.22" class="style-scope yt-icon"></rect>
            <rect fill="#ffd61d" x="154.77" y="107.68" width="32.52" height="13.74" rx="1.62" ry="1.62" class="style-scope yt-icon"></rect>
            <path fill="#ffc100" d="M157.43 110.27h27.2v8.57h-27.2z" class="style-scope yt-icon"></path>
            <path fill="#ffd61d" d="M157.43 118.84l7.05-4.78 2.87 2.47 8.08-4.39 1.98 2.42 7.22-4.29.96 9.47-28.16-.9z" class="style-scope yt-icon"></path>
            <path fill="#ffc100" d="M144.34 12.19h20.87v17.99h-20.87z" class="style-scope yt-icon"></path>
            <path fill="#ffd61d" d="M183-.79s-4.66 5.26-2 10.91c2.45 5.21 10.84 2.5 13.62 6.25s1.56 7.23 5.6 8.44c6.75 2 13.46-3.5 13.46-3.5zM60.93 126.34s3.33-20.47 14.31-20.12 9 14 12.92 15.21 4.88-3.1 9.4-.75c2.61 1.35 3.43 5.66 3.43 5.66z" class="style-scope yt-icon"></path>
            <path fill="#ffc100" d="M65.82 126.34s1-5.89 5.46-5.89c3.42 0 6 5.89 6 5.89z" class="style-scope yt-icon"></path>
            <rect fill="#ffd61d" x="-7.73" y="82.16" width="32.52" height="18.05" rx="1.86" ry="1.86" transform="rotate(90 8.53 91.18)" class="style-scope yt-icon"></rect>
            <rect fill="#ffc100" x="7.73" y="98.12" width="5.88" height="5.88" rx="1.4" ry="1.4" transform="rotate(-90 10.67 101.06)" class="style-scope yt-icon"></rect>
            <rect fill="#ffc100" x="7.73" y="89.74" width="5.88" height="5.88" rx="1.4" ry="1.4" transform="rotate(-90 10.675 92.675)" class="style-scope yt-icon"></rect>
        </g>
        <path fill="#4620ae" d="M59.72 102h17.55V47.78H85c1.45 0 2.42 1.33 2.3 3.87s3.64 54 3.4 55.56-1.94 1.57-3.39 1.57H59.72z" class="style-scope yt-icon"></path>
        <path fill="#6f38d4" d="M77.27 47.78H62c-1.09 0-2.3.61-2.3 1.69v24.26a2.64 2.64 0 0 0 2.91 2.74h14.66V65.94h-6.65c-.85 0-1.34-.44-1.34-1.21V58.4c0-.48 0-1 .77-1h7.22z" class="style-scope yt-icon"></path>
        <path fill="#4620ae" d="M123.19 40.8h20.21c2.26 0 3.51 1.45 3.51 4.44v57.05h-18.53c-2.68 0-5.19-2-5.19-6.38z" class="style-scope yt-icon"></path>
        <path fill="#6f38d4" d="M88.15 65.9H113a2 2 0 0 0 2.12-2.11V13.1h17.61a2.69 2.69 0 0 1 2.6 2.72c0 1.39-2 56-2.08 57.25 0 1.62-.93 3.39-3.83 3.39H88.84z" class="style-scope yt-icon"></path>
        <path fill="#4620ae" d="M115.1 13.1h-13.18c-1.45 0-2.5.91-2.5 3.41s1.25 30.5 1.25 32 .4 2.66 2 2.66h12.43v-9.32H109v-15h6.11z" class="style-scope yt-icon"></path>
        <path fill="#6f38d4" d="M146.91 83.49h13.27c1.82 0 2.78-1.57 2.91-3.51s0-40.43 0-42.73 1.45-4.36 4.84-4.36h17.19s-4.86 59-5 61.16c-.33 4.57-2.62 8.24-9.49 8.24h-23.7z" class="style-scope yt-icon"></path>
        <path fill="#4620ae" d="M182.39 66.06h17.86V32.9h-15.13l-2.73 33.16z" class="style-scope yt-icon"></path>
        <path fill="#6f38d4" d="M193.6 50.16c.54-12.43 7.38-21 15.22-21.22l3.65-.09c-.55 8.68 4.79 33.22-3.23 42.61 0 0-.82 0-3.38-.09-7.52-.24-12.77-9.45-12.26-21.21z" class="style-scope yt-icon"></path>
        <path fill="#4620ae" d="M125.82 126.34h-1.12l11.11-19.62.84.48-10.83 19.14zm10.93-18.9h.97v18.91h-.97zm12.93 18.9l-11.4-18.65.83-.51 11.71 19.16h-1.14zM197 50.16c.54-12.43 7.51-21.3 15.47-21.3s14.12 9.52 13.37 21.3-7.08 21.3-16.6 21.3c-7.24.01-12.75-9.54-12.24-21.3z" class="style-scope yt-icon"></path>
        <path fill="#282828" d="M210.63 66.68a7.62 7.62 0 0 1-5.56-2.68c-2.91-3.09-4.44-8.27-4.1-13.84.6-9.75 5.6-16.56 12.17-16.56a6.36 6.36 0 0 1 4.57 2.17c2.84 3 4.45 8.45 4.21 14.31-.38 9.33-5.34 16.6-11.29 16.6z" class="style-scope yt-icon"></path>
        <path fill="#6f38d4" d="M213.15 34.39a5.56 5.56 0 0 1 4 1.94c2.7 2.82 4.24 8.09 4 13.76-.37 8.88-5 15.83-10.54 15.83a6.89 6.89 0 0 1-5-2.4c-2.77-2.95-4.23-7.91-3.9-13.28.57-9.34 5.27-15.86 11.43-15.86m0-1.5c-7.41 0-12.34 7.75-12.92 17.27s4.21 17.27 10.41 17.27 11.62-7.2 12-17.27c.4-9.53-3.88-17.27-9.53-17.27z" class="style-scope yt-icon"></path>
        <path fill="#f86500" d="M209 50.16c.13-2.89 1.75-5 3.6-5s3.29 2.22 3.11 5-1.65 5-3.87 5c-1.67-.03-2.95-2.26-2.84-5z" class="style-scope yt-icon"></path>
        <path fill="#6f38d4" d="M133.23 107.65a4.82 4.82 0 0 1 1.67-6.43 4.62 4.62 0 1 1 4.82 7.88 4.78 4.78 0 0 1-6.49-1.45z" class="style-scope yt-icon"></path>
        <path fill="#4620ae" d="M139.71 109.1a4.62 4.62 0 1 1-4.82-7.88m-92.26-7.86h15c1.79 0 2.57 1 3.08 2.48.31.9 1.23 3.76 1.23 3.76l-5.51.79-1.29-4a.72.72 0 0 0-.68-.5H42.63zm81.78-32.91a2.34 2.34 0 0 1-2.24-2.32 2.24 2.24 0 0 1 4.48 0 2.32 2.32 0 0 1-2.24 2.32zM126.69 42a2.34 2.34 0 0 1-2.32 2.24 2.24 2.24 0 1 1 0-4.48 2.32 2.32 0 0 1 2.32 2.24zm-4.56-15.74a2.34 2.34 0 0 1 2.32-2.26 2.24 2.24 0 1 1 0 4.48 2.32 2.32 0 0 1-2.32-2.22z" class="style-scope yt-icon"></path>
        <path fill="#6f38d4" d="M53 104.59A6.92 6.92 0 0 1 59.83 98a6.63 6.63 0 1 1 0 13.26 6.86 6.86 0 0 1-6.83-6.67z" class="style-scope yt-icon"></path>
        <path fill="#4620ae" d="M59.72 106.22a1.68 1.68 0 0 1-1.61-1.66 1.61 1.61 0 0 1 3.21 0 1.66 1.66 0 0 1-1.6 1.66z" class="style-scope yt-icon"></path>
        <path fill="#282828" d="M28.94 94.5a3 3 0 0 1-2.85-2.95 2.85 2.85 0 1 1 5.7 0 3 3 0 0 1-2.85 2.95z" class="style-scope yt-icon"></path>
        <path fill="#f86500" d="M29.69 102.24s.76-.25 1.17-2.27c.32-1.62-2-7.42 3.06-7.75 4.68-.3 2.31 3.38 5.62 4.27-1.43.38-.19 1.47-.33 2.74-.22 2-3.15 1.35-1.51 2.69 1.86 1.53-8.01.32-8.01.32z" class="style-scope yt-icon"></path>
        <path d="M34.58 100.38c-4.5-1.39-7.79.79-9.52 5.84-1.63 4.74-6.62 6.78-7.5 12.19h19.93a14.17 14.17 0 0 1 1.38-8c5.57 3.31 9.62-.54 10.34-4.13a10.49 10.49 0 0 0-.24-5.75H43c0 1.15 1.27 4.18-.73 4.62-1.42.36-3.19-3.38-7.69-4.77z" fill="#fff" class="style-scope yt-icon"></path>
        <path fill="#6f38d4" d="M37.94 93.89h4.7v1.53h-4.7z" class="style-scope yt-icon"></path>
        <path fill="#282828" d="M24.21 118.41s-.23 1 .83 3c1 1.86 1.48 2.55 1.07 3.28a2.68 2.68 0 0 0-.2 1.65h1s0-1.25.69-1.09a8.74 8.74 0 0 0 4.2 1.09c1.22 0-2.11-.92-2.58-3.47a5.87 5.87 0 0 1 1.2-4.46z" class="style-scope yt-icon"></path>
        <path fill="#4620ae" d="M37.77 96.07c-.53 0-.59-.67-.6-1.44s.12-1.39.6-1.39.6.62.6 1.39.01 1.44-.6 1.44zM32 118.41a11.9 11.9 0 0 0 1.21 2.77c1.06 1.59 2.64 2.78 2.42 3.51a2.75 2.75 0 0 0 .21 1.65h1s-.27-1.25.42-1.09a10.55 10.55 0 0 0 4.47 1.09c1.22 0-1.76-1-3-3.48a14.4 14.4 0 0 1-1.2-4.45z" class="style-scope yt-icon"></path>
        <path fill="#282828" d="M36.31 92.65S36.46 95 35 95.58s-2.32.39-2.1 1.69a2.36 2.36 0 0 1-2.1 2.82c.17-1.49-2.15-4.15 0-6.72a4 4 0 0 1 5.51-.72z" class="style-scope yt-icon"></path>
        <path fill="#f86500" d="M43 100.58c-.79-5.63 6-5.74 6.63-5s-.88 1-.88 1 1.14-.22 1.4.56-1.07.68-1.07.68 1.07-.08 1.26.64c.27 1-1.73.07-1.36 2.12z" class="style-scope yt-icon"></path>
        <path fill="#eee" d="M32 111.93c-2.09-4.23 2.6-6.17-.21-9-1.18-1.17-3-1.09-4.53-.76a11.85 11.85 0 0 0-2.21 4c-1.63 4.74-6.62 6.78-7.5 12.19h12.83s3.56-2.51 1.62-6.43z" class="style-scope yt-icon"></path>
        <path fill="#4620ae" d="M168.57 77.83c-.64-3.22-2.45-6.45 1.34-10.88s4.44-8.31 1.65-11.82-2.7-7.06 1.5-11.9c3.65-4.21.4-8.92-3.06-10.33h-2.06c-3.39 0-4.84 2.06-4.84 4.36s.12 40.79 0 42.73-1 3.27-2.54 3.47h.06c6.72 0 8.64-2.12 7.95-5.63zM63.72 70.34c-1.5-1.78-.24-3.07-1.29-7-.63-2.37-1.84-3.17-2.7-3.43v13.82a2.64 2.64 0 0 0 2.91 2.74h5.61c-.62-3.55-2.6-3.84-4.53-6.13z" class="style-scope yt-icon"></path>
        <path fill="#eee" d="M45.29 100.58H43c0 1.15 1.27 4.18-.73 4.62a1 1 0 0 1-.63-.1c4.36 2.29 4.82-2.23 3.65-4.52z" class="style-scope yt-icon"></path>
        <path fill="#6f38d4" d="M47.35 90.19h1.72v3.17h-1.72z" class="style-scope yt-icon"></path>
        <path fill="#4620ae" d="M45.63 90.19h5.17s.2-1.47-.57-1.48-.7.54-1.07.59-.32-.58-1-.59-.49.59-.86.59-.55-.58-1-.59c-.61-.01-.82 1-.67 1.48z" class="style-scope yt-icon"></path>
      </g></svg>
      <div id="title">Результатов не найдено</div>
      <div id="sub-title">Попробуйте использовать другие ключевые слова или удалите фильтры поиска.</div>
      </div>
      </div>
`;
  }

  static get is() {
    return "ht-elements-catalog-list";
  }

  static get properties() {
    return {
      items: Array,
      notFound: Boolean
    };
  }

  constructor() {
    super();
    this.items = [];
    this.notFound = false;
  }

  set data(data) {
    this.items = data;
    this.items.length === 0 ? (this.notFound = true) : (this.notFound = false);
  }
}

customElements.define(HTElementsCatalogList.is, HTElementsCatalogList);