/**
 * @flow
 * @relayHash 2ef3dd0f8c038510d08b9377d673e0fd
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ViewerQueryVariables = {|
  number_of_repos: number
|};
export type ViewerQueryResponse = {|
  +viewer: {|
    +name: ?string,
    +repositories: {|
      +nodes: ?$ReadOnlyArray<?{|
        +name: string
      |}>
    |},
  |}
|};
export type ViewerQuery = {|
  variables: ViewerQueryVariables,
  response: ViewerQueryResponse,
|};
*/


/*
query ViewerQuery(
  $number_of_repos: Int!
) {
  viewer {
    name
    repositories(last: $number_of_repos) {
      nodes {
        name
        id
      }
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "number_of_repos",
    "type": "Int!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v2 = [
  {
    "kind": "Variable",
    "name": "last",
    "variableName": "number_of_repos",
    "type": "Int"
  }
],
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "ViewerQuery",
  "id": null,
  "text": "query ViewerQuery(\n  $number_of_repos: Int!\n) {\n  viewer {\n    name\n    repositories(last: $number_of_repos) {\n      nodes {\n        name\n        id\n      }\n    }\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ViewerQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          v1,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "repositories",
            "storageKey": null,
            "args": v2,
            "concreteType": "RepositoryConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "nodes",
                "storageKey": null,
                "args": null,
                "concreteType": "Repository",
                "plural": true,
                "selections": [
                  v1
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ViewerQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          v1,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "repositories",
            "storageKey": null,
            "args": v2,
            "concreteType": "RepositoryConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "nodes",
                "storageKey": null,
                "args": null,
                "concreteType": "Repository",
                "plural": true,
                "selections": [
                  v1,
                  v3
                ]
              }
            ]
          },
          v3
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0f7ad9d1681a62045d50a5ab0f832146';
module.exports = node;
