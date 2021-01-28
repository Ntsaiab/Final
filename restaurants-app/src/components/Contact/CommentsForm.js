import { useRef } from 'react';

export default (props) => {
    const nameInput = useRef(null);
    const emailInput = useRef(null);
    const ideasInput = useRef(null);

    const createComment = async (event) => {
        event.preventDefault()
        const name = nameInput.current.value
        const email = emailInput.current.value;
        const ideas = ideasInput.current.value;
        const body = JSON.stringify({
            name, email, ideas
        });// turns js object to json database
        event.currentTarget.reset();
        try{
            const response = await fetch('http://localhost:3000/comments', {
                method : 'POST',
                headers : {
                    'Content-type': 'application/json'
                },
                body: body
            })
            // const data = await response.json();
            // props.updateComment([...props.comments,
            // data])
            
            console.log(event.target)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="container text-center">
            <h3>We would love to hear from you! <br/> Have a thought, comment or idea? <br />Please share it with us, we will try to respond!</h3> <br />
            <hr />
            <form className="form-group" onSubmit={createComment}>
            <label> Name: <input className="form-control" type="text" ref={nameInput} /></label>  <br />
            <label> Email: <input className="form-control" type="text" ref={emailInput} /></label>  <br /> 
            <label> Ideas: <textarea className="form-control" type="text" ref={ideasInput} /></label> <br />
                <button className="btn btn-lg"><input className="form-control" type="submit" value="Create Comment"></input></button>
            </form><br /> 
            <hr/>
        </div>
    )
}
