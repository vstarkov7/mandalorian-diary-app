import React from 'react'

export default function TopicsIndex(props) {
  return (
    <div>
      <h3>List of topics</h3>
      {props.topics.map((topic) => (
        <p>{topic.name}</p>
      ))}

    </div>
  )
}