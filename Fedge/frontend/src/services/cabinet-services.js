import React from 'react';
import {status} from '../utils';

export function GetCabinets(){
    return fetch('http://web:8000/web/cabinet/').then(status).catch(e => {console.log(e);
    })
}