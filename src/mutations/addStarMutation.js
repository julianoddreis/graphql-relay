import {graphql, commitMutation} from 'react-relay';

const mutation = graphql`
  mutation addStarMutation($input: AddStarInput!) {
    addStar(input: $input) {
      clientMutationId,
      starrable {
        viewerHasStarred
      }
    }
  }
`;

function getOptimisticResponse (clientMutationId, starrableId) {
  return {
    addStar: {
      clientMutationId,
      starrable: {
        id: starrableId,
        viewerHasStarred: true,
        __typename: 'Repository'
      }
    }
  }
}

function commit(
  environment,
  clientMutationId,
  starrableId
) {
  return commitMutation(
    environment,
    {
      mutation,
      variables: {
        input: {clientMutationId, starrableId},
      },
      optimisticResponse: getOptimisticResponse(clientMutationId, starrableId)
    }
  );
}

export default {commit};