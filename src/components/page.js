import React from 'react'

export default ({content}) => {
  return (
    <div>
      <h1>{content.name}</h1>
      {
        content.repositories.nodes.map(repo =>
          <div>
            <h2>
              {repo.name}
            </h2>
          </div>
        )
      }
    </div>
  )
}