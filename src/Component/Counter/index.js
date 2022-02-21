import React from "react";
import { actionMinus, actionPlus } from "../../reducer/action";
import {connect} from 'react-redux'

class Counter extends React.Component{
    constructor(){
        super();
        this.handelPlus = this.handelPlus.bind(this);
        this.handelMinus = this.handelMinus.bind(this);
    }
    handelPlus(){
        this.props.dispatch(actionPlus);
    }
    handelMinus(){
        this.props.dispatch(actionMinus);
    }
    render(){
        return(
            <div>
                <h2>{this.props.counter}</h2>
                <button onClick={this.handelPlus}>+</button>
                <button onClick={this.handelMinus}>-</button>
            </div>
           
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        counter: state,
    }      
    
};

export default connect (mapStateToProps)(Counter);