// Actionを作成するためのAction Creatorが定義されている

let nextTodoId = 0
export const addTodo = (text) => ({ // textにはformのinput.valueが入る
  type: 'ADD_TODO',
  id: nextTodoId++,
  text // ES2015のShorthand property namesを使用している. text:textと同義
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})
