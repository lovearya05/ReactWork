import React from "react";
class Car extends React.Component {

    constructor(props) {
      super(props);
      this.state = {color: "red"};
    }
    
    componentDidMount(){
        setTimeout(()=>{
            this.setState({color:'green'})
        },1000)
    }

    componentDidCatch(){
        
    }

    render() {
      return <h2>I am a Car!  {this.state.color}</h2>;
    }
}

export default Car;