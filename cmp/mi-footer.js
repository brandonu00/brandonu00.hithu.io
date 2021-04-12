class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `&copy; 2021
      Gutierrez Trinidad Brandon Uriel.`;
  }
}
customElements.define(
  "mi-footer", MiFooter);
