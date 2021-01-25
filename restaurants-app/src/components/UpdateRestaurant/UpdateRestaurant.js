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

    const token = window.localStorage.getItem('token');

    const [collection, setCollections] = useState({
            name : "",
            city : "",
            zip : "",
            culture : "",
            dish : "",
            ruleout : ""
    })

    
    
    
    // show - Update
  const showCollection = async (id) => {
    try {
      const response = await fetch(`/collections/${props.match.params.id}`, {
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
            const body = JSON.stringify({
                name, city, zip, culture, dish, ruleout
            });// turns js object to json database
            event.currentTarget.reset();
            try{
                const response = await fetch(`/collections/${props.match.params.id}`, {
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
            <h2>UPDATE INFO</h2>
            <h3>Need to make a change or add a new dish! Update it here!</h3>
            <br />
            <form className="collectionsForm" onSubmit={updateCollection}>
            <label> Name: <input type="text" ref={nameInput} defaultValue={collection.name}/>{props.name} </label>  
            <label> City: <input type="text" ref={cityInput} defaultValue={collection.city}/> {props.city}</label>   
            <label> Zip: <input type="text" ref={zipInput} defaultValue={collection.zip}/>{props.zip} </label> <br />
            <label> Culture: <input type="text" ref={cultureInput} defaultValue={collection.culture}/>{props.culture} </label>  
            <label> Dish: <input type="text" ref={dishInput} defaultValue={collection.dish}/>{props.dish} </label>  
            <label> Ruleout: <input type="text" ref={ruleoutInput} defaultValue={collection.ruleout}/>{props.ruleout} </label> 
                <input type="submit" value="Update Restaurant Info" />  
               </form><br /> 
               <a href="https://goo.gl/maps/yRntqZbWT4z6xFxWA" target="_blank" rel="noreferrer"><input type="submit" value="Let's go eat!" /></a>  
            
            
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
    )
}

export default UpdateRestaurant;