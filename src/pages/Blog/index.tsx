import * as React from 'react'
import Pages from './components/Pages'

interface BlogProps {}

const Blog = (props: BlogProps) => {
  return (
    <div className="section">
      <div className="box">
        <Pages />
      </div>
    </div>
  )
}

export default Blog
