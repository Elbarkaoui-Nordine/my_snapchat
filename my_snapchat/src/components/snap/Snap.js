import React,{useState, useEffect} from 'react';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button, Container ,ListGroup,ListGroupItem} from 'react-bootstrap';
import axios from 'axios';
import store from '../../store';
import './Snap.css';
const Snap = () => {

    const [getSnaps, setGetSnaps] = useState([]);
    const [seconds, setSeconds] = useState(0);
    const token = store.getState().auth['verification']['user']['token'];

    let firstEntry = true
    let config = {
        headers: {
          "token": token
        }
    }
    let configSeen = {
      headers: {
        "Content-Type": "application/json",
        "token": token
      }
  }

    useEffect(() => {
      let interval = null;
      if(seconds > 0)
      {
        interval = setInterval(() => {
          setSeconds(seconds => seconds - 1);
      }, 1000);
      return () => clearInterval(interval);
      }
    }, [seconds]);

    useEffect(() => {
        axios
        .get('http://snapi.epitech.eu/snaps', config)
        .then(response => {
          if(response.data.data !== getSnaps)
              setGetSnaps(response.data.data);
      })
        .catch((error) => {
          console.log(error)
      })
    }, [getSnaps])
      
    const openSnap = (idSnap, durationSnap) => {
        var url = "http://snapi.epitech.eu/snap/" + idSnap
        fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/octet-stream',
            'token': token
          },
        })
        .then((response) => response.blob())
        .then((blob) => {
          setSeconds(durationSnap);
          const url = window.URL.createObjectURL(new Blob([blob]));
          document.getElementById('img').src = url;
          axios
          .post('http://snapi.epitech.eu/seen', {
            "id": idSnap
          }, configSeen)
          .then(response => {
            console.log('seen log ', response);
          })
          .catch((error) => {
            console.log('seen error ', error);
          })
        })  
    }
    return(

    <div>
        <Container>
          <p> All snap</p>
        <div className="row justify-content-between">
          {getSnaps.map((snap, i) => <div className='card-body border border-primary  col-xs-12 col-sm-5 col-md-5 m-1 rounded' onClick={() => openSnap(snap.snap_id, snap.duration)} key={snap.snap_id+snap.from+i}> {snap.from}</div>)}
        </div>
        <div>
          { seconds > 0 ?  <img src='' id='img'onClick={() => setSeconds(0)} /> : null}
          { seconds > 0 ?  <p className='seconds'> {seconds}</p> : null}
        </div>
        <div id='box'></div>
        </Container>
    </div>
    )

}

export default Snap;