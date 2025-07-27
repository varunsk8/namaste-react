import React from "react";
import ReactDOM from "react-dom/client";

// React Elements => JS object (on render)=> Html elements
// const heading = React.createElement("h1", { id: "heading" }, "Heading 1");
// console.log('heading', heading);

// JSX - is not HTML, Jsx has Html/Xml syntax, this also gives JS object same as above but this is better readable
// Jsx => react.createElement => react element => Js object => html Element (on render) //  this is done by babel (Js compiler)
// const jsxHeading = <h1 id="heading" className="jsx_heading">Jsx Heading</h1>; //  single line
const jsxHeading = (
  <h1 id="heading" className="jsx_heading">
    Jsx Heading
  </h1>
); // Multi-line
// console.log('jsx Heading', jsxHeading);

// React Component
// Class based Components - Old way
// Functional Components - New way

const PI = 3.14;

const HeadingComponent = () => (
  <div id="container">
    <h1 className="heading">HeadingComponent</h1>
    <h2>
      {PI} {/* Injecting any Js using curly braces */}
    </h2>
    <JsxHeading />
    {/* This is Component Composition: calling 1 component into another one */}
    <JsxHeading>this is adksahlkdahkljd</JsxHeading>
    {jsxHeading}
    {JsxHeading()}
  </div>
);

const JsxHeading = () => (
  <h1 id="heading" className="jsx_heading">
    Jsx Heading Component
  </h1>
); // Multi-line

// const HeadingComponent = () => <h1>HeadingComponent</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);
root.render(<HeadingComponent />);
