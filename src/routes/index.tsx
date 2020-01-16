import React from 'react'
import { Route } from 'react-router-dom'
import Header from '../components/common/Header'
import Storybook from '../pages/Storybook'
import Footer from '../components/common/Footer'
import Blog from '../pages/Blog'
import Entry from '../pages/Entry'

const Routes = () => {
  return (
    <div>
      <Header/>
      <Route exact path="/story-book" component={Storybook} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/" component={Entry} />
      <Footer/>
    </div>
  )
}

export default Routes
