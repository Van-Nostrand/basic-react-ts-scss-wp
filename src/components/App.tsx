import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";

interface Props {

}

const App: React.FC<Props> = ({}) => {

  let [ name, setName ] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name);
  }

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="textinput" placeholder="type here" value={name} onChange={onNameChange} />
        <button>submit</button>
      </form>

      <a href="#">A random anchor tag</a>
    </div>
  );
}

export default App;