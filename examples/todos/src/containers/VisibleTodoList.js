import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = {
  onTodoClick: toggleTodo // Actionをdispatchするコールバック関数を定義。以下と同義
    //   const mapDispatchToProps = (dispatch) => {  
    //   return {
    //     onTodoClick: (id) => {
    //       dispatch(toggleTodo(id))
    //     }
    //   }
    // }  ===> combinedReducersにDispatchされる。todos.jaのTOGGLE_TODOへ
}

const VisibleTodoList = connect(  // TodoListを、connectで拡張してVisibleTodoListコンポーネントとして返す
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
