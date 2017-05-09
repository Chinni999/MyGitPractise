import React from 'react';
import ReactDOM from 'react-dom';
import css from './index.css';
import Display from './Display.jsx';
import Child from './Child.js';
class App extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			username:'',
			show:false
			};
		}
		updateState(event){
			this.setState({
                username: event.target.value
			});
		}
		password(event){
			this.setState({
				password: event.target.value
			});
		}
		submit(){
			this.setState({
				 show:true
				 });
		}
		
	    render(){
			return(
				<div>
				<div>
				 <h4 className="head">Login form</h4>
				 <Child 
				 userProps={this.state.username}
				 passProps={this.state.password}
				 sriProps={this.state.password}/> 
				 <div><span className={this.state.show?"username":"hidden"}>{this.state.username}</span>
				<span className={this.state.show?"password":"hidden"}> {this.state.password}</span></div>
				<div className ={this.state.show?"hidden":"username"}><input className = "user" type="text" onChange={this.updateState.bind(this)}/></div>
				<div  className ={this.state.show?"hidden":"username"}><input className = "password" type="password" onChange={this.password.bind(this)}/></div>				
			    <button type="submit" className={this.state.show ?"hidden":"submit"} onClick={this.submit.bind(this)}>Submit</button>		
			
				</div>
				<div></div>
				</div>
				);
		}
	}
	export default App;





		