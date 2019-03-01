import React from 'react';
import { StyleSheet, Text, View, Animated, TouchableHighlight } from 'react-native';

const Button = ({ index, texto, acao, onPress, styleButton }) => {
	const handlePress = () => {
		onPress && onPress({ index });
	};
	return (
		<View style={styles.container}>
			<TouchableHighlight style={{ ...styles.button, ...styleButton }} onPress={handlePress}>
				<Text style={acao ? styles.textoAcao : styles.texto}>{texto}</Text>
			</TouchableHighlight>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {},
	button: {
		flex: 0,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0.2)',
		
		height: 50,
		borderColor: 'rgba(0,0,0,0.2)',
		borderRadius: 5,
		borderWidth: 5,
		padding: 8,
		margin: 3
	},
	texto: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 20,
		textAlign: 'center'
	},
	textoAcao: {
		color: 'transparent',
		fontSize: 20,
		display: 'none'
	}
});
export default Button;
