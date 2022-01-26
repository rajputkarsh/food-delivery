import React, {useEffect} from 'react';

import Header from './components/header/Header';
import MainBody from './components/main-body/MainBody';
import Footer from './components/footer/Footer';

import './App.css';

function App() {

  useEffect(() => {

    const menuLi = document.querySelectorAll(".menu li");

    function setMenuActive(){
      menuLi.forEach(element => {
        element.classList.remove('active');
      });
      
      this.classList.add('active');
    }

    menuLi.forEach((element) => element.addEventListener('click', setMenuActive) );
  
  }, []);
  

  return (
    <div className="App">
      <Header />
      
      <MainBody />

      <Footer />

    </div>
  );
}

export default App;
