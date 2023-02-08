

import React, { Suspense} from 'react';
import {setupIonicReact} from "@ionic/react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

import {Quiz} from "./pages/Quiz";
import {Home} from "./pages/Home";


setupIonicReact();

function App() {
  return (
      <Router>
          <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/quiz" element={<Quiz/>}/>
              </Routes>
          </Suspense>
      </Router>
  );
}
export default App;
