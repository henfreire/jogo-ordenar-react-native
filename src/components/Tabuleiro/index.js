import React from 'react';
import { StyleSheet, Text, View, Image, ToastAndroid } from 'react-native';
import Button from './Button/index.js';
import Jogadas from './Jogadas';
class Tabuleiro extends React.Component {
	state = {
		jogadas: 0,
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
		//this.gerarNovo();
	}
	gerarNovo = ()=>{
		const { size } = this.props;
		const lista = this.tabuleRandom({ size });
		this.setState({ lista });
	}
	onPress = ({ index }) => {
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
		if (lista[index].num != 0) {
			//Primeiro
			for (let i = 0; i < 2; i++) {
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
				for (let i = 0; i < 2; i++) {
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
			ToastAndroid.show('Parabéns você venceu!', ToastAndroid.SHORT);
			this.gerarNovo();
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
		const { lista, jogadas } = this.state;
		return (
			<View style={styles.container}>
				<Jogadas valor={jogadas} />
				<View style={styles.tabuleiro}>
					{lista.map((item, index) => (
						<Button
							key={index}
							index={index}
							texto={item.num}
							acao={item.num == 0 ? true : false}
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
		flexDirection: 'column',
		alignItems: 'center',
		backgroundColor: '#531CB3'
	},
	tabuleiro: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
		alignItems: 'center'
	}
});
export default Tabuleiro;
