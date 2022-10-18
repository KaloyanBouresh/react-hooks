import { useRef, useEffect, useState } from 'react'

function UseRefExample2() {
    const [name, setName] = useState('');

    const renders = useRef(1);
    const prevName = useRef('');

    useEffect(() => {
        renders.current = renders.current + 1;
        prevName.current = name;
    }, [name])

    return (
        <div>
            <h5>UseRefExample 2</h5>
            <h1>
                Renders: {renders.current}
            </h1>
            <h6>PrevName state : {prevName.current}</h6>
            <input type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className=" form-control mb-3"
            />
        </div>
    )
}

export default UseRefExample2