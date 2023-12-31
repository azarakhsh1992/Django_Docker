import React from 'react';
import {status} from '../utils';

export function SetRequest(userData,token){
    return fetch('http://web:8000/web/requests/userrequest/',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
        },
        body: JSON.stringify(userData)
    }).then(status).catch(e => {console.log(e);
    })
}

export function CancelRequest(requestData,token){
    return fetch('http://web:8000/web/requests/canclerequest/',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
        },
        body: JSON.stringify(requestData)
    }).then(status).catch(e => {console.log(e);
    })
}

// TODO: correct url

export function CheckRequestButton(requestData,token){
    return fetch('http://web:8000/web/requests/frontend/',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
        },
        body: JSON.stringify(requestData)
    }).then(status).catch(e => {console.log(e);
    })
}