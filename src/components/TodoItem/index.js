// Write your code here
import './index.css'

const TodoItem = props => {
  const {simpleTodos, deleteTodo} = props
  const {title, id} = simpleTodos
  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-item-container">
      <div className="each-todo-cont">
        <p className="todo-title">{title}</p>
        <button type="button" className="delete-btn" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
