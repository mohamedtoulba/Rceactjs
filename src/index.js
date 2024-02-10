// index.js
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import store from './EFM/store';
// import RouteStagiaire from './EFM/routes';
// import Header from './EFM/Header';
// import { BrowserRouter } from 'react-router-dom';
// // import Stagiaire from './EFM/stagiaire';
// // import ApiStagiaires from './EFM/ApiStagiaires';
// /////////////////////////////////////////////////////////////////////////
// // import RouteLivres from './EFM2/RouteLivers';

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <Provider store={store}>
//     <BrowserRouter>
//         <Header />
//         <RouteStagiaire />
//     </BrowserRouter>
//    {/* <Stagiaire nom="Nada" image="https://www.acs-ami.com/fr/blog/wp-content/uploads/2012/07/etudier-a-l-etranger-1.jpg" /> */}
//   </Provider>
  
  // <ApiStagiaires />
  // <BrowserRouter>
  // <RouteLivres />
  // </BrowserRouter>
  
// );

// redux toolkit :
// index.js
// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import Stor from "./ReduxToolkit/Store";
// import { Provider } from "react-redux";
// import RoutreGroup from "./ReduxToolkit/router";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//     <Provider store={Stor}>
//        <RoutreGroup />
//     </Provider>
    
   
// );


//////////////////////////////////////////////////////////////////////

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import store from "./Control2/store";
import { Provider } from "react-redux";
import RouterLivres from "./Control2/RouterLivres";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Provider store={store}>
       <RouterLivres />
    </Provider>
    
   
);


