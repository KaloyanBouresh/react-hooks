import { useEffect, useState, useRef, useMemo } from 'react'

function UseMemoExample() {
    const [number, setNumber] = useState(1);
    const [increment, setIncrement] = useState(0);

    const renders = useRef(1);

    //const sqrt = getSqrt(number);
    const sqrt = useMemo(() => getSqrt(number), [number]);

    useEffect(() => {
        renders.current = renders.current + 1;
    });

    const onClick = () => {
        setIncrement((prevState) => {
            console.log(prevState + 1);
            return prevState + 1;
        })
    };

    return (
        <div className='container mt-5'>
            <input type="number" className="form-control w-25" value={number}
                onChange={(e) => setNumber(e.target.value)} />
            <h2 className='my-3'>
                The square root of {number} is {sqrt}
            </h2>
            <button className="btn btn-primary" onClick={onClick}>
                Rerender
            </button>
            <h3>Renders: {renders.current}</h3>
        </div>
    )
}

function getSqrt(n) {
    // for (let i = 0; i <= 10000; i++) {
    //     console.log(i)
    // }
    console.log('Expensive function called')
    return Math.sqrt(n);
}

export default UseMemoExample