import React, { PropTypes } from 'react'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick }) => (
  // VisibleTodoList.jsの mapStateToProps, mapDispatchToPropsで定義された
  // todos, onTodoClickをpropsとして受け取る。
  // 
  // todos = props.todos　←　state.todosをstate.visibilityFilterでフィルタリングされた値
  // onTodoClick = props.onTodoClick
  // 
  <ul>
    {todos.map(todo => // todos(配列)のmapメソッドで配列内の各要素にアクセスし、各要素をオブジェクトtodo(引数)として
                       // Todoコンポーネントに渡している、そして描画している
      <Todo
        key={todo.id}
        {...todo}  // todoオブジェクトの各プロパティを、属性=値の組み合わせでコンポーネントに渡しています。
        onClick={() => onTodoClick(todo.id)} // onTodoClickでにはAction toggleTodoが定義されている
      />
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList
