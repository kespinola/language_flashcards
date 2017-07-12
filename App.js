import React from 'react';
import {NativeRouter, Switch, Route} from 'react-router-native';
import { applyMiddleware, compose } from 'redux';
import { createAction, handleActions, combineActions } from 'redux-actions';
import { createStore } from 'redux';
import { install } from 'redux-loop';
import { Provider } from 'react-redux';
import { StyleSheet, Text } from 'react-native';
import { addCorrect, nextCard, prevCard, changeLang } from './actions'
import Home from './screens/Home';
import Sessions from './screens/Sessions';

const enhancer = compose(
  applyMiddleware(),
  install()
);

const defaultState = {
  cards: [{id: 1, en: 'Cat', fr: 'Chat'}, { id: 2, en: 'Dog', fr: 'Chien'}],
  correct: [],
  current: 0,
  codex: ['en', 'fr'],
  lang: true
};
const reducer = handleActions({
  [addCorrect]: (state, { payload: { card: { id } } }) => ({
    ...state,
    correct: state.correct.concate([id])
  }),
  [nextCard]: (state, action) => ({
    ...state,
    current: ++state.current
  }),
  [prevCard]: (state, action) => ({
    ...state,
    current: --state.current
  }),
  [changeLang]: (state, action) => ({
    ...state,
    lang: !!state.lang
  })
}, defaultState);

const store = createStore(reducer, defaultState, enhancer);

export default class App extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <NativeRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/sessions" component={Sessions} />
            </Switch>
          </NativeRouter>
        </Provider>
      );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
