import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import Actions from '../actions/Actions'

export default class SearchBar extends Component {

    handleSearch (e) {
      e.preventDefault()
      let {input} = this.refs
      let name = input.value
      // Actions.searchName(name)
    }

  render () {
    return (
      <div className="searchBlock">
        <form onSubmit={(e) => this.handleSearch(e)}>
          <input type="text" className="searchBar" ref="input" placeholder="enter company name" required />
          <Button primary>Search</Button>
        </form>
      </div>
    )
  }
}
