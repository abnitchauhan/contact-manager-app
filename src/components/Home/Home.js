import React from 'react'
import ProgramList from '../ProgramList/ProgramList';
import ChannelList from '../ChannelList/ChannelList';
import TrendingShows from '../TrendingShows/TrendingShows';
import MyProfile from '../MyProfile/MyProfile';
const Home = () => {
  return (
    <div>
         <h1 className='text-center'>Content Goes Here</h1>
    <ProgramList />
    <h2 className='marginTop'>Channel List</h2>
    <ChannelList />
    <h2 className='marginTop'>Trending Shows</h2>
    <TrendingShows />
    <h2 className='marginTop'>My Profile</h2>
    <MyProfile />
    </div>
  )
}

export default Home