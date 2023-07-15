import React from 'react';

class Clock extends React.Component {
	constructor(props) {
		super(props);
		// Initialise component state to contain "date" attribute with current date and time
		this.state = { date: new Date() };
		this.interval = null;
	}

	componentDidMount() {
		this.interval = setInterval(() => {
			this.setState({ date: new Date() });
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		return (
			<p>{`${this.props.timeZone}:
		${this.state.date.toLocaleString('en-GB', {
			timeZone: this.props.timeZone,
		})}`}</p>
		);
	}
}

export default Clock;
