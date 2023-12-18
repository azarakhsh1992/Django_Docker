import React from 'react';
import {status} from '../utils';

export function GetCabinets(){
    return fetch('http://192.168.1.1:8000/web/cabinet/').then(status).catch(e => {console.log(e);
    })
}