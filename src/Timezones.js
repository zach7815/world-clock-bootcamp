import React, { Component } from 'react';
import Clock from './Clock';
const timezones = ['America/Los_Angeles', 'Europe/London', 'Asia/Singapore'];

export class Timezones extends Component {
	render() {
		return (
			<div id='my-draggable-element' className='timezoneContainer'>
				{timezones.map((timezone) => {
					return <Clock key={timezone} timeZone={timezone} />;
				})}
			</div>
		);
	}
}
