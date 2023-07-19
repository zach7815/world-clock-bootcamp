import React from 'react';
import { controlClassName } from './bgColor';
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

	componentDidUpdate() {
		const timezones = document.querySelectorAll('.timezones');
		controlClassName(Array.from(timezones));
	}

	render() {
		return (
			<p>
				<span className='timezones'>{this.props.timeZone}</span>:
				{this.state.date.toLocaleString('en-GB', {
					timeZone: this.props.timeZone,
				})}
			</p>
		);
	}
}

export default Clock;
