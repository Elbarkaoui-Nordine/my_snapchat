import React, { useState, useEffect } from "react";
import ImageUploader from "react-images-upload";
import axios from 'axios';
import store from '../../store';
import './SendImage.css';
const SendImage = props => {
  const [picture, setPicture] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState('');
  const [secondes, setSecondes] = useState(5);
  const token = store.getState().auth['verification']['user']['token'];

  const onFileChange = (e) => {
    let files = e.target.files || e.dataTransfer.files;
    setPicture(files);
    if (!files.length) {
        console.log('no files');
    }
    console.log(files);
    console.log(files[0])
}

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
    let fileExtension =  picture[0].name.split('.').pop();
    let exts = ['jpg', 'jpeg', 'png']
    if(!exts.includes(fileExtension)){
      return alert('Your picture need to have the \'jpg\', \'jpeg\',\'png\' extension')
    }

    const bodyFormData = new FormData();
    bodyFormData.append('duration',secondes)
    bodyFormData.append('to',selectedUsers);
    bodyFormData.append('image',picture[0])
   
    const config = {
        headers: {
            'content-type': 'multipart/form-data',
            'token':token
        }
    }

    axios
    .post('http://snapi.epitech.eu/snap',bodyFormData, config)
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


  return (
    <div>
      <h2 className='mb-3'>Welcome to our Snap</h2>
 
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

  <input id="my-file-selector" type="file" name="file" onChange={onFileChange}></input>

  <div> 
    <label htmlFor="secondes">Number of secondes (1-10):</label>
    <input className='text-center ml-2' type="number" id="secondes" name="secondes"
    min="1" max="10" defaultValue='5' onChange={ e => setSecondes(e.target.value)}/>
  </div>
    <div className='row justify-content-center'>
      <button className='btn btn-primary' onClick={sendSnap}> Snap </button>
    </div>
    </div>
  );
};

export default SendImage;