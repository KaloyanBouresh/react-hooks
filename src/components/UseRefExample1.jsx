import { useRef } from 'react';

function UseRefExample1() {

    const inputRef = useRef();
    const paraRef = useRef();

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(inputRef.current.value);
        // Set different atributes to ref values:
        inputRef.current.value = "Something";
        inputRef.current.style.color = "red";
        paraRef.current.innerText = 'Goodbye';
    };

    return (
        <>
            <h5>UseRefExample 1</h5>
            <form onSubmit={onSubmit}>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" className="form-control mb-2" ref={inputRef} />
                <button type="submit" className="btn btn-primary">Submit</button>
                <p ref={paraRef} onClick={() => inputRef.current.focus()}>Hello</p>
            </form>
        </>
    )
}

export default UseRefExample1