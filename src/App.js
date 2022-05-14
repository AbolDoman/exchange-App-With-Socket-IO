import React from 'react';
import Home from "./pages/Home";
import {StockProvider} from "./context/StockContext";
import './pages/styles.css'
const App = () => {
  return (
      <StockProvider>
          <div className={"AppContainer"}>
              <Home />
          </div>
      </StockProvider>
  );
};

export default App;