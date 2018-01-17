import React, { Fragment } from 'react'

import Content from './components/content'

export default function App () {
  return (
    <Fragment>
      <header>
        <div>
          <a href=''>Home</a>
          <a href=''>Add book</a>
          <a href=''>Add Store</a>
        </div>
      </header>
      <Content />
    </Fragment>
  )
}
