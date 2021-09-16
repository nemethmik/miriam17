# Reactive Programming with Hooks and Web Components

ViteJS, lit-html, haunted, optionally with SAP UI5 or Vaadin or any other (Shoelace) web components experimental project (Sylla)

Check out the live application on [Azure](https://brave-grass-0944e8203.azurestaticapps.net/)

feat(initial): Implement Haunted Counter web component sample

The accompanying video explains the story:
[Reactive Web Programming with Haunted Hooks - 01 Getting Started with Vite, Lit-HTML, TypeScript](https://youtu.be/rFSLdbXUjLU)

Project initialization Steps:
- npm init vite
- npm install
- npm install haunted

Just watch the video, how simple it is to use haunted, if you are familiar with the concepts of web components aka custom elements and reactive hooks popularized by React.
Also not how much cleaner this style is va react. 
Everything is standard: JavaScript standard template (back-tick) literals vs JSX and web components vs React's own proprietary component machinery.
Also check out how amazingly simple is ViteJs to setup a project vs create-react-app.
Also a number of excellent production ready web component libraries are available you can start using right away: SAP UI5 web components, Vaadin Fusion (based on Lit Element), Shoelace (based on Lit Element), Microsoft @fluentui/web-components (based on Microsoft Fast). In theory even IONIC (based on Stencil, but Stencil uses JSX for templating) could be used, too, since a webcomponent is a native custom element that the browsers support, no need to polyfill in practice today.
Keep in mind that lit-html can be used with regular HTML, not only with web components. By coincidence the same invented lit-html as well as Lit Element to pioneer web components.

So with [Haunted](https://hauntedhooks.netlify.app/) you have the functonal hook programming paradigm, with Lit Element the classic TypeScript decorators-powered class component life-style.
