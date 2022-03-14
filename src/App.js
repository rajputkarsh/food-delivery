import React, {useState, useEffect} from 'react';

import Header from './components/header/Header';
import MainBody from './components/main-body/MainBody';
import Footer from './components/footer/Footer';

import { Items } from './components/data';

import './App.css';

function App() {

  	const [isMainData, setMainData] = useState(
		Items.filter(element => element.itemId === "burger01")
  	);

	const setData = (itemId) => {
		setMainData(Items.filter(element => element.itemId === itemId))
	}

  	useEffect(() => {

		const menuLi = document.querySelectorAll(".menu li");

		function setMenuActive(){
			menuLi.forEach(element => {
			element.classList.remove('active');
			});
			
			this.classList.add('active');
		}
		menuLi.forEach((element) => element.addEventListener('click', setMenuActive) );
	
		const menuCards = document.querySelector(".menu-row-container").querySelectorAll(".row-menu-card");
		function setMenuCardActive(){
			menuCards.forEach(element => {
			element.classList.remove('active');
			});

			this.classList.add('active');      
		}
		menuCards.forEach(element => element.addEventListener('click', setMenuCardActive));

  	}, [isMainData]);
  

	return (
		<div className="App">
			<Header />
			
			<MainBody isMainData={isMainData} setData={setData} />

			<Footer />

		</div>
	);
}

export default App;
