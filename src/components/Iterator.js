const todos = [
  { content: 'test1', seq: '1' },
  { content: 'test2', seq: '2' },
  { content: 'test3', seq: '3' }
]

export default function Iterator({ flag }) {

  if (flag === 'map') {
    const todolist = todos.map(todo => <Todo content={todo.content} key={todo.seq} />) // map에서 key는 필수
    return (
      <ul>
        {todolist}
      </ul>
    )
  } else {
    const todolist = todos.filter(e => e.seq === '1').map(todo => <Todo content={todo.content} key={todo.seq} />)
    return (
      <ul>
        {todolist}
      </ul>
    )
  }

}

function Todo({ content }) {
  return (
    <li >
      <div>{content}</div>
    </li>
  )
}
