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
    }
  );
}

export default {commit};