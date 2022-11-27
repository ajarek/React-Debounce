type Props = {
  value: string
  onChange: (e: any) => void
}
const Input = ({ value, onChange }: Props) => {
  return (
    <div>
      <input
        className='input'
        type='text'
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default Input
