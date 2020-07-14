import React from 'react';

import './FirstPage.css';

const FirstPage = () => {
return(
    <div>
        <a href='/connection'>
            <div id='connection' className="row text-center d-flex justify-content-center">
                <h1 className='d-flex justify-content-center h1 text-primary text-light d-flex align-items-center'> Connection </h1>
            </div>
        </a>
        <a href='/register'>
            <div id='register' className="row text-center d-flex justify-content-center">
                <h1 className='d-flex  h1 text-success text-light d-flex align-items-center'> Register </h1>
            </div>
        </a>
    </div>
    )
}

export default FirstPage;