import React from 'react';
import { StyleSheet, Text, View, Image, ToastAndroid } from 'react-native';
import Button from './Button/index.js';

class Tabuleiro extends React.Component {
	handlePress = ({ index }) => {
		this.props.onPress({ index });
	};
	render() {
		const { lista } = this.props;
		return (
			<View style={styles.container}>
				<View style={styles.tabuleiro}>
					{lista.map((item, index) => (
						<Button
							key={index}
							index={index}
							texto={item.num}
							acao={item.num == 0 ? true : false}
							onPress={this.handlePress}
						/>
					))}
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		backgroundColor: '#F1B802',
		justifyContent: 'center'
	},
	tabuleiro: {
		flex: 2,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 5
	}
});
export default Tabuleiro;
