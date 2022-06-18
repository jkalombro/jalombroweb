import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { AppContextProvider } from './context/AppContext';
import * as serviceWorker from './serviceWorker';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppContextProvider>
        <App />
    </AppContextProvider>
);

serviceWorker.unregister();
