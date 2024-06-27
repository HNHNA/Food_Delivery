import React, { useState } from 'react'

import Header from '~/components/Header/Header'
import ExploreMenu from '~/components/ExploreMenu/ExploreMenu'

import './Home.css'

const Home = () => {

  const [category, setCategory] = useState('All')
  console.log(category)
  console.log(setCategory)
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Home
