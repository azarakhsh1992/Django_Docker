import React from 'react';
import {status} from '../utils';

export function GetData(qr){
    return fetch('http://web:8000/web/monitoring/monitoring_current_data/',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(qr)
    }).then(status).catch(e => {console.log(e);
    })
}


export function GetHistoryTemp(qr){
    return fetch('http://web:8000/web/monitoring/history_temp/',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(qr)
    }).then(status).catch(e => {console.log(e);
    })
}

export function GetHistoryEnergy(qr){
    return fetch('http://web:8000/web/monitoring/history_energy/',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(qr)
    }).then(status).catch(e => {console.log(e);
    })
}

export function GetHistoryDoor(qr){
    return fetch('http://web:8000/web/monitoring/history_doorsensor/',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(qr)
    }).then(status).catch(e => {console.log(e);
    })
}