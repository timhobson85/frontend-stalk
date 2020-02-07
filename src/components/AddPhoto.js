import React from 'react'
import axios from 'axios'
import Upload from './Upload'

let plantID = ''
const userID = localStorage.getItem('userId')

class AddPhoto extends React.Component {

  state = {
    plant: [],
    imageURL: ''
  }

  handleChange = (event) => {
    this.setState({ [event.target.name] : event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      photo: {
        image: this.state.image,
        description: this.state.description,
        plant_id: plantID
      }
    })
    console.log(this.state.photo);
    const photoParams = this.state.photo
    console.log('photoParams:', photoParams);
    axios.post(`http://localhost:3000/photos.json`, {
      photo: {
        image: this.state.image,
        description: this.state.description,
        plant_id: plantID
      }
    })
    .then(console.log)
    .then(this.props.history.push(`/mygarden/${userID}`))
    .catch(console.log)
  }

  componentDidMount(){
    plantID = this.props.match.params.plant_id
    console.log(`plantID: ${plantID}`);
    axios.get(`http://localhost:3000/plants/${plantID}.json`)
    .then(res => {
      console.log(res);
      this.setState({plant: res.data})
    })
    .catch(console.warn)
    this.setState({plant_id : plantID })
  }

  handleImageUploaded = (imageURL) => {
    console.log('in AddPhoto', imageURL);
    this.setState({imageURL: imageURL});
  }

  render(){
    return(
      <div className='App'>
        <h2>Add Photo of {this.state.plant.name}</h2>

        <form action="" onSubmit={this.handleSubmit}>
          <label>Description</label>
          <input type="text" name="description" onChange={this.handleChange}/> <br/>
          <label>ImageURL</label>
          <input type="text" name="imageURL" value={ this.state.imageURL } onChange={this.handleChange}/> <br/>


          <Upload onImageUpload={ this.handleImageUploaded }/>


          <button className="formButton">add update</button>

        </form>
      </div>
    )
  }

} // Class

export default AddPhoto
