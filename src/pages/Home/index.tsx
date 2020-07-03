import React from 'react';

import CardBar from '../../components/card-bar';

import './styles.css';

const Home = () => {
	return (
		<CardBar nome="Social Burguer" nota={3} latitude={1.235432} longitude={-23.124632} disponibilidades={["sdf", "sldkjf"]}/>
	);
}

export default Home;