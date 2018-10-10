/**
 * @flow
 * @relayHash d928095debb1307c5269ff4fad1ff0f9
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Repositories_repositories$ref = any;
export type organizationQueryVariables = {||};
export type organizationQueryResponse = {|
  +organization: ?{|
    +name: ?string,
    +$fragmentRefs: Repositories_repositories$ref,
  |}
|};
export type organizationQuery = {|
  variables: organizationQueryVariables,
  response: organizationQueryResponse,
|};
*/


/*
query organizationQuery {
  organization(login: "facebook") {
    name
    ...Repositories_repositories
    id
  }
}

fragment Repositories_repositories on Organization {
  repositories(first: 100) {
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
var v0 = [
  {
    "kind": "Literal",
    "name": "login",
    "value": "facebook",
    "type": "String!"
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "organizationQuery",
  "id": null,
  "text": "query organizationQuery {\n  organization(login: \"facebook\") {\n    name\n    ...Repositories_repositories\n    id\n  }\n}\n\nfragment Repositories_repositories on Organization {\n  repositories(first: 100) {\n    nodes {\n      id\n      ...Repository_repository\n    }\n  }\n}\n\nfragment Repository_repository on Repository {\n  id\n  name\n  url\n  viewerHasStarred\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "organizationQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "organization",
        "storageKey": "organization(login:\"facebook\")",
        "args": v0,
        "concreteType": "Organization",
        "plural": false,
        "selections": [
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
    "name": "organizationQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "organization",
        "storageKey": "organization(login:\"facebook\")",
        "args": v0,
        "concreteType": "Organization",
        "plural": false,
        "selections": [
          v1,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "repositories",
            "storageKey": "repositories(first:100)",
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 100,
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
                  v2,
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
          },
          v2
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7fb8a3a550b7b3f5a1d9bb091848de52';
module.exports = node;
