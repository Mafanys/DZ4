import React from "react";

class LifeComponent extends React.Component{
    componentWillMount(){
        console.log("Mounted");
    }
    componentDidMount(){
        console.log("Mounted after first render");
        alert("Открылся компонент");
    }
    componentWillUnmount(){
        alert("закрылся компонент");
        console.log("UnMounted");
    }
    render(){
        console.log("render");
        return(
            <h2>Hello</h2>            
        );
    }
}

export default LifeComponent;