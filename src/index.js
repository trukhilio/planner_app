import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './containers/app';
import configureStore from './store/configureStore';
import ContextProvider from './components/ContextProvider'

const store = configureStore();
const context = {
    insertCss: styles => styles._insertCss(),
};

render(
    <ContextProvider className="container" context={context}>
        <Provider store={store}>
            <App />
        </Provider>
    </ContextProvider>,
    document.getElementById('root')
);