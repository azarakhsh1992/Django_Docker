import React from 'react';
import {status} from '../utils';

export function ShiftRegister(userData){
    return fetch('http://web:8000/web/shifts/CustomFunc/',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
    }).then(status).catch(e => {console.log(e);
    })
}