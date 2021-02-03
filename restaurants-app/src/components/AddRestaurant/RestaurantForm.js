// import { urlencoded } from 'express';
import { useState, useEffect, useRef } from 'react';// need to fix update route and button, create a separate form



export default (props) => {
    const nameInput = useRef(null);
    const cityInput = useRef(null);
    const zipInput = useRef(null);
    const cultureInput = useRef(null);
    const dishInput = useRef(null);
    const ruleoutInput = useRef(null);
    const imgInput = useRef(null);
    const token = window.localStorage.getItem('token');
    
    const [collections, setCollections] = useState([])

    // const url = 'https://images.squarespace-cdn.com/content/v1/5a1c363cf14aa168f5288db9/1511978780299-0VK2O99F63LX6IIZXETT/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USOFn4xF8vTWDNAUBm5ducQhX-V3oVjSmr829Rco4W2Uo49ZdOtO_QXox0_W7i2zEA/001.jpg?format=2500w';
    

   // CREATE
    const createCollection = async (event) => {
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
            const response = await fetch('/collections', {
                method : 'POST',
                headers : {
                    'Content-type': 'application/json'
                },
                body: body
            })
            const data = await response.json();
            console.log(collections)
            setCollections([...collections, 
            data])
            
            console.log(event.target)
        } catch (error) {
            console.error(error)
        }
    }
    
    // READ
  const fetchCollections = async () => {
    try {
      const response = await fetch('/collections')
      const data = await response.json();
      setCollections(data)
    } catch (error) {
      console.error(error)
    }
  }


    // DELETE
    const deleteCollection = async (id) => {
        try{
            const response = await fetch(`/collections/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': token
                }
            })
            const data = await response.json();
            const filteredCollections = collections.filter(collection => collection._id !== data._id)
            setCollections(filteredCollections);
        } catch (error) {
            console.error(error)
        }
    }

    
    
    useEffect(() =>{
    fetchCollections();
    }, [])

    return (
        <div className="container">
            <h3 className="Lead">Was it good! Add your fav Restaurant location and dish on this page!</h3>
            <hr className="searchForm"/>
            <form  className="form-group"onSubmit={createCollection}>
            <label> Name: <input className="form-control" type="text" ref={nameInput} /> </label>  
            <label> City: <input className="form-control" type="text" ref={cityInput} /> </label>   
            <label> Zip: <input className="form-control" type="text" ref={zipInput} /> </label> <br />
            <label> Culture: <input className="form-control" type="text" ref={cultureInput} /> </label>  
            <label> Dish: <input className="form-control" type="text" ref={dishInput} /> </label>  
            <label> Ruleout: <input className="form-control" type="text" ref={ruleoutInput} /> </label><br/>
            <label> Img: <input className="form-control" type="text" ref={imgInput} /> </label><br/>
                <button className="btn btn-lg"><input className="form-control" type="submit" value="Add A Restaurant"></input></button>
                
            </form><br />

                <hr/>

            <div className="addedresults" >
            {
                collections.map(collection => {
                return (
                    <div>
                        <ul  /*style={{backgroundImage: url}}*/ >
                            <li className="btn btn-lg" key={collection._id}>
                            {collection.name} <br /> {collection.city} <br /> {collection.img}
                            <button className="form-control" onClick={
                                (event) => {
                                    deleteCollection(collection._id)
                                }
                            }>Delete {collection.name}</button>
                            </li>
                        </ul>
                    </div>
                )
                })
            }
            </div>
            <hr/>
        </div>
    )

}