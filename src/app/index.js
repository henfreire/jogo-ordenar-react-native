/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

//Telas
import InicialScreen from './Inicial';
import JogarScreen from './Jogar';
import VenceuScreen from './Venceu';

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
	android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu'
});

const MainNavigator = createStackNavigator(
	{
		Home: {
			screen: InicialScreen
		},
		Jogar: {
			screen: JogarScreen
		},
		Venceu: {
			screen: VenceuScreen
		}
	},
	{
		headerMode: 'none',
		navigationOptions: {
			headerVisible: false
		}
	}
);

const App = createAppContainer(MainNavigator);

export default App;
