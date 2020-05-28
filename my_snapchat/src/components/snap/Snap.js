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
        console.log(idSnap, durationSnap);
        var url = "http://snapi.epitech.eu/snap/" + idSnap
        console.log(url)
        axios
        .get(url, config)
        .then(response => {
            console.log(response);
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
            </Container>
        </div>
    )

}

export default Snap;