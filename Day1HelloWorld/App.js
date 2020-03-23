/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Hello World</Text>
              <Text style={styles.sectionDescription}>
                Welcome to new react native app.
              </Text>
            </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    marginTop: 10,
    textAlign: "center" ,
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    color: Colors.dark,
  },

});

