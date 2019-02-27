/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Image } from 'react-native';

import { logoBranca } from 'ordenar/src/components/Logo';
import ButtonJogar from 'ordenar/src/components/Inicial/Button';

export default class App extends Component {
  static navigationOptions = {
    title: 'Home',
   
  };

  handleJogar = ()=>{
    this.props.navigation.push('Jogar');
  }
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.logo}>
					<Image source={logoBranca} style={styles.img} />
				</View>
				<View style={styles.vBtnJogar}>
					<ButtonJogar texto="Jogar" onPress={this.handleJogar} />
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
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#531CB3',
		fontFamily: 'Roboto'
	},
	vBtnJogar: {
		marginTop: 10
	},
	logo: {
		flex: 0,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	img: {
		flex: 0,
		marginLeft: 20,
		width: 200,
		height: 200
	}
});
