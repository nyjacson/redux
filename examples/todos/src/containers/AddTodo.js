import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
// let AddTodo = (dispatch = props.dispatch ) => { 上記と同じ。propsからdispatchを取得している
// Destructuring assignment構文が使用されている
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault() //デフォルトのブラウザの挙動を停止
        if (!input.value.trim()) { //テキストボックスが空なら終了
          return
        }
        dispatch(addTodo(input.value)) // dispatchメソッドが使える。これによりAction Createor(addTodo)でActionを作成し、
                                       // StoreにDispatchする
        input.value = ''  //テキストボックスを空にしている
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">  {/*Actionが dispatchされたあとは、reducerに処理が移る*/}
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo) 
//connectでコンポーネントを拡張している。これによりコンポーネントのpropsにstoreのdispatchメソッドが渡される

export default AddTodo
