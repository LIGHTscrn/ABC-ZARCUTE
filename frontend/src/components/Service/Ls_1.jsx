import React from 'react';

export default function() {
    return(
        <div className='text-center text-1xl'>
            <img src="./livestream2.png" className='position-relative' alt="" />
            <a href="/" style={{ 
                display: 'inline-block', 
                padding: '10px 20px', 
                fontSize: '16px', 
                color: '#fff', 
                backgroundColor: '#FE7E00',
                borderRadius: '5px', 
                textDecoration: 'none', 
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: '10px'
            }}
            className='position-absolute top-50 left-70'
            >Lets Go LIVE!, Get a Quote</a>
        </div>
    );
}