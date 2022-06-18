import { render as rtlRender } from "@testing-library/react";
import { AppContextProvider } from '../context/AppContext';

const render = component => rtlRender(
    <AppContextProvider>
      {component}
    </AppContextProvider>
  )

export default render;