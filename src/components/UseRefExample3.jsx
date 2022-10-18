import { useState } from 'react'
import Todo from './Todo'

function UseRefExample3() {
    const [showTodo, setShowTodo] = useState(true);

    return (
        <div>
            <h5>UseRefExample 3</h5>
            {showTodo && <Todo />}
            <button className="btn btn-primary" onClick={() => setShowTodo(!showTodo)}>Toggle Todo</button>
        </div>
    )
}

export default UseRefExample3