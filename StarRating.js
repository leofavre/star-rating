import { starRatingTemplate } from './starRatingTemplate.js';

export class StarRating extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['rate'];
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName === 'rate' && oldValue !== newValue) {
      this.updateStars(Number(newValue));
    }
  }

  connectedCallback() {
    const content = starRatingTemplate.content.cloneNode(true);
    this.shadowRoot.appendChild(content);
  }
}

window.customElements.define('star-rating', StarRating);
