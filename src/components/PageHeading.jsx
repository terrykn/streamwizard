import React from 'react';

const PageHeading = (props) => {
    return (
        <div className='col'>
            <h1><strong>{props.heading}</strong></h1>
        </div>
    )
}

export default PageHeading;