import React, { useRef } from 'react';

const UnControlledField = () => {

    const emailRef = useRef('')
    const passwordRef = useRef('')
   
    const handleSubmit = e =>{
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" ref={emailRef} placeholder='Email here'/>
                <br />
                <input type="password" ref={passwordRef} name="password" id="" placeholder='password here' />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UnControlledField;