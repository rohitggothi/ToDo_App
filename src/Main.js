import React, { useState, useEffect } from 'react';
import './css/index.scss';

const Main = () => {
    const [tasks, setTasks] = useState([]);

    // Load tasks from local storage when the component mounts
    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (storedTasks) {
            setTasks(storedTasks);
        }
    }, []);

    // Save tasks to local storage whenever tasks change
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTodo = () => {
        const textArea = document.getElementById('inp');
        const value = textArea.value.trim();

        if (value !== '') {
            const newTask = { text: value, checked: false };
            setTasks([...tasks, newTask]);
            textArea.value = '';
        }
    };

    const toggleChecked = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].checked = !updatedTasks[index].checked;
        setTasks(updatedTasks);
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div className="container">
            <div className="main">
                <h1>ToDo-App</h1>
                <input type="text" id="inp" />
                <button type="button" id="btn" onClick={addTodo}>
                    Add
                </button>
                <ul id="list">
                    {tasks.map((task, index) => (
                        <li
                            key={index}
                            className={task.checked ? 'checked' : ''}
                            onClick={() => toggleChecked(index)}
                        >
                            {task.text}
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation(); // Prevent the click from propagating to the li element
                                    deleteTask(index);
                                }}
                            >
                                X
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Main;
