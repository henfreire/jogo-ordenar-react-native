import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableHighlight
} from "react-native";

const Button = ({ index, valor }) => {
  return (
    <Animated.View style={styles.container}>
      <Text style={styles.valor}>{valor}</Text>
      <Text style={styles.texto}>Jogadas!</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },
  texto: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 'bold'
  },
  valor: {
    color: "#fff",
    fontSize: 30,
    fontWeight: 'bold'
  }
});
export default Button;
