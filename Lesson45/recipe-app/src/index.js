import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import { RecipesProvider } from "./modules/recipes/RecipesProvider";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./modules/user/UserContext";
import { ThemeProvider } from "@mui/material/styles";
import { appTheme } from "./styles/theme";
import store from "./store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={appTheme}>
      <BrowserRouter>
        <UserProvider>
          <RecipesProvider>
            <Provider store={store}>
              <App />
            </Provider>
          </RecipesProvider>
        </UserProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
