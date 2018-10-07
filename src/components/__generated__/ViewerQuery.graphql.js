/**
 * @flow
 * @relayHash fbc0d95a46492d67318f5eee0e212c3f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Repositories_repositories$ref = any;
export type ViewerQueryVariables = {||};
export type ViewerQueryResponse = {|
  +viewer: {|
    +id: string,
    +name: ?string,
    +$fragmentRefs: Repositories_repositories$ref,
  |}
|};
export type ViewerQuery = {|
  variables: ViewerQueryVariables,
  response: ViewerQueryResponse,
|};
*/


/*
query ViewerQuery {
  viewer {
    id
    name
    ...Repositories_repositories
  }
}

fragment Repositories_repositories on User {
  repositories(first: 10) {
    nodes {
      id
      ...Repository_repository
    }
  }
}

fragment Repository_repository on Repository {
  id
  name
  url
  viewerHasStarred
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "ViewerQuery",
  "id": null,
  "text": "query ViewerQuery {\n  viewer {\n    id\n    name\n    ...Repositories_repositories\n  }\n}\n\nfragment Repositories_repositories on User {\n  repositories(first: 10) {\n    nodes {\n      id\n      ...Repository_repository\n    }\n  }\n}\n\nfragment Repository_repository on Repository {\n  id\n  name\n  url\n  viewerHasStarred\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ViewerQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
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
          v0,
          v1,
          {
            "kind": "FragmentSpread",
            "name": "Repositories_repositories",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ViewerQuery",
    "argumentDefinitions": [],
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
          v0,
          v1,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "repositories",
            "storageKey": "repositories(first:10)",
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 10,
                "type": "Int"
              }
            ],
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
                  v0,
                  v1,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "url",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "viewerHasStarred",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b6babe0ae979dfb642f2212fa89d39b7';
module.exports = node;
