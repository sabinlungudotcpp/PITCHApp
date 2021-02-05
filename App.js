import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import {createStore, combineReducers} from 'redux';
import Reducer from './store/reducers/Reducer';
import {Provider} from 'react-redux';

const rootReducer = combineReducers({ // The root reducer to be used
  organisation: Reducer
});

const store = createStore(rootReducer); // Create a store out of the reducer

export default function App() {
  return (
    <Provider store = {store}>
      
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});