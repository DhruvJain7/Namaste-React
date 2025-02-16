import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById("root"));
// Element 
const jsxheading = <h1 id="heading">Namaste React Using JSX</h1>
//component
const Title = () => (
  <h1 className='head'>Namaste React using JSX</h1>
);
const Title1 = () =>{
  return (<h1 className='head'>Namaste React using JsX</h1>)
};
//Component Composition
const Heading = () => {
  return (
    <div>
    <Title />
    < Title1 />
  <h1 className="heading">Namaste React Functional component</h1>
  </div>
  


)};

root.render(<Heading />);