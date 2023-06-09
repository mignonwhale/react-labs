
export default function EventDeclare() {
  function handleChange(e) {
    alert('변경된 값은' + `${e.target.value}`)
  }
  return (
    <input value={'mignon'} onChange={handleChange} />
  );
}

export function InlineEvent() {
  return (
    <input value={'mignon'} onChange={function (e) {
      alert('변경된 값은' + `${e.target.value}`)
    }} />
  );
}

export function ArrowEvent() {
  return (
    <input value={'mignon'} onChange={e =>
      alert('변경된 값은' + `${e.target.value}`)
    } />
  );
}