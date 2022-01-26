import React from 'react';

import './MenuContainer.css';

function MenuContainer({link, icon}) {
  return <li>
    <a href={link}>
      <span className="bottom-list-icon">{icon}</span>
    </a>
  </li>
}


export default MenuContainer;
