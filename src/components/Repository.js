import React from 'react';
import {graphql, createFragmentContainer} from 'react-relay'

class Repository extends React.Component {
  render() {
    const {name} = this.props.repository
    
    return (
      <div>
        <h2>{name}</h2>
      </div>
    )
  }
}

export default createFragmentContainer(
  Repository,
  graphql`
    fragment Repository_repository on Repository {
      name
    }
  `
)