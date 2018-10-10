import {graphql, commitMutation} from 'react-relay';

const mutation = graphql`
  mutation removeStarMutation($input: RemoveStarInput!) {
    removeStar(input: $input) {
      clientMutationId,
      starrable {
        viewerHasStarred
      }
    }
  }
`;

function getOptimisticResponse (clientMutationId, starrableId) {
  return {
    removeStar: {
      clientMutationId,
      starrable: {
        id: starrableId,
        viewerHasStarred: false,
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