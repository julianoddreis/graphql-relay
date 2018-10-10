import React from 'react';
import {graphql, createFragmentContainer} from 'react-relay'
import enviroment from '../Environment'
import addStarMutation from '../mutations/addStarMutation'
import removeStarMutation from '../mutations/removeStarMutation'
import styled from 'styled-components'

const ItemContainer = styled.div`
  border: 1px solid black;
  padding: 20px;
  margin-right: 50px;
  margin-left: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
`
const Button = styled.button`
  padding: 10px 20px;
  float: right;
`

class Repository extends React.Component {
  
  addStar = () =>
    addStarMutation.commit(
      enviroment,
      this.props.viewerId,
      this.props.repository.id
    )

  removeStar = () =>
    removeStarMutation.commit(
      enviroment,
      this.props.viewerId,
      this.props.repository.id
    )

  render() {
    const {name, url, viewerHasStarred} = this.props.repository
    return (
      <ItemContainer>
        <div>
          <Title>{name}</Title>
          <a href={url} target='/blank'>{url}</a>
        </div>
        <Button
          onClick={viewerHasStarred ? this.removeStar : this.addStar}
        >{viewerHasStarred ? 'UNSTAR' : 'STAR'}
        </Button>
      </ItemContainer>
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