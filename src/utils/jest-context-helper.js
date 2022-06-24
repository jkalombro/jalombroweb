import { render as rtlRender } from "@testing-library/react";
import { AppContextProvider } from "../context/AppContext";
import { BrowserRouter } from "react-router-dom";

//This utility component helps the testers to render components wrapped by ContextAPI provider
const render = (component) =>
  rtlRender(<AppContextProvider>{component}</AppContextProvider>);

export const renderRouter = (component) =>
  render(
    <AppContextProvider>
      <BrowserRouter>{component}</BrowserRouter>
    </AppContextProvider>
  );

export default render;
