import React,{useState, useEffect} from 'react';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import store from '../../store';

const Snap = () => {

    const [getSnaps, setGetSnap] = useState([]);
    const token = store.getState().auth['verification']['user']['token'];

    let firstEntry = true
    let config = {
        headers: {
          "token": token
        }
    }
    useEffect(() => {
        axios
        .get('http://snapi.epitech.eu/snaps', config)
        .then(response => {
          if(response.data.data !== getSnaps)
              setGetSnap(response.data.data);
      })
        .catch((error) => {
          console.log(error)
      })
        
    }, [firstEntry])
      
    const openSnap = (idSnap, durationSnap) => {
        var url = "http://snapi.epitech.eu/snap/" + idSnap
        axios
        .get(url, config)
        .then(response => {
          fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/octet-stream',
                'token': token
            },
               })
        .then((response) => response.blob())
        .then((blob) => {
  
          const url = window.URL.createObjectURL(new Blob([blob]));
          const link = document.createElement('img');
          link.src = url;
          document.body.appendChild(link);
        })
      })
        .catch((error) => {
          console.log(error.response);
      })
    }
    return(

        <div>
            <Container>
            <p> All snap</p>
            {getSnaps.map((snap, i) => <div onClick={() => openSnap(snap.snap_id, snap.duration)} key={snap.snap_id+snap.from+i}> {snap.from}</div>)}
            <img src='' id='img' />
            <div id='box'></div>
            </Container>
        </div>
    )

}

export default Snap;