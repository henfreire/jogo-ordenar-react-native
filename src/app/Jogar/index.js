/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Image } from 'react-native';
import Tabuleiro from 'ordenar/src/components/Tabuleiro/index.js';
import { logoBranca } from 'ordenar/src/components/Logo';
import Botao from 'ordenar/src/components/ui/Button';
import Jogadas from 'ordenar/src/components/Tabuleiro/Jogadas';
import Time from 'ordenar/src/components/Time';
const listaFacil = [
	{
		num: 0
	},
	{
		num: 1
	},
	{
		num: 2
	},
	{
		num: 3
	},
	{
		num: 4
	},
	{
		num: 5
	},
	{
		num: 6
	},
	{
		num: 7
	},
	{
		num: 8
	},
	{
		num: 9
	},
	{
		num: 10
	},
	{
		num: 11
	},
	{
		num: 12
	},
	{
		num: 13
	},
	{
		num: 14
	},
	{
		num: 15
	}
];
export default class App extends Component {
	state = {
		jogadas: 0,
		size: 16,
		lista: [
			{
				num: 0
			},
			{
				num: 1
			},
			{
				num: 2
			},
			{
				num: 3
			},
			{
				num: 4
			},
			{
				num: 5
			},
			{
				num: 6
			},
			{
				num: 7
			},
			{
				num: 8
			},
			{
				num: 9
			},
			{
				num: 10
			},
			{
				num: 11
			},
			{
				num: 12
			},
			{
				num: 13
			},
			{
				num: 14
			},
			{
				num: 15
			}
		]
	};
	UNSAFE_componentWillMount() {
		this.gerarNovo();
	}
	handleVoltar = () => {
		this.props.navigation.push('Home');
	};
	handleVenceu = () => {
		this.props.navigation.push('Venceu');
	};
	handleNovoJogo = () => {
		this.gerarNovo();
	};
	gerarNovo = () => {
		const { size } = this.state;
		const lista = this.tabuleRandom({ size });
		this.setState({ lista, jogadas: 0 });
	};
	handlePress = ({ index }) => {
		this.logica({ index });
	};
	plusJogada = () => {
		this.setState({ jogadas: this.state.jogadas + 1 });
	};
	handleFacil = () => {
		this.setState({ lista: listaFacil, jogadas: 0 });
	};
	logica = ({ index }) => {
		const listaE = [ 0, 4, 8, 12 ];
		const listaD = [ 3, 7, 11, 15 ];
		let { lista } = this.state;
		let aux = lista[index];
		let sinal = -1;
		let p = index;
		let achou = false;
		let indice = 0;
		if (lista[index].num != 0) {
			//Primeiro
			if (listaD.some((x) => x == index)) indice = 1;
			else indice = 0;
			for (let i = indice; i < 2; i++ ) {
				p = Math.abs(index + sinal);
				//console.tron.log("primeiro p", p, "i", i);
				if (this.keyExist(lista, p)) {
					if (lista[p].num == 0) {
						//console.tron.log("primeiro achou p", p, "i", i,  "num", lista[p].num);
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
				if (listaE.some((x) => x == index)) indice = 1;
				else indice = 0;
				for (let i = indice; i < 2; i++ ) {
					p = Math.abs(index + sinal);
					//console.tron.log("segundo p", p, "i", i, "num", lista[p].num);
					if (this.keyExist(lista, p)) {
						if (lista[p].num == 0) {
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
		const ganhou = this.verificarGanhou();
		if (ganhou) {
			//ToastAndroid.show('Parabéns você venceu!', ToastAndroid.SHORT);
			this.handleVenceu();
		}
	};
	keyExist = (array, key) => (typeof array[key] !== 'undefined' ? true : false);

	verificarGanhou = () => {
		let { lista } = this.state;
		const crescente = lista.every((val, i, arr) => !i || val.num >= arr[i - 1].num);
		const decrescente = lista.every((val, i, arr) => !i || val.num <= arr[i - 1].num);
		return crescente || decrescente;
	};

	tabuleRandom = ({ size }) => {
		let n = 0;
		let tabu = [];
		while (tabu.length < size) {
			n = Math.floor(Math.random() * size);
			if (!tabu.find((x) => x.num == n)) {
				tabu.push({
					num: n
				});
			}
		}
		return tabu;
	};
	render() {
		const { jogadas, lista } = this.state;
		return (
			<View style={styles.container}>
				<View style={styles.cabecalho}>
					<Time />
				</View>
				<Jogadas valor={jogadas} />
				<Tabuleiro lista={lista} onPress={this.handlePress} />
				<View style={styles.butoes}>
					<Botao texto="Voltar" onPress={this.handleVoltar} styleButton={styles.buttonJogar} />
					<Botao texto="Novo Jogo" onPress={this.handleNovoJogo} styleButton={styles.buttonJogar} />
					<Botao texto="Fácil" onPress={this.handleFacil} styleButton={styles.buttonJogar} />
				</View>
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
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F1B802',
		fontFamily: 'Roboto'
	},
	welcome: {
		fontSize: 20,
		padding: 5,
		textAlign: 'center',
		margin: 10
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5
	},
	logo: {
		marginTop: 10
	},
	img: {
		flex: 0,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		flexDirection: 'column',
		width: 60,
		height: 40
	},
	buttonJogar: {
		borderColor: '#fff',
		backgroundColor: 'rgba(0,0,0,0)',
		borderWidth: 0.5
	},
	butoes: {
		flex: 0,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		marginBottom: 10
	},
	cabecalho: {
		flex: 0,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row'
	}
});
