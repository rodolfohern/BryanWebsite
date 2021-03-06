import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { CardTravelRounded } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import useStyles from './styles';
import CartItem from './CartItem/CartItem';

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {

    const classes = useStyles();
    const EmptyCart = () => (
        <Typography variant="subtitle1"> Your cart is empty, 
            <Link to="/BryanWebsite/">Broke Boiiiiii.</Link>
        </Typography>
    );

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                <div>
                    <Button className={classes.emptyButtom} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty Cart</Button>
                    <Button component={Link} to="/BryanWebsite/Checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
                </div>
            </div>
        </>
    )
  if(!cart.line_items) return '...loading';
  return (
    <Container> 
        <div className={classes.toolbar} />
        <Typography className={classes.title} gutterBottom variant="h3">Your Shopping Cart</Typography>
        {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>  
  )
}

export default Cart;