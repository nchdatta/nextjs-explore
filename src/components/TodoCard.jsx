import React from 'react';

const TodoCard = ({ todos }) => {

    return (
        <ul style={{ backgroundColor: "gray" }}>
            {todos?.map(todo => <li style={{ color: "white", backgroundColor: "black", marginBottom: '0.5rem' }} key={todo.id}>{todo.title}</li>)}
        </ul>
    );
};

export default TodoCard;