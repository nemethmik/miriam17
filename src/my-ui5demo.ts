import {html,component} from "haunted"
import {TemplateResult} from "lit-html"
//import "@ui5/webcomponents/dist/Icon.js"
import "@ui5/webcomponents-icons/dist/Assets.js"
import "@ui5/webcomponents-icons/dist/AllIcons.js"
import "@ui5/webcomponents/dist/Button.js"
import "@ui5/webcomponents/dist/Label.js"
import "@ui5/webcomponents/dist/DatePicker.js"
import "@ui5/webcomponents/dist/MessageStrip.js"
import "@ui5/webcomponents/dist/Dialog.js"
import "@ui5/webcomponents/dist/Switch.js"
import "@ui5/webcomponents/dist/Title.js"
/*
const openBtn = document.getElementById("openDialogButton");
const closeBtn = document.getElementById("closeDialogButton");
const dialog = document.getElementById("hello-dialog");
openBtn.addEventListener("click", () => {
  dialog.show();
});
closeBtn.addEventListener("click", () => {
  dialog.close();
});

*/
function PSkelin():TemplateResult {
    console.log("PSkelin rendering")
    return html`
        <ui5-title>UI5 Web Components are here!</ui5-title>
        <br /><br />
        <ui5-messagestrip design="Warning" no-close-button>
        Adding more components? Check the sample page of the component and add the
        corresponding import statement in src/index.js
        </ui5-messagestrip>
        <br /><br />
        <!-- ui5-date-picker style="width: 300px;"></ui5-date-picker -->
        <br /><br />
        <ui5-button design="Positive">Positive</ui5-button>
        <ui5-button design="Negative">Negative</ui5-button>
        <br /><br />
        <!-- ui5-switch design="Graphical" checked></ui5-switch -->
        <br />
        <ui5-button id="openDialogButton">Open Dialog</ui5-button>
        <br />
        <ui5-dialog id="hello-dialog" header-text="Dialogs are easy!">
        <div stype="padding: 2rem; display:flex; justify-content: center;">
            Hello World!
            <ui5-button id="closeDialogButton">Dismiss</ui5-button>
        </div>
        </ui5-dialog>
    `
}
window.customElements.define("my-ui5demo", component(PSkelin))