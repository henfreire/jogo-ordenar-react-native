/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button, Image } from "react-native";
import Tabuleiro from "../components/Tabuleiro/index.js";
import { logoBranca } from "ordenar/src/components/Logo";
const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image source={logoBranca} style={styles.img} />
        </View>
        <Tabuleiro />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#531CB3",
    fontFamily: "Roboto"
  },
  welcome: {
    fontSize: 20,
    padding: 5,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  logo: {
    flex: 0,
    justifyContent: "flex-start",
  },
  img: {
    flex: 0,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection:"column",
    width: 60,
    height: 40
  }
});
