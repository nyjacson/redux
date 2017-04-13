// Stateのtodosプロパティの更新を担当するReducer

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {      // 新しいオブジェクトを生成してstateとして返す。Store内のstateの更新を完了する☆☆☆☆★
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        completed: !state.completed  // todoのidが同じものに対してcompletedプロパティの真偽値を反転
      }
    default:
      return state
  }
}

const todos = (state = [], action) => { // 第一引数はStoreが保持しているstateのtodosプロパティ。第二引数はDispatchされたAction
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,　// 受け取った配列(state)を配列リテラルに展開する。値がない場合は空[]で初期化する。
        todo(undefined, action) // 配列の最後に新しいtodoを追加する。(上記todo関数の戻り値を追加)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

export default todos
