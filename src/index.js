import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import rootReducer from './rootReducer';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
// import { Switch, Route } from 'react-router'; 
import { BrowserRouter, Route, Router } from 'react-router-dom';
import GamesPage from './GamesPage';
import GameForm from './GameForm';
import GameFormPage from './GameFormPage';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

const store = createStoreWithMiddleware(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

const Root = () => (
    <BrowserRouter>
        <Provider store={store}>
            <App>
                <Route path='/games' exact component={GamesPage} />
                <Route path='/games/new' component={GameFormPage} />
                <Route path='/game/:_id' component={GameFormPage} />
            </App>
        </Provider>
    </BrowserRouter>
  );

ReactDOM.render(<Root />
    , document.getElementById('root'));
registerServiceWorker();
