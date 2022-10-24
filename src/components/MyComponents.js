import React from "react";

class MyComponent extends React.Component{
    
    state = {
        name: 'longgait',
        age: 35,
        address: 'binh thạnh'
    };

    handleOnClick(even){
        console.log("click my button");
    }
    handleOnMouseOver(even){
        console.log(even.pageX);
    }
    //JSX
    render(){
        return (
            <div>
               My name {this.state.name} and I'm from {this.state.address}
                <button onClick={this.handleOnClick}>Click me</button>
                <button onMouseOver={this.handleOnMouseOver}>Mouse Over me</button>
            </div>
        );
    }
}

export default MyComponent;