import React from 'react'
import { useRef, useEffect, useState } from 'react'

export default () => {


    const nameInput = useRef(null);
    const passwordInput = useRef(null);
    const regNameInput = useRef(null);
    const regPasswordInput = useRef(null);

    const [token, setToken] = useState('');


    // register
  const register = async (event) => {
    event.preventDefault()
    const body = JSON.stringify({
      username: regNameInput.current.value,
      password: regPasswordInput.current.value
    });
    event.currentTarget.reset();
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body
      })
      const data = await response.json();
    } catch (error) {
      console.error(error)
    }
  }
  // login
  const login = async (event) => {
    event.preventDefault()
    const body = JSON.stringify({
      username: nameInput.current.value,
      password: passwordInput.current.value
    });
    event.currentTarget.reset();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body
      })
      const data = await response.json();
      window.localStorage.setItem('token', `Bearer ${data.token}`);
      setToken(`Bearer ${data.token}`)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() =>{
    if(window.localStorage.getItem('token')){
    setToken(window.localStorage.getItem('token'))
    }
    }, [])
  

    return (
        <div className="container">
            <div className="form-group" >
            <h1> Register Form</h1>
            <form onSubmit={register}>
            <label> Username: <input className="form-control" type="text" ref={regNameInput}></input></label><br/>
            <label> Password: <input className="form-control" type="password" ref={regPasswordInput}></input></label><br />
            <button className="btn btn-lg"><input className="form-control" type="submit"></input></button>
            </form>
            </div>
            <hr/>
            <div >
            <h1>Login Form</h1>
            <form onSubmit={login}>
            <label> Username: <input className="form-control" type="text" ref={nameInput}></input></label><br />
            <label> Password: <input className="form-control" type="password" ref={passwordInput}></input></label><br />
            <button className="btn btn-lg btn-outline-*"><input className="form-control" type="submit"></input></button>
            </form>
            </div>









            
        </div>
    )
}