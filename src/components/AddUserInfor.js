import React from "react";

class AddUserInfor extends React.Component{
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
    handleOnChangeInputAge = (event) => {
        this.setState({
            age : event.target.value
        }) 
    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        // console.log(this.state);
        // truyền data vào handleaddnewuser
        this.props.handleAddNewUser({
            id: Math.floor((Math.random() *100) + 1) + '-random',
            name: this.state.name,
            age: this.state.age
        });
    }
    render(){
        return(
            <div>
                My name {this.state.name} and I'm  {this.state.age} old
                {/* <button onClick = {(even) => {this.handleOnClick(even)}}>Click me</button>
                <button onMouseOver = {this.handleOnMouseOver}>Mouse Over me</button> */}
                <form onSubmit={(event)=>{this.handleOnSubmit(event)}}>
                    <label>Your name</label>
                    <input  value={this.state.name}
                            type='text' 
                            onChange = { (event) => {this.handleOnChangeInput(event)}} />
                    
                    <label>Your age</label>
                    <input  value={this.state.age}
                            type='text' 
                            onChange = { (event) => {this.handleOnChangeInputAge(event)}} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddUserInfor;