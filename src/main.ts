import "./style.css"
import { html, render, useState, component } from "haunted"
import { TemplateResult} from "lit-html"
import "./my-counter"
import "./my-ui5demo"

const app = document.querySelector<HTMLDivElement>("#app")!
render(html`<my-app startpage="CounterDemo"></my-app>
`,app)  

type TPageType = "CounterDemo" | "UI5Demo"
interface IAppProps extends HTMLElement {
  startpage: TPageType
}
function App({startpage = "CounterDemo"}:IAppProps): TemplateResult {
  const [page,setPage] = useState<TPageType>(startpage)
  return html`
    <h1>Hello Vite Web Components with Haunted Hooks and TypeScript!</h1>
    <button @click=${():void => setPage("CounterDemo")}>Counter</button>
    <button @click=${():void => setPage("UI5Demo")}>UI5 Demo</button>
    <p>
      <!-- lit-html will not perform any type checking, juts regard it as a bare-bone JavaScript.
      That is if the .startProp value is not number it will cause a runtime error.
      This is a major limitation when no property intellisense support is available for haunted
      in Visual Studio Code. The Lit-Plugin paerforms only property support for components
      derived from Lit Element.
      For example if .startProp=${"STRING18"} lit-htmls works with it happily, too.
      -->
      ${page == "CounterDemo" ? html`<my-counter start-attr=9 .startProp=${18}></my-counter>` : ""}
      ${page == "UI5Demo" ? html`<my-ui5demo></my-ui5demo>` : ""}
    </p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
  `  
} 
window.customElements.define("my-app", component<IAppProps>(App,{observedAttributes:["startpage"]}))
