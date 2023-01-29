import React, {
  ChangeEvent,
  FormEvent,
  useState,
  forwardRef,
  ReactNode
} from 'react'
import Navbar from '@/components/Navbar'
import usePreviousProps from '@/hooks/usePreviousProps'
// import logProps from '@/components/LogProps'
export default function App () {

  const [name, setName] = useState<string>('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(name)
  }

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  interface Props {
    children?: ReactNode
    type: 'submit' | 'button'
  }

  type Ref = HTMLButtonElement

  const Button = forwardRef<Ref, Props>((props, ref) => (
    <button ref={ref} className="special-button" type={props.type}>
      { props.children }
    </button>
  ))

  // const PropLogger = (props: any) => (
  //   <div className="prop-logger">
  //     <h2>prop logger</h2>
  //     <div>{props.count}</div>
  //   </div>
  // )

  return (
    <div className="app-div">
      <Navbar />
      <Button type="button">
        A BUTTON
      </Button>

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
