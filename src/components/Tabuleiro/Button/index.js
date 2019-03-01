import React from 'react';
import { StyleSheet, Text, View, Animated, TouchableOpacity, PanResponder } from 'react-native';

class Button extends React.Component {
	_panResponder = PanResponder.create({
		onMoveShouldSetPanResponder: (evt, gestureState) => {
			const { index } = this.props;
			this.props.onPress({ index });
		},
		onPanResponderMove: (evt, gestureState) => {},
		onPanResponderTerminationRequest: (evt, gestureState) => true,
		onPanResponderRelease: (evt, gestureState) => {},
		onPanResponderTerminate: (evt, gestureState) => {}
	});
	handlePress = () => {
		this.props.onPress({ index });
	};
	render() {
		const { index, texto, acao } = this.props;

		return (
			<View style={styles.container} {...this._panResponder.panHandlers}>
				<TouchableOpacity
					activeOpacity={0}
					style={acao ? styles.buttonAcao : index % 2 == 0 ? styles.button : styles.button2}
				>
					<Text style={acao ? styles.textoAcao : styles.texto}>{texto}</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

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
