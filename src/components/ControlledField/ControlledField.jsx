import React, { useState } from 'react';

const ControlledField = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
  
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(e.target.email.value)
        console.log(e.target.password.value)

        console.log(name,email, password)

        //Give the error message after hit the submit button


    //     if(password.length < 6){
    //         setError('Password must be 6 characters or more')
    //     }
    //     else{
    //         setError('')
    //     }
    
}

      const handlePasswordOnChange = e =>{
        setPassword(e.target.value);

        // Give the error message every time you enter a password digit


        if(password.length < 6){
            setError('Password must be 6 characters or more')
        }
        else{
            setError('');
        }
    }

    const handleEmailOnChange = e =>{
        setEmail(e.target.value)
    }

    const handleNameOnChange = e =>{
        setName(e.target.value)
    }


    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" onChange={handleNameOnChange} defaultValue={name} name="name" id="" placeholder='name here'/><br />
                <input type="email" onChange={handleEmailOnChange} defaultValue={email} name="email" id="" placeholder='email' required /><br />
                <input type="password" name="password" onChange={handlePasswordOnChange} defaultValue={password} id="" placeholder='password' required /><br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{color: 'red'}}><small>{error}</small></p>
        </div>
    );
};

export default ControlledField;