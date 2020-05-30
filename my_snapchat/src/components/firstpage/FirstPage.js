import React from 'react';

import './FirstPage.css';

const FirstPage = () => {
return(
    <div>
        <a href='/connection'>
            <div id='connection'>
                <h1 className='d-flex justify-content-center h1 text-primary text-light'> Connection </h1>
            </div>
        </a>
        <a href='/register'>
            <div id='register'>
                <h1 className='d-flex justify-content-center h1 text-success text-light'> Register </h1>
            </div>
        </a>
    </div>
    )
}

export default FirstPage;