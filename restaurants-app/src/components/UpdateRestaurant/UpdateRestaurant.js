import React from 'react'
import { useRef, useEffect, useState } from 'react'
import Reglogin from '../Login/Reglogin'


const UpdateRestaurant = (props) => {
    const nameInput = useRef(null);
    const cityInput = useRef(null);
    const zipInput = useRef(null);
    const cultureInput = useRef(null);
    const dishInput = useRef(null);
    const ruleoutInput = useRef(null);
    const imgInput = useRef(null);

    const token = window.localStorage.getItem('token');

    const [collection, setCollections] = useState({
            name : "",
            city : "",
            zip : "",
            culture : "",
            dish : "",
            ruleout : "",
            img: ""
    })

    
    
    
    // show - Update
  const showCollection = async (id) => {
    try {
      const response = await fetch(`/api/collections/${props.match.params.id}`, {
          method: 'GET',
          headers: {
              'Content-type': 'application/json',
          }
      })
      const collection = await response.json();
      
      setCollections(collection);
     

    } catch (error) {
      console.error(error)
    }
  }

    // UPDATE
    const updateCollection = async (event) => {

            event.preventDefault()
            const name = nameInput.current.value
            const city = cityInput.current.value;
            const zip = zipInput.current.value;
            const culture = cultureInput.current.value
            const dish = dishInput.current.value;
            const ruleout = ruleoutInput.current.value;
            const img = imgInput.current.value;
            const body = JSON.stringify({
                name, city, zip, culture, dish, ruleout, img
            });// turns js object to json database
            event.currentTarget.reset();
            try{
                const response = await fetch(`/api/collections/${props.match.params.id}`, {
                    method : 'PUT',
                    headers : {
                        'Content-type': 'application/json',
                        'Authorization': token
                    },
                    body: body
                })
            const data = await response.json();
            console.log(data._id)
            // const filteredCollections = props.collections.filter(collection => collection._id !== data._id)
            // console.log(props.collections)
            // props.collections([...filteredCollections, data])
        } catch (error) {
            console.error(error)
        }
    }


// useEffect

useEffect(() => {
    showCollection()
}, [collection])




    return (
        <div className="searchForm">
            <div className="">
                <div className="" >
                        <h2>UPDATE INFO</h2>
                        <h3>Need to make a change or add a new dish! Update it here!</h3>
                        <br />
                        <form className="collectionsForm" onSubmit={updateCollection}>
                        <label> Name: <input className="form-control" type="text" ref={nameInput} defaultValue={collection.name}/>{props.name} </label>  
                        <label> City: <input className="form-control" type="text" ref={cityInput} defaultValue={collection.city}/> {props.city}</label>   
                        <label> Zip: <input className="form-control" type="text" ref={zipInput} defaultValue={collection.zip}/>{props.zip} </label> <br />
                        <label> Culture: <input className="form-control" type="text" ref={cultureInput} defaultValue={collection.culture}/>{props.culture} </label>  
                        <label> Dish: <input className="form-control" type="text" ref={dishInput} defaultValue={collection.dish}/>{props.dish} </label>  
                        <label> Ruleout: <input className="form-control" type="text" ref={ruleoutInput} defaultValue={collection.ruleout}/>{props.ruleout} </label> 
                        <label> Img: <input className="form-control" type="text" ref={imgInput} defaultValue={collection.img}/>{props.img} </label>
                        <button className="btn btn-lg"><input type="submit" value="Update Restaurant Info" /></button> 
                        </form><br /> 
                        <a href="https://goo.gl/maps/yRntqZbWT4z6xFxWA" target="_blank" rel="noreferrer"><button className="btn btn-lg"><input type="submit" value="Let's go eat!" /></button></a>  
                
                
                            {/* {
                                collection.map(collection => {
                                return (
                                    <>
                                    <li key={collection._id}>
                                    {collection.name}
                                    </li>
                                    </>
                                )
                                })
                            } */}
                </div>
            </div>
        </div>
    
    )
}

export default UpdateRestaurant;