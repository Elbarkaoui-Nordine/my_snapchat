import React, { useState, useEffect } from "react";
import ImageUploader from "react-images-upload";
import axios from 'axios';
import store from '../../store';
import './SendImage.css';
const App = props => {
  const [picture, setPicture] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState('');
  const [secondes, setSecondes] = useState(5);
  const token = store.getState().auth['verification']['user']['token'];
  const onDrop = image => {

    image = image[image.length-1];
    setPicture(image)
   
  };
  useEffect(() => {
    getUsers();
  }, [picture])
  const getUsers = () => {
    if(picture.length !== 0)
    {
      
      let config = {
        headers: {
          "token": token
        }
      }
      axios
      .get('http://snapi.epitech.eu/all', config)
      .then(response => {
        setUsers(response.data.data)
      })
      .catch((error) => {
        console.log(error);
      })
    }
  }
  const sendSnap = () => {
    if(picture.length === 0) return alert('You need to pick a photo');
    if(selectedUsers === '') return alert('You need to select a user to send your snap');
    if(secondes > 10 || secondes < 0 || secondes === '' ) return alert ('A snap need to be between 1-10s !')

    let config = {
      headers: {
        "token": token
      }
    }

    const body = new FormData();
    body.append('image', picture);

    axios
    .post('http://snapi.epitech.eu/snap', {
      duration: secondes,
      to: selectedUsers,
      image: body.get('image')
    }, config)
    .then(response => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error.response);
    })

  }
  const handleOptionChange = (changeEvent) => {
    setSelectedUsers(changeEvent.target.value);
  }
  //onClick={}
  return (
    <div>
      <h2 className='mb-3'>Welcome to our Snap</h2>
    <ImageUploader
      {...props}
      withIcon={true}
      onChange={onDrop}
      imgExtension={[".jpg", ".gif", ".png", ".gif"]}
      maxFileSize={5242880}
    />
  <div style={{height: '300px', overflow: 'scroll'}}>
    {users.length === 0 ? <h3 className='mt-5'> Choose a picture to snap </h3> : users.map((user, i) => 
    <div key={i + user.email}> 
      <label htmlFor={user.email + i}> {user.email} </label>
      <input type='radio' id={user.email + i}  
      checked={selectedUsers === user.email} 
      onChange={handleOptionChange} 
      name='user'
      value={user.email}/>
      </div> 
    )}
  </div>
  <div> 
    <label for="secondes">Number of secondes (1-10):</label>
    <input className='text-center ml-2' type="number" id="secondes" name="secondes"
    min="1" max="10" defaultValue='5' onChange={ e => setSecondes(e.target.value)}/>
  </div>
    <div className='row justify-content-center'>
      <button className='btn btn-primary' onClick={sendSnap}> Snap </button>
    </div>
    </div>
  );
};

export default App;