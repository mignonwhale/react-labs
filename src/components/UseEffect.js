import { useEffect } from 'react';

const todos = [
  { content: 'test1', seq: '1' },
  { content: 'test2', seq: '2' },
  { content: 'test3', seq: '3' }
]


export default function Parent() {

  const todolist = todos.map(todo => <Child todo={todo} key={todo.seq} />)
  return (
    <ul>
      {todolist}
    </ul>
  )
}


function Child({ todo }) {

  return (
    <li>
      <input value={todo?.content} onChange={e => e.target.value} />
    </li>
  )
}

