import React, {useState} from 'react'

const Text = () => {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        console.log(name)
        setInputs(values =>({...values, [name]:value}))
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(inputs)
    }

  return (
    <>
    <select>
        <option value="Ford">Ford</option>
        <option value="Volvo" selected>Volvo</option>
        <option value="Fiat">Fiat</option>
    </select>

    <form onSubmit={handleSubmit}>
        <input type="text"
        name='username' 
        value={inputs.username || ""}
        onChange = {handleChange}
        />

        <label > Enter Your Age: 
        <input type="number" 
        name='age'
        value={inputs.age || ""}
        onChange={handleChange}
         />
        </label>

        <input type="submit" />

    </form>
    </>
  )
}

export default Text
