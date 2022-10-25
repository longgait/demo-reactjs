import React from "react";

class MyComponent extends React.Component{
    
    state = {
        name: 'longgait',
        age: 35,
        address: 'binh thạnh'
    };

    handleOnClick = (event) => {
        // console.log("click my button");
        // console.log('My name is :' ,this.state.name);

        this.setState({
            name: 'thanh long',
            age: Math.floor((Math.random() *100) + 1)
        })
    }
    handleOnMouseOver(event){
        console.log(event.pageX);
    }

    handleOnChangeInput = (event) => {
        this.setState({
            name : event.target.value
        }) 
    }
    handleOnSubmit = (event) => {
        event.preventDefault();
    }
    //JSX
    render(){
        return (
            <div>
               My name {this.state.name} and I'm  {this.state.age} old
                {/* <button onClick = {(even) => {this.handleOnClick(even)}}>Click me</button>
                <button onMouseOver = {this.handleOnMouseOver}>Mouse Over me</button> */}
                <form onSubmit={(event)=>{this.handleOnSubmit(event)}}>
                    <input type='text' onChange = { (event) => {this.handleOnChangeInput(event)}} />
                    <button>Submit</button>
                </form>
            </div>
            
        );
    }
}

export default MyComponent;