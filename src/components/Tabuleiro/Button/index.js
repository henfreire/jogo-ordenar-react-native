import React from 'react';
import { StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native';

const Button = ({ index, texto, acao, onPress }) => {
	const handlePress = () => {
		onPress({ index });
	};
	return (
		<View style={styles.container}>
			<TouchableOpacity
      activeOpacity={0}
				style={acao ? styles.buttonAcao : index % 2 == 0 ? styles.button : styles.button2}
				onPress={handlePress}
			>
				<Text style={acao ? styles.textoAcao : styles.texto}>{texto}</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {},
	button: {
		flex: 0,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#0104fc',
		width: 80,
		height: 90,
		borderColor: '#000',
		borderRadius: 5,
		borderWidth: 5,
		padding: 5,
		margin: 3
	},
	button2: {
		flex: 0,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#03a00e',
		width: 80,
		height: 90,
		borderColor: '#000',
		borderRadius: 5,
		borderWidth: 5,
		padding: 5,
		margin: 3
	},
	buttonAcao: {
		flex: 0,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'transparent',
		width: 80,
		height: 90,
		borderColor: 'transparent',
		borderRadius: 5,
		borderWidth: 5,
		padding: 5,
		margin: 3
	},
	texto: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 20
	},
	textoAcao: {
		color: 'transparent',
		fontSize: 20,
		display: 'none'
	}
});
export default Button;
