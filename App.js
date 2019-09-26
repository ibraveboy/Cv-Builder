/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import rootReducer from './redux/reducers'
import { ApplicationProvider } from "react-native-ui-kitten"
import { mapping, light as lightTheme } from '@eva-design/eva';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet
} from 'react-native';
import AppContainer from "./components/navigation"

const store = createStore(rootReducer,applyMiddleware(thunk))


const App = () => {
  return (
    <Provider store={store}>
      <ApplicationProvider mapping={mapping} theme={lightTheme} >
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.main}>
          <AppContainer/>
        </SafeAreaView>
      </ApplicationProvider>
    </Provider >
  );
};

const styles = StyleSheet.create({
  main: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
  }
})
export default App;
