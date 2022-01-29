import React from 'react';
import MenuContainer from '../menu/MenuContainer';
import { AccountBalanceWalletRounded, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from '@mui/icons-material';

import './Footer.css';

function Footer() {
  return (
          <div className="bottom-menu">
              <ul className="menu">
                  <MenuContainer link={'#'} icon={<HomeRounded />} isHome />
                  <MenuContainer link={'#'} icon={<Chat />} />
                  <MenuContainer link={'#'} icon={<AccountBalanceWalletRounded />} />
                  <MenuContainer link={'#'} icon={<Favorite />} />
                  <MenuContainer link={'#'} icon={<SummarizeRounded />} />
                  <MenuContainer link={'#'} icon={<Settings />} />
              
                  <div className="indicator"></div>  
              </ul>

                

            </div>
        );
}

export default Footer;
