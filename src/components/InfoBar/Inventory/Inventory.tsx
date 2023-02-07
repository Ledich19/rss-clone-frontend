import React, { useState } from 'react';
import { ThingType, WeaponType } from '../../../app/types';

interface Props {
  inv?: Array<ThingType | WeaponType>
}

const Inventory = (props: Props) => (
    <div className="card" >
      {props.inv && props.inv.map((item, index) => (
        <div key={index} >
          <img src={`./images/${item.img}`} alt="cardImage" />
        </div>
      ))}
    </div>
);
export default Inventory;
