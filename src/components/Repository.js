import React from 'react';
import {graphql, createFragmentContainer} from 'react-relay'
import enviroment from '../Environment'
import addStarMutation from '../mutations/addStarMutation'

class Repository extends React.Component {
  handleStar = () =>
    addStarMutation.commit(
      enviroment,
      this.props.viewerId,
      this.props.repository.id
    )

  render() {
    const {name, url, viewerHasStarred} = this.props.repository
    return (
      <div>
        <h2>{name}</h2>
        <a href={url} target='/blank'>{url}</a>
        <p>{viewerHasStarred ? 'Yes' : 'NO'}</p>
        <button onClick={this.handleStar}>click to star</button>
      </div>
    )
  }
}

export default createFragmentContainer(
  Repository,
  graphql`
    fragment Repository_repository on Repository {
      id,
      name,
      url,
      viewerHasStarred  
    }
  `
)