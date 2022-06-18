import { render as rtlRender } from "@testing-library/react";
import { AppContextProvider } from '../context/AppContext';

//This utility component helps the testers to render components wrapped by ContextAPI provider
const render = component => rtlRender(
    <AppContextProvider>
      {component}
    </AppContextProvider>
  )

export default render;