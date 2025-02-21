import React from "react";
import App from "./App";
import { DataLayer } from "./DataLayer.jsx";
import reducer, {initialState} from "./Reducer.jsx";
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
      <App/>
    </DataLayer>
  </React.StrictMode>
);
