import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AlcoholList from './components/alcohol_list';
import AlcoholChoices from './components/alcohol_choices';
import AlcoholDetails from './components/alcohol_details';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path="/details/:id" component={AlcoholDetails} />
        <Route path="/:type" component={AlcoholChoices} />
        <Route path="/" component={AlcoholList} />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.main-container'));
