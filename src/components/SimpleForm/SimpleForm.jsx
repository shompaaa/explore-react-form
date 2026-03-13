import React from "react";

const SimpleForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.name.value)
        console.log(e.target.email.value)
    }

  return (
    <div>

      <h1>Explore React Form</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="" placeholder="Enter your name" /> <br />
        <input type="email" name="email" id="" placeholder="Enter your email" />
        <br />
        <input type="submit" value="Submit" />
      </form>

    </div>
  );
};

export default SimpleForm;
