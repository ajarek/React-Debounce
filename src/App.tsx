import { useEffect, useState } from 'react'
import Input from './components/Input'
import useDebounce from './hooks/useDebounce'

function App() {
  const [value, setValue] = useState('React')
  const [newData, SetNewData] = useState([])
  const debouncedValue = useDebounce(value, 700)
  useEffect(() => {
    fetch(`https://hn.algolia.com/api/v1/search?query=${debouncedValue}&page=0`)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          const { hits } = data
          SetNewData(hits)
        }
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }, [debouncedValue])

  return (
    <div className='App'>
      <h1>React Debounce</h1>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <ol className='wrapper'>
        {newData.map((hit: any, index: number) => {
          return <li key={index}>{hit.title}</li>
        })}
      </ol>
    </div>
  )
}

export default App
