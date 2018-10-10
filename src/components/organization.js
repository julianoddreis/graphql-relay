import React from 'react';
import {graphql, QueryRenderer} from 'react-relay';
import environment from '../Environment'
import Repositories from './Repositories'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 34px;
  font-weight: 400;
  padding: 50px;
` 

export default class Viewer extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query organizationQuery {
            organization(login: "facebook") {
              name,
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
          return <div>
              <Title>{props.organization.name}</Title>
              <Repositories repositories={props.organization} />
            </div>
        }}
      />
    );
  }
}
