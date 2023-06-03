import React from 'react';

const TodoCard = ({ todos }) => {
    console.log(todos)
    return (
        <ul style={{ backgroundColor: "gray" }}>
            {todos?.map(todo => <li key={todo.id}>{todo.title}</li>)}
        </ul>
    );
};

export default TodoCard;