import React from 'react'
import './BurgerTest.css'
import {Link, useHistory} from 'react-router-dom'
import axios from 'axios'

function BurgerTest(props){
  // const [editRoute, setEditRoute] = useState('')
  let history = useHistory()

  const handleDeleteClick = ( id ) => {
    console.log(id)
    // console.log(`http://localhost.com:3000/plants/${id}.json`)
    axios.delete(`http://localhost:3000/plants/${id}.json`)
    .then(res => {
      console.log(res);
    })
    .catch(console.warn)
    // const route = `/editplant/${ id }`
    // console.log('route:', route);
    // this.props.history.push( route )
  }

    const handleEditClick = ( id ) => {
        console.log(id);
        const route = `/editplant/${ id }`
        console.log('route:', route);
        history.push( route )
    }


// <Link to=`/editplant/${ props.plantId }`><li>Edit</li></Link>




  return(
    <div>
        <div id="menuToggle">

          <input type="checkbox" />


          <span></span>
          <span></span>
          <span></span>


          <ul id="menu">
            <li key={props.plantId} onClick={() => handleEditClick(props.plantId)}>Edit</li>

            <li key={props.plantId} onClick={() => handleDeleteClick(props.plantId)}>Delete</li>

            <li key={props.plantId}>Water</li>
          </ul>
        </div>



    </div>


  )


}

export default BurgerTest
