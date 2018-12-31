import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Button from "./Button/index.js";
import Jogadas from "./Jogadas";
// import {Logo} from 'components/Logo';
class Tabuleiro extends React.Component {
  state = {
    jogadas: 0,
    lista: [
      {
        numero: 0
      },
      {
        numero: 1
      },
      {
        numero: 2
      },
      {
        numero: 3
      },
      {
        numero: 4
      },
      {
        numero: 5
      },
      {
        numero: 6
      },
      {
        numero: 7
      },
      {
        numero: 8
      },
      {
        numero: 9
      },
      {
        numero: 10
      },
      {
        numero: 11
      },
      {
        numero: 12
      },
      {
        numero: 13
      },
      {
        numero: 14
      },
      {
        numero: 15
      }
    ]
  };
  onPress = ({ index }) => {
    // console.log('press', index);
    console.tron.log(index);

    this.logica({ index });
  };
  plusJogada = () => {
    this.setState({ jogadas: this.state.jogadas + 1 });
  };
  logica = ({ index }) => {
    let { lista } = this.state;
    let aux = lista[index];
    let sinal = -1;
    let p = index;
    let achou = false;
    if (lista[index].numero != 0) {
      //Primeiro
      for (let i = 0; i < 2; i++) {
        p = Math.abs(index + sinal);
        //console.tron.log("primeiro p", p, "i", i);
        if (this.keyExist(lista, p)) {
          if (lista[p].numero == 0) {
            //console.tron.log("primeiro achou p", p, "i", i,  "numero", lista[p].numero);
            lista[index] = lista[p];
            lista[p] = aux;
            this.plusJogada();
            achou = true;
            break;
          } else {
            sinal = 1;
          }
        }
      }
      if (!achou) {
        //Segundo
        sinal = -4;
        for (let i = 0; i < 2; i++) {
          p = Math.abs(index + sinal);
          //console.tron.log("segundo p", p, "i", i, "numero", lista[p].numero);
          if (this.keyExist(lista, p)) {
            if (lista[p].numero == 0) {
              //console.tron.log("segundo achou p", p, "i", i);
              lista[index] = lista[p];
              lista[p] = aux;
              this.plusJogada();
              break;
            } else {
              sinal = 4;
            }
          }
        }
      }
    }

    this.setState({ lista });
  };
  keyExist = (array, key) => (typeof array[key] !== "undefined" ? true : false);
  render() {
    const { lista, jogadas } = this.state;
    return (
      <View style={styles.container}>
        <Jogadas valor={jogadas} />
        <View style={styles.tabuleiro}>
          {lista.map((item, index) => (
            <Button
              key={index}
              index={index}
              texto={item.numero}
              acao={item.numero == 0 ? true : false}
              onPress={this.onPress}
            />
          ))}
        </View>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#531CB3"
  },
  tabuleiro: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
  },
  
});
export default Tabuleiro;
