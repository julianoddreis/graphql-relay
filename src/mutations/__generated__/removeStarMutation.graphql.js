/**
 * @flow
 * @relayHash bb9d26e227c152cade014cc26d756329
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RemoveStarInput = {
  starrableId: string,
  clientMutationId?: ?string,
};
export type removeStarMutationVariables = {|
  input: RemoveStarInput
|};
export type removeStarMutationResponse = {|
  +removeStar: ?{|
    +clientMutationId: ?string,
    +starrable: {|
      +viewerHasStarred: boolean
    |},
  |}
|};
export type removeStarMutation = {|
  variables: removeStarMutationVariables,
  response: removeStarMutationResponse,
|};
*/


/*
mutation removeStarMutation(
  $input: RemoveStarInput!
) {
  removeStar(input: $input) {
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
    "type": "RemoveStarInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "RemoveStarInput!"
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
  "name": "removeStarMutation",
  "id": null,
  "text": "mutation removeStarMutation(\n  $input: RemoveStarInput!\n) {\n  removeStar(input: $input) {\n    clientMutationId\n    starrable {\n      __typename\n      viewerHasStarred\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "removeStarMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "removeStar",
        "storageKey": null,
        "args": v1,
        "concreteType": "RemoveStarPayload",
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
    "name": "removeStarMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "removeStar",
        "storageKey": null,
        "args": v1,
        "concreteType": "RemoveStarPayload",
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
(node/*: any*/).hash = '2be27f643ed08512894db3187841e555';
module.exports = node;
