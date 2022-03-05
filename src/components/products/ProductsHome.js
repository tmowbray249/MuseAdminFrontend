import React from 'react';
import {setNavContainerSize} from "../../Utils";


class ProductsHome extends React.Component {

	componentDidMount() {
		setNavContainerSize();
	}

	render() {
		return(
			<div className="page-content products-home">
            	<h1>Products</h1>
			</div>
        );
	}

}

export default ProductsHome;