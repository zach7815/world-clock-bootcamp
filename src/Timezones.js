import React, { Component } from 'react';
import Clock from './Clock';

export class Timezones extends Component {
	render() {
		return (
			<div id='my-draggable-element' className='timezoneContainer'>
				<Clock timeZone='America/Los_Angeles' />
				<Clock timeZone='Europe/London' />
				<Clock timeZone='Asia/Singapore' />
			</div>
		);
	}
}
