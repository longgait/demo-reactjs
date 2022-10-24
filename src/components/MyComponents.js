import React from "react";

class MyComponent extends React.Component{
    
    state = {
        name: 'longgait',
        age: 35,
        address: 'binh thạnh'
    };

    handleOnClick = (even) => {
        // console.log("click my button");
        // console.log('My name is :' ,this.state.name);

        this.setState({
            name: 'thanh long',
            age: Math.floor((Math.random() *100) + 1)
        })
    }
    handleOnMouseOver(even){
        console.log(even.pageX);
    }
    //JSX
    render(){
        return (
            <div>
               My name {this.state.name} and I'm  {this.state.age} old
                <button onClick = {(even) => {this.handleOnClick(even)}}>Click me</button>
                <button onMouseOver = {this.handleOnMouseOver}>Mouse Over me</button>
            </div>
        );
    }
}

export default MyComponent;