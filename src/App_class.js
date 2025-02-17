import React, { Component } from 'react'
import NavbarClass from './components/NavbarClass'
import NewsClass from './components/NewsClass'


export default class Appclass extends Component {
  render() {
    return (
      <div>
        <NavbarClass/>
        <NewsClass pageSize={6} country ={'us'} />
      </div>
    )
  }
}
