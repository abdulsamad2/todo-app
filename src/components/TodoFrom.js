import React, { useState } from "react";

function TodoFrom(props) {
  const [formData, setFormData] = useState({
    task: "",
    completed: false,
  });

  const handleChange = (event) => {
    setFormData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  };
  const [list, setList] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setList((prevData) => [...prevData, formData]);
    props.onsaveSubmitData(formData);
    setFormData((prevData) => {
      return {
        task: "",
      };
    });
  };

  return (
    <>
      <form
        className="container mx-auto max-w-lg mt-8"
        onSubmit={submitHandler}
      >
        <fieldset>
          <label>
            <p className="">Task Name</p>
            <input
              type="text"
              name="task"
              className="py-1 px-2 border-2 rounded-md w-full"
              onChange={handleChange}
              value={formData.task}
            />
          </label>
        </fieldset>
        <button className="bg-green-400 py-1 px-4 my-2">Add Todo Task</button>
      </form>
    </>
  );
}

export default TodoFrom;
