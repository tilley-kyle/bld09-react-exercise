import React from 'react';

import './CreateTodo.css';
                    //Destructuring
const CreateTodo = ({ handleSubmit, handleChange, text }) => (
    <form className="add-todo" onSubmit={handleSubmit}>
        <input
            type="text"
            name="todo"
            autoComplete="off"
            value={text}
            onChange={handleChange}
            placeholder="I need to do..."
            required
        />
        <button>Add Todo</button>
    </form>
);

export default CreateTodo;
