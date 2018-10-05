import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';

const endPoint = 'https://api.github.com/graphql'

function fetchQuery(
  operation,
  variables,
) {
  return fetch(endPoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 9f880af927cc7664f0aa74547d8c7790f5eafc2c'
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