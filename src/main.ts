import './style.css'
import { html, component, useState } from 'haunted';

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <p>
  <my-counter></my-counter>
  </p>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`

function Counter() {
  const [count, setCount] = useState(0);

  return html`
    <div id="count">${count}</div>
    <button type="button" @click=${() => setCount(count + 1)}>
      Increment
    </button>
  `;
}

customElements.define('my-counter', component(Counter));