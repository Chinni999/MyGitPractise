import React from 'react';
import ReactDOM from 'react-dom';
import css from './index.css';

class Display extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			data:"i am a state"
			};
		}
		

	    render(){
			return(
				<div>
					{this.props.data}
					{this.state.data}
				</div>	
				);
		}
	}
	export default Display;




		