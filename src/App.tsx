import React, {
  ChangeEvent,
  FormEvent,
  useState
} from 'react'

import Navbar from '@/components/Navbar'

// interface Props {}

// const App: React.FC<Props> = ({}) => {
const App: React.FC = () => {

  const [ name, setName ] = useState<string>('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(name)
  }

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }


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
    </div>
  )
}

export default App
