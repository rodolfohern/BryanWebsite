import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

const products = [
    {id: 1, name: 'Jordan 1', description: 'Travis Scott Lows', price: '$800', image:'https://www.kicksonfire.com/wp-content/uploads/2021/07/Travis-Scott-x-Fragment-x-Air-Jordan-1-Low-2.jpeg'},
    {id: 2, name: 'Jordan 4', description: 'Off White', price: '$600', image:'https://footwearnews.com/wp-content/uploads/2020/05/air-jordan-off-white-4-sail-2.jpg?w=700&h=437&crop=1&resize=910%2C568'},
    {id: 3, name: 'Nike Dunk', description: 'Low Black and White', price: '$200', image:'https://sneakernews.com/wp-content/uploads/2020/12/Nike-Dunk-Low-CW1589-100-1.jpg'},
];

const Products = () => {
    return(
        <main>
            <Grid container justify ="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );
}

export default Products;