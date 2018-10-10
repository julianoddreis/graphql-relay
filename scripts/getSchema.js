const fs = require('fs')
const path = require('path')
const { printSchema } = require('graphql/utilities')

const { introspectSchema, makeRemoteExecutableSchema } = require('graphql-tools')
const { setContext } = require('apollo-link-context')
const { HttpLink } =  require('apollo-link-http')
const fetch = require('node-fetch')
require('babel-polyfill')
const http = new HttpLink({ uri: 'https://api.github.com/graphql', fetch });

const link = setContext((request, previousContext) => ({
  headers: {
    'Authorization': `Bearer ${token}`,
  }
})).concat(http);


async function init () {
  const schema = await introspectSchema(link);

  const executableSchema = makeRemoteExecutableSchema({
    schema,
    link,
  });

  fs.writeFileSync(
    path.join(__dirname, '../../schema.graphql'),
    printSchema(schema)
  );
  
  
  console.log(executableSchema)

  return executableSchema
}

init()