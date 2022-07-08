import React, { Component } from 'react'

export class TrendingShows extends Component {

    constructor(props)
    {
        super(props); //to receive anything from parent component you can work with props
        this.state = {
            showsList: [
                {id: 1, name: 'Man vs Wild', host: 'Bear Grylls', isInWatchlist: false},
                {id: 2, name: 'BGMI Master Series', host: 'Ocean Sharma', isInWatchlist: true},
                {id: 3, name: 'Ind vs Eng', host: 'Aakash chopra', isInWatchlist: true},
                {id: 4, name: 'Man vs Wild w/ Ranveer', host: 'Bear Grylls', isInWatchlist: false},
    
            ]
        }
    
    }

    addToWatchlistHandler = () =>{
        console.log(this);
        this.setState({

        })
    }

  render() { 
    
    let shows = null;
    if( this.state.showsList && this.state.showsList.length > 0)
    {
        shows  = this.state.showsList.map((show) =>{
          return (  <li key={show.id} className="list-group-item">
            #{show.id}. {show.name} -hosted By: {show.host}
            <button className='btn btn-primary btn-list float-end' onClick={this.addToWatchlistHandler}>
                {show.isInWatchlist ? 'Added To Watchlist': 'Add to Watchlist'} </button>
        </li> )
        })
    }
    

    return (
      <div>
        <ul className='list-group'> 
            {
                this.state.showsList && this.state.showsList.length > 0 ? shows: <div>Array is empty</div>
            } 
        </ul>
      </div>
    )
  }
}

export default TrendingShows