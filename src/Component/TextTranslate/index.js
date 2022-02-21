import React from "react";
import { connect } from "react-redux";
import { actionEng, actionUkr } from "../../reducer/action";

class TextTranslate extends React.Component{
    constructor(){
        super();
        this.handelEng = this.handelEng.bind(this);
        this.handelUKR = this.handelUKR.bind(this);
    }

    handelEng(){
        this.props.dispatch(actionEng);
       
    }
    
    handelUKR(){
        this.props.dispatch(actionUkr);
       
    }
    render(){
        return(
            <div>
                <h2>{this.props.text}</h2>
                <button onClick={this.handelEng}>ENG</button>
                <button onClick={this.handelUKR}>UKR</button>
            </div>
            
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        text: state,
    };
};

export default connect (mapStateToProps)(TextTranslate);
