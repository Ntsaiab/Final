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
        <div className="searchForm">
            <h3>We would love to hear from you! <br/> Have a thought, comment or idea? <br />Please share it with us, we will try to respond!</h3> <br />
            <form className="commentForm" onSubmit={createComment}>
            <label> Name: <input type="text" ref={nameInput} /></label>  <br />
            <label> Email: <input type="text" ref={emailInput} /></label>  <br /> 
            <label> Ideas: <input type="text" ref={ideasInput} /></label> <br />
                <input type="submit" value="Create Comment" />  
            </form><br />

            
        </div>
    )
}
