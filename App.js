import React from "react";
import ReactDOM from "react-dom/client";

 const Title = () => (
    <h1 className="head" tabIndex="5">Hello react</h1>
 );

 const HeadingComponent =() =>(
    <div id="container">
      
       {Title()}   
      <Title/>    
      <Title></Title>    
       
      <h1 className="heading">Namaste React Functional Component</h1>
    </div>
 )
//all in one declaratio

  //  console.log(parent);
  const root2=ReactDOM.createRoot(document.getElementById("root"));

root2.render(<HeadingComponent/>);















