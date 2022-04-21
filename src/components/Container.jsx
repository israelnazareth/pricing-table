import React from 'react';
import { Cards } from './Cards';
import {data} from '../data';

function Container() {
  return (
    <div className="container text-center">
      <div className="row row-cols-1 row-cols-md-3" id='container-card'>
        { data.map((item, index) => <Cards key={index} item={item} />) }
      </div>
    </div>
  );
}

export default Container;