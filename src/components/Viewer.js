import React from 'react';
import {graphql, QueryRenderer} from 'react-relay';
import environment from '../Environment'
import Repositories from './Repositories'

export default class Viewer extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query ViewerQuery {
            viewer {
              id
              ...Repositories_repositories
            }
          }
        `}
        variables={{}}
        render={({error, props}) => {
          if (error) {
            return <div>Error!</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }
          return <Repositories repositories={props.viewer} />
        }}
      />
    );
  }
}