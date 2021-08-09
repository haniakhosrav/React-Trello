import React from 'react';
import { AppBar , IconButton, Typography} from '@material-ui/core';
import makeStyle from './Styles';
import MenuIcon from '@material-ui/icons/Menu';
import { useTrellorDispatch, useTrelloState, setIsMenuOpen } from '../context/context';

const Header = () => {
    const classes = makeStyle();

    const {isOpen} = useTrelloState();
    const trelloDispatch = useTrellorDispatch();

    const isMenuOpen = () => {
        if(isOpen) return setIsMenuOpen(trelloDispatch, false);
        setIsMenuOpen(trelloDispatch, true);
    }

    return <AppBar className={classes.header}>
        <IconButton onClick={isMenuOpen} className={classes.icon}>
            <MenuIcon style={{color: '#000000'}} className={classes.menu}/>
        </IconButton>
        <Typography className={classes.title}>Trello</Typography>
    </AppBar>
}

export default Header;