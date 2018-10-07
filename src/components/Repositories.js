import React from 'react';
import {graphql, createFragmentContainer} from 'react-relay';
import Repository from './Repository'

class Repositories extends React.Component {
  render() {
    const {repositories: {repositories: {nodes}}} = this.props;
    return (
      <div>
        {nodes.map(repository =>
          <Repository
            key={repository.id}
            repository={repository}
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