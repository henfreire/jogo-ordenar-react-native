import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default class Time extends Component {
	state = {
		seconds: 0,
		time: '00:00:00'
	};
	UNSAFE_componentWillMount() {
		setInterval(() => {
			this.handlePlusTime();
		}, 1000);
	}
	handlePlusTime = () => {
		const { seconds } = this.state;
		const novoSeconds = seconds + 1;
		const time = this.convertToHhMmSs(novoSeconds);
		this.setState({ time, seconds: novoSeconds });
	};
	twoDigits(num) {
		return num > 9 ? '' + num : '0' + num;
	}
	convertToHhMmSs(seconds) {
		const h = this.twoDigits(Math.floor(seconds / 3600));
		const m = this.twoDigits(Math.floor((seconds % 3600) / 60));
		const s = this.twoDigits(Math.floor((seconds % 3600) % 60));
		return `${h}:${m}:${s}`;
	}
	render() {
		const { time } = this.state;

		return (
			<View>
				<Text style={styles.textCrono}> {time} </Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
    textCrono:{
        color: '#fff',
        fontSize: 20
    }
});
