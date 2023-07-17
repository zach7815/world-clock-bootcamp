import React from 'react';
import logo from './logo.png';
import './App.css';
import './Clock';
import Clock from './Clock';

class App extends React.Component {
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
			<div className='App'>
				<header className='App-header'>
					<img src={logo} className='App-logo' alt='logo' />
					<div className='timeZones'>
						<Clock timeZone='America/Los_Angeles' />
						<Clock timeZone='Europe/London' />
						<Clock timeZone='Europe/Berlin' />
					</div>
				</header>
			</div>
		);
	}
}

export default App;
