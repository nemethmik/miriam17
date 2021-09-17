# Reactive Programming with Hooks and Web Components

**This project is put on halt for now, for explanation scroll down to the section Experimenting with UI5 Web Compoents and Haunted**
--

ViteJS, lit-html, haunted, optionally with SAP UI5 web components experimental project (Sylla)

After cloning **npm install** and then **npm run dev**.

Check out the live application on [Azure](https://brave-grass-0944e8203.azurestaticapps.net/)

feat(initial): Implement Haunted Counter web component sample

- The accompanying video explains the story:
[Reactive Web Programming with Haunted Hooks - 01 Getting Started with Vite, Lit-HTML, TypeScript](https://youtu.be/rFSLdbXUjLU)
- [Reactive Haunted Hooks - 02 Web Components Application Deployed on Azure](https://youtu.be/7kvLNW8xYAo)

[Haunted](https://www.npmjs.com/package/haunted) was written in TypeScript

Project initialization Steps:
- npm init vite
- npm install
- npm install haunted
- npm install npm install @ui5/webcomponents
    - UI5 uses lit-element@2 while haunted uses @1, so haunted should be installed first, therefore the TemplateResult is coming from the correct version when using `import { TemplateResult} from "lit-html"` for a haunted function component.

Just watch the video, how simple it is to use haunted, if you are familiar with the concepts of web components aka custom elements and reactive hooks popularized by React.
Also not how much cleaner this style is va react. 
Everything is standard: JavaScript standard template (back-tick) literals vs JSX and web components vs React's own proprietary component machinery.
Also check out how amazingly simple is ViteJs to setup a project vs create-react-app.
Also a number of excellent production ready web component libraries are available you can start using right away: SAP UI5 web components, Vaadin Fusion (based on Lit Element), Shoelace (based on Lit Element), Microsoft @fluentui/web-components (based on Microsoft Fast). In theory even IONIC (based on Stencil, but Stencil uses JSX for templating) could be used, too, since a webcomponent is a native custom element that the browsers support, no need to polyfill in practice today.
Keep in mind that lit-html can be used with regular HTML, not only with web components. By coincidence the same invented lit-html as well as Lit Element to pioneer web components.

So, with [Haunted](https://hauntedhooks.netlify.app/) you have the functonal hook programming paradigm, with Lit Element the classic TypeScript decorators-powered class component life-style.

## How Functional Components Work
A function component has private/local state only (useState), the only way it can communicate with the environment are 
- (1) If it receives a callback function
- (2) If they re an object with multiple callback functions (useReducer, useContext).
- (3) Via (custom) event handlers, which is basically the same as case (1)

Class components (regular custom element implementations like Lit Element) can have properties that can be accessed bidirectionally, this way providing a traditional imperative (MVC/MVVM) programming paradigm, which is totally impossible with function components.

So, get prepared, if you have experience with Lit Element a number of patterns simply won't work with Haunted components.

## Attributes
The values of HTML attributes even when defined for custom elements are always strings; so, **always define the type of an attribute as string in the props interface**. The type of properties can be anything but attributes should always be strings.

## Using TypeScript with Haunted 
- https://www.giters.com/matthewp/haunted/issues/221?amp=1  
    - This was pretty short, but helpt a lot how to use TypScript typings with Haunted.
    The props interfaces should be extended from HTMLElement and then the custom element definitions could be as simple as
    `window.customElements.define("my-app", component<IAppProps>(App,{observedAttributes:["startpage"]}))`

## Experimenting with UI5 Web Compoents and Haunted
- https://sap.github.io/ui5-webcomponents/ is the main page for UI5
- https://codesandbox.io/s/71r1x5o51q?file=/index.html 
    - I have started its implementation, but after some hours of attempts I gave up because of a number of issues, incompatibilities and limitations:
        - UI5 is built with lit-element@2 and haunted is with @1 this might be reason of the number of error messages in the browser console
        - UI5 icons simply did't want to work at all. The date-picker and switch components wanted to use some icons, the date-picker didn't even show up.
        - The dialog component has no *show/hide* properties or attributes. This is a clear sign that this component was designed for imperative programming, which is totally fine with Lit Element, but not with haunted; imperative programming with ref hooks is a nightmare.
        - These are all limitations of haunted or UI5 incompatibility with haunted. These and the fact that Lit-Plugin VS Code extension gives no property intellisense for custom element attributes/properties have brought me to the conclusion that haunted is not worth prime time. TypeScript support is totally missing from haunted, the original author explained that he doesn't use TypeScript. UI5 has no TypeScript support either. 
        **So, all these lead me to stop experimenting with both haunted, and UI5 and go for Vaadin or Shoelace.** 

## In Case I'd go on with this project, this could be the next step.        
- https://sap-samples.github.io/ui5-webcomponents-sample-react/  implement this, too
    - https://github.com/SAP-samples/ui5-webcomponents-sample-react
- https://sap.github.io/ui5-webcomponents/playground/docs/guidelines/ how to format Git commit messages
