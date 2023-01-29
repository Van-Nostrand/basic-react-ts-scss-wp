import React, {
  ChangeEvent,
  FormEvent,
  useState,
  useEffect
} from 'react'
import Navbar from '@/components/Navbar'
import Card from '@/components/Card'

const App: React.FC = () => {

  const [ name, setName ] = useState<string>('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(name)
  }

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  useEffect(() => {
    console.log('App.tsx just updated')
  })


  return (
    <div className="app-div">
      <Navbar />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="textinput"
          placeholder="type here"
          value={name}
          onChange={onNameChange}
        />
        <button>submit</button>
      </form>

      <a href="#">A random anchor tag</a>
      <Card />
    </div>
  )
}

export default App
