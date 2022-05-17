import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from  'react-router-dom';

import logo from '../../assets/babyBryan.png';
import useStyles from './styles';

//this file describes the navbar at the top of the page
const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();

    return (
    <>
        <AppBar position="fixed" className={classes.appBar} color="inherit">
            <Toolbar>
                <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                    <img src={logo} alt="Bryan's Website" height="25px" className={classes.image}/>
                    Bryan's Shoe Resell
                </Typography>
                <div className={classes.grow} />
                {location.pathname === '/' && (
                <div className={classes.button}>
                    <IconButton component={Link} to="/cart" aria-label="Show Cart Items" color="inherit">
                        <Badge badgeContent={totalItems} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>)}
            </Toolbar>
        </AppBar>
    </>
  )
}
export default Navbar;