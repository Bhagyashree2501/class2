import React from 'react'

class Ex4 extends React.Component {
    constructor(props) {
        super(props);
        //state

this.state = {
    x: 123,
    y: 24,
    title: 'Welcome to string Example',
    view : false,
    colors: ['red', 'green', 'blue'],
    user: {
        name: 'raju',
        email: 'raju@gamil.com',
        age: 32
    }
  }     
}

render() {
    return (
        <div>
            <h3> states in Class Component </h3>
            <h3> x = {this.state.x} </h3>
            <h3> y = {this.state.y} </h3>
            <h3> {this.state.title} </h3>
            <h3> {this.state.view ? "Say True" : "Say False" } </h3>
            <hr/>

            <ol>
                {
                    this.state.colors.map((item,index)  => {
                        return (
                            <li key={index}> {item} </li>
                        )
                    })
                }
            </ol>

            <hr/>

            <h3> user name = { this.state.user.name} </h3>
            <h3> user email = { this.state.user.email} </h3>
            <h3> user age = { this.state.user.age} years</h3>
            
        </div>
    )
 }
}

export default Ex4