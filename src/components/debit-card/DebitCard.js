import React from 'react'

import './DebitCard.css';

function DebitCard() {
  return (
    <div className="card-group">
        <img src="https://firebasestorage.googleapis.com/v0/b/food-delivery-69e51.appspot.com/o/VisaLogo.png?alt=media&token=8190a383-0efc-4751-850a-54ed929abdff" alt="" className="card-logo" />
          <img src="https://firebasestorage.googleapis.com/v0/b/food-delivery-69e51.appspot.com/o/chip.png?alt=media&token=de09a419-2aa3-4ac5-92ba-6200dfce518e" alt="" className="card-chip" />
    
        <div className="card-number">1230 2340 3450 4560</div>
        <div className="card-name">Utkarsh Rajput</div>
        <div className="card-from">03/22</div>
        <div className="card-to">09/28</div>
        <div className="card-ring"></div>

    </div>
  )
}

export default DebitCard