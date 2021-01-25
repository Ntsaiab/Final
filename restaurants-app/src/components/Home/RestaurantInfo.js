import { useState, useEffect } from 'react'; // Need to add code for location button for search results and link to goole maps if have time
import { Link } from 'react-router-dom';
// import Modal from '../Modal/Modal';


const PullBackend = (props) => {
    const [collections, setCollections] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    
    
    const fetchCollections = async () => {
        try {
            const response = await fetch('/collections');
            const data = await response.json();
            if (data) { // null checker
                console.log(data);
            setCollections(data)
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchCollections()
    }, [])


    // MyModel.find({ name: new RegExp('john', 'i') }, null).exec();
const handleFilter = (e) => {
    const found = collections.filter(elements => {
        if (elements.ruleout.toLowerCase().includes(e)) {
            return elements;
        }
    });
    if (e.length > 0) {
        setFilteredItems(found);
    } else {
        setFilteredItems([]);
    }
    
}

    return (
        
        <div className="searchForm">
        {/* <Modal /> */}
            <form>
                <label> RULEOUT: <input onChange= {(e) => handleFilter(e.target.value)} type="text" options=""></input></label>
                {/* <input  type='submit'></input> */}
            </form>
            <div className="deck">
            {
                filteredItems.length > 1 ? 
                filteredItems.map(collection => {
                    return (
                        <div id="rinfoForm">
                    <Link to={`/UpdateRestaurant/${collection._id}`}><div  key={collections._id}>
                    <h3>Name: {collection.name}<br /> City: {collection.city} <br /> Zip: {collection.zip} <br />
                    Cuisine: {collection.culture} <br /> Dish: {collection.dish} <br /> Ruleout: {collection.ruleout}</h3>
                    </div>
                    </Link>
                    
                    </div>
                    )
                }) : 
                (<div> Search for what you need to ruleout of your meal! <br />Can't remember the Restaurant? Food restrictions? No worries! <br />
                Click on a Restaurant to update information or for directions.</div>)
            }
            </div>
        </div>
    )
}

export default PullBackend;