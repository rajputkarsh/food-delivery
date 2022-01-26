import React from 'react';
import MenuContainer from '../menu/MenuContainer';
import { AccountBalanceWalletRounded, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from '@mui/icons-material';

import './Footer.css';

function Footer() {
  return (
          <div className="bottom-menu">
              <ul className="menu">
                  <MenuContainer link={'#'} icon={<HomeRounded />} class={"home-button"} />
                  <MenuContainer link={'#'} icon={<Chat />} class={"chat-button"} />
                  <MenuContainer link={'#'} icon={<AccountBalanceWalletRounded />} class={"wallet-button"} />
                  <MenuContainer link={'#'} icon={<Favorite />} class={"favorite-button"} />
                  <MenuContainer link={'#'} icon={<SummarizeRounded />} class={"summary-button"} />
                  <MenuContainer link={'#'} icon={<Settings />} class={"settings-button"} />
              
                  <div className="indicator"></div>  
              </ul>

                

            </div>
        );
}

export default Footer;
