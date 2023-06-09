export default function Input({ value }) {
  return (
    <input defaultValue={value} />
  )
}


export function InputState({ value, setStateValue }) {
  return (
    <input value={value} onChange={e => setStateValue(e.target.value)} />
  )
}


export function InputChange({ value }) {
  function handleChange(e) {
    console.log(e.target.value);
  }

  return (
    <input value={value} onChange={handleChange} />
  )
}