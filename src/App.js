import React from 'react';
import Draggable from 'react-draggable';
import YouTube from 'react-youtube';
import './App.css';
import './Clock';
import { Timezones } from './Timezones';

class App extends React.Component {
	constructor(props) {
		super(props);
		// Initialise component state to contain "date" attribute with current date and time
		this.state = { date: new Date() };
		this.interval = null;
		this.state = {
			position: { x: 0, y: 0 },
		};
		this.state = {
			videoId: 'BHACKCNDMW8',
			playerOptions: {
				width: '100%',
				height: '100%',
				playerVars: {
					autoplay: 1,
					controls: 0,
					loop: 1,
					mute: 1,
					modestbranding: 1,
					showinfo: 0,
					width: '100%',
					height: '100%',
				},
			},
		};
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
		const { videoId, playerOptions } = this.state;
		return (
			<div className='App'>
				<div className='video-background'>
					<YouTube videoId={videoId} opts={playerOptions} />
				</div>
				<header className='App-header'>
					<Draggable>
						<div className='timezonesDragBox'>
							<Timezones />
						</div>
					</Draggable>
				</header>
			</div>
		);
	}
}

export default App;
