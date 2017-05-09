import React from 'react';
import ReactDOM from 'react-dom';
import css from './index.css';


class Child extends React.Component{

	    render(){
			return(
				<div>
				 <h1>child component {this.props.userProps} I am here {this.props.passProps}{this.props.sriProps}</h1>
				</div>
				);
		}
	}
	export default Child;





		