import { html, component, useState} from "haunted"
import { TemplateResult} from "lit-html" //Works only if haunted is installed first and then UI5
interface ICounterProps extends HTMLElement {
    //start:number, //Attribute names should be as simple this without camel case
    startAttr:string, //Attributes values are always strings!!!
    startProp:number, //Properties can have any type, but lit-html doesn't check if the caller passes the value accordingly.
}
function Counter({startAttr = "5", startProp = 6}:ICounterProps):TemplateResult {
    const [count, setCount] = useState<number>(/*parseInt(startAttr)*/startProp)
    return html`
        <p>Start Prop = ${startProp} Start Attribute = ${startAttr}</p>
        <div>${count}</div>
        <button type="button" @click=${():void => setCount(count + 1)}>
            Increment
        </button>
    `
}
window.customElements.define("my-counter", component<ICounterProps>(Counter,
    //@ts-ignore //start-attr = startAttr I can live with this typing limitation
    { observedAttributes: ["start-attr"]})
)
