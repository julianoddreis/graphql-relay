/**
 * @flow
 * @relayHash bce7d12bb07eeeda64fa4e8cf855ea25
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddStarInput = {
  starrableId: string,
  clientMutationId?: ?string,
};
export type addStarMutationVariables = {|
  input: AddStarInput
|};
export type addStarMutationResponse = {|
  +addStar: ?{|
    +clientMutationId: ?string,
    +starrable: {|
      +viewerHasStarred: boolean
    |},
  |}
|};
export type addStarMutation = {|
  variables: addStarMutationVariables,
  response: addStarMutationResponse,
|};
*/


/*
mutation addStarMutation(
  $input: AddStarInput!
) {
  addStar(input: $input) {
    clientMutationId
    starrable {
      __typename
      viewerHasStarred
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "AddStarInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "AddStarInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "clientMutationId",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "viewerHasStarred",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "addStarMutation",
  "id": null,
  "text": "mutation addStarMutation(\n  $input: AddStarInput!\n) {\n  addStar(input: $input) {\n    clientMutationId\n    starrable {\n      __typename\n      viewerHasStarred\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "addStarMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addStar",
        "storageKey": null,
        "args": v1,
        "concreteType": "AddStarPayload",
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "starrable",
            "storageKey": null,
            "args": null,
            "concreteType": null,
            "plural": false,
            "selections": [
              v3
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "addStarMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addStar",
        "storageKey": null,
        "args": v1,
        "concreteType": "AddStarPayload",
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "starrable",
            "storageKey": null,
            "args": null,
            "concreteType": null,
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "__typename",
                "args": null,
                "storageKey": null
              },
              v3,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
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
(node/*: any*/).hash = '4cee01587d59944569288a2216cc5990';
module.exports = node;
