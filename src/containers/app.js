import React, { Component } from 'react'
import {Link,IndexLink} from 'react-router'


class App extends Component{

  render(){
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}



export default App
