import axios from 'axios';
import React, { Component } from 'react'

export default class MyProfile extends Component {
    // constructor()
    // {
    //     super();

    // }

    componentDidMount()
    {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(function(response){
            console.log(response)
        })
        .catch(function(err){
            console.log(err)
        })
        .finally(function(){
            console.log('Its Over..')
        })
    }

  render() {
    return (
      <div>MyProfile</div>
    )
  }
}
