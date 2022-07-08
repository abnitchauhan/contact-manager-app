import React, { Component } from 'react'
import Channel from './Channel/Channel'

export default class ChannelList extends Component {

    constructor(props)
    {
    super(props)
        this.state = {
            tvChannelList: [
                {name: 'Star Sports', info:'#1 Sporst Channel', logo: 'star.png'},
                {name: 'HBO', info:'#1 Movie Channel', logo: 'star.png'},
                {name: 'NatGeo', info:'#1 Adventure Channel', logo: 'star.png'} 
            ], number: 10
        }; 
    }

    // Public Method -- arrow function -- Event Handler
     increaseCount = () =>{

        // Changing state --setState()
        // setState will result in re-rendering
         this.setState({number : this.state.number + 10}) 
    }

  render() {
    return (
      <>
      <div className="container text-left">
        <div className="row"> 
           <Channel name={this.state.tvChannelList[0].name} info={this.state.tvChannelList[0].info} logo={this.state.tvChannelList[0].logo}></Channel> 
        </div>
        <p className='marginTop'>{this.state.number}</p>
        <button className='btn btn-danger' onClick={this.increaseCount}> Increase Count</button>
      </div>
      </>
    )
  }
}
