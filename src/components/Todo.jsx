import { useState, useEffect, useRef } from 'react'

function Todo() {
    const isMounted = useRef(true);

    const [loading, setLoading] = useState(true);
    const [todo, setTodo] = useState({});

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then((response) => response.json())
            .then((data) => {
                setTimeout(() => {
                    if (isMounted.current) {
                        setTodo(data);
                        setLoading(false);
                    }
                }, 3000);
            })

        //Runs when component is unmounted:
        return () => {
            isMounted.current = false;
        }
    }, [isMounted]);

    return (
        loading ? <h3>Loading...</h3> : <h1>{todo.title}</h1>
    )
}

export default Todo