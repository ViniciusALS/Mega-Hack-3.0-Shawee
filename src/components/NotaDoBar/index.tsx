import React from 'react';

import Star from '../../resources/star.png';

type NotaProps = {
  	nota: number
}

const NotaDoBar: React.FC<NotaProps> = ({nota}) => {
  
  	const value = Math.round(nota);

  	let stars = [];

  	for (let i = 0; i < 5; i++) {

    	if (i < value)
			stars.push(<img src={Star} alt='Nota do bar' key={i} />);
    	else
			stars.push(<img src={Star} alt='Nota do bar' key={i} />);
  	}

	return (
		<div> {stars} </div>
	);
}

export default NotaDoBar;