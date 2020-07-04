import React from 'react';

import CardBar from '../../components/CardBar';

import './styles.css';

const Home = () => {
	return (
    <CardBar
      nome="Social Burguer"
      imageURL=""
      nota={3}
      distance={300}
      disponibilidades={[1, 2, 3]} />
	);
}

export default Home; 