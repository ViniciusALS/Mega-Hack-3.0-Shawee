import React, { useState } from 'react';

import CardBar from '../../components/CardBar';
import Cervejas from '../../components/cervejas/index';

import './styles.css';

const Home = () => {

	const [ selectedItems, setSelectedItems ] = useState<number[]>([]);
	
	const setItems = (id: number) => {
		const alreadySelected = selectedItems.findIndex(item => item === id)

        if ( alreadySelected >= 0) {

            const filteredItems = selectedItems.filter(item => item !== id);
            
            setSelectedItems(filteredItems);
        } else {

            setSelectedItems([
                ...selectedItems, id
            ]);
        }
	};

	return (
    <>
      <h2>Cervejas para você</h2>
      <Cervejas selected={setItems} />
      
      <h3>Bares perto de você</h3>
      <CardBar
        nome="Social Burguer"
        imageURL="https://imgur.com/f1afkzh.png"
        nota={3}
        distance={300}
        disponibilidades={[
          { "id": 1, "nome": "Segurança contra o COVID-19", "imageURL": "https://imgur.com/iaTXemX.png" },
          { "id": 3, "nome": "Area de Jogos", "imageURL": "https://imgur.com/8nCFLw7.png" }
        ]}
      />
      
      <h3>O que vai rolar</h3>
      <h3>Promoções</h3>
		</>		
	);
}

export default Home; 