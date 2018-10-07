import React from 'react';
import {graphql, createFragmentContainer} from 'react-relay';
import Repository from './Repository'

class Repositories extends React.Component {
  render() {
    const {repositories: {nodes}, id} = this.props.repositories;
    return (
      <div>
        {nodes.map(repository =>
          <Repository
            key={repository.id}
            repository={repository}
            viewerId={id}
          />
        )}
      </div>
    );
  }
}

export default createFragmentContainer(
  Repositories,
  graphql`
    fragment Repositories_repositories on User {
      repositories(first: 10) {
        nodes {
          id,
          ...Repository_repository
        }
      }
    }
  `,
);