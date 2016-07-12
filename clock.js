import React from 'react';

export default React.createClass({
	getInitialState: function(){
		var date = new Date();
		return {
			seconds:date.getSeconds(),
			minutes:date.getMinutes(),
			hours:date.getHours(),
			extra:null,
			extrmin:null
			}
	},
	addTime: function(){
		if(this.state.seconds < 9 ){
			this.setState({
				extra: 0,
				seconds:this.state.seconds + 1
			})
		}else if(this.state.seconds >= 59){
			this.setState({
				seconds: this.state.seconds - 59,
				minutes: this.state.minutes + 1,
				extra:0
					})

		}else if(this.state.minutes > 59) {
			this.setState({
				minutes: this.state.minutes - 60,
				hours:this.state.hours + 1
					});
		}else if(this.state.minutes < 10){
			this.setState({
				seconds:this.state.seconds + 1,
				minutes:this.state.minutes + 1,
				extramin:0
			});
		}else if(this.state.hours > 23){
			this.setState({
				hours:this.state.hours - 24
			})
		}else{
			this.setState({
			extra:null, 
			extramin:null,
			seconds:this.state.seconds + 1
			})
		}
	},

	componentWillMount: function(){
		setInterval(this.addTime, 10);

	},
  	render: function(){
  		return (
    	<div>
    		<h1>{this.state.hours}:{this.state.extramin}{this.state.minutes}:{this.state.extra}{this.state.seconds}</h1>
    	</div>
    	)
     }
})