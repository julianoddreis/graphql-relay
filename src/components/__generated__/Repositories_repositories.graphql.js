/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Repository_repository$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Repositories_repositories$ref: FragmentReference;
export type Repositories_repositories = {|
  +repositories: {|
    +nodes: ?$ReadOnlyArray<?{|
      +id: string,
      +$fragmentRefs: Repository_repository$ref,
    |}>
  |},
  +$refType: Repositories_repositories$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "Repositories_repositories",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "id",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "FragmentSpread",
              "name": "Repository_repository",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '867f0346601218eea61c6d7a412c924e';
module.exports = node;
