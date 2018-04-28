import { starRatingTemplate } from './starRatingTemplate.js';

export class StarRating extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const content = starRatingTemplate.content.cloneNode(true);
    this.shadowRoot.appendChild(content);
  }
}

window.customElements.define('star-rating', StarRating);
