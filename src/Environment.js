import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';
require('dotenv').config()

export const endPoint = 'https://api.github.com/graphql'

function fetchQuery(
  operation,
  variables,
) {
  return fetch(endPoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json();
  });
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),  
});

export default environment;