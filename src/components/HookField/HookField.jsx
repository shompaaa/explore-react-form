import React from 'react';
import useInputField from '../../hooks/useInputField';

const HookField = () => {

    const [name, nameOnChange] = useInputField('');
    const [email, emailOnChange] = useInputField('')
    const [password, passwordOnChange] = useInputField('')

    const handleSubmit = e => {
        e.preventDefault()
        console.log(name,email,password)

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={nameOnChange} defaultValue={name} name="name" id="" /><br />
                <input type="email" name="email" onChange={emailOnChange} defaultValue={email} id="" /><br />
                <input type="password" onChange={passwordOnChange} defaultValue={password} name="password" id="" /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookField;