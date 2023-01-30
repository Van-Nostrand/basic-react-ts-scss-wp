import React, { ChangeEvent, FormEvent, useState } from 'react'
import Navbar from '@/components/Navbar'

export default function App () {

  const [name, setName] = useState<string>('')

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

