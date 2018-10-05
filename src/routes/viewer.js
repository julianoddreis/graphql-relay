import React from 'react';
import {graphql, QueryRenderer} from 'react-relay';
import environment from '../Environment'

export default class viewer extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query viewerQuery($number_of_repos:Int!) {
            viewer {
              name
              repositories(last: $number_of_repos) {
                nodes {
                  name
                }
              }
            }
          }
        `}
        variables={{number_of_repos: 3}}
        render={({error, props}) => {
          if (error) {
            return <div>Error!</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }
          return <div>User ID: {props.viewer.name}</div>;
        }}
      />
    );
  }
}
