import React from 'react';
import {NativeRouter, Switch, Route} from 'react-router-native';
import { StyleSheet, Text } from 'react-native';
import Home from './screens/Home';
import Sessions from './screens/Sessions';

export default class App extends React.Component {

    render() {
    return (
      <NativeRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/sessions" component={Sessions}/>
        </Switch>
      </NativeRouter>

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
