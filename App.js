import React from "react";
import ReactDOM from "react-dom/client";

//  const heading=React.createElement(
            //     "h1",
            //     {id:"xyz"},
            //     "hello world react"
            // );

            //  console.log(heading);
            //  const root=ReactDOM.createRoot(document.getElementById("root"));
            //  root.render(heading);

//   <div id ="parent">
//        <div id="child">
//         <h1>I am h1 tag</h1>
//        </div>
//   </div>

const parent = React.createElement("div",{id:"parent"},[
      React.createElement("div",{id:"child"},[
      React.createElement("h1",{},"hi Iam h1 tag"),
        React.createElement("h1",{},"hello how are you"),
        React.createElement("h2",{id:"cx12"},"my name is narendra")
      ]),
       React.createElement("div",{id:"child2"},[
      React.createElement("h1",{},"hi Iam h1 tag"),
      React.createElement("h1",{},"hello how are you"),
      React.createElement("h2",{id:"cx12"},"my name is narendra")
    ]),

]);             

   console.log(parent);
const root2=ReactDOM.createRoot(document.getElementById("root"));

root2.render(parent);















