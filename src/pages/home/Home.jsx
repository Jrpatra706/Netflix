import React from 'react'
import Hero from '../../components/hero/Hero'
import Movierow from '../../components/movieRow/Movierow'
import endpoints from '../../services/movieService'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Movierow title='Trending' url={endpoints.trending}/>
      <Movierow title='TopRated' url={endpoints.topRated}/>
      <Movierow title='Popular' url={endpoints.popular}/>
      <Movierow title='Comedy' url={endpoints.comedy}/>
      <Movierow title='Upcoming' url={endpoints.upcoming}/>
    </div>
  )
}

export default Home
