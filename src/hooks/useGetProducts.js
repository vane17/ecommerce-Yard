import React, {useState, useEffect} from 'react';

import axios from 'axios';




const  useGetProducts = (API) => {
	const [products, setproduct] = useState([]);

	useEffect(async() => {
		const response = await axios(API);
		setproduct(response.data);
	}, []);

    return products;
}
export {useGetProducts};