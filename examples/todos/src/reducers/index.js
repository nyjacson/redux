// ActionはReducerにDispatchされる。
// 更新するStateに対応したreducerがStateの更新処理を担当する

import { combineReducers } from 'redux'
import todos from './todos' 
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  todos,　// todos:todo と同義。stateのtodosプロパティを更新する
  visibilityFilter // visibilityFilter:visibilityFilter と同義。stateのvisibilityFilterプロパティを更新する
})
// combineReduccersで生成されたオブジェクトとStoreを紐付ける処理は
// /index.jsのcreateStore(todoApp)で行っている

export default todoApp
