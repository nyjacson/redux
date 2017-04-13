import React, { PropTypes } from 'react'

  // Todoはliタグで描画する
const Todo = ({ onClick, completed, text }) => (
  // onClick = props.onClick
  // completed = props.completed
  // text = props.text
  // 
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
