import { ButtonBase, Typography } from '@material-ui/core';
import React from 'react';
import useStyle from './Styles';
import { Link } from 'react-router-dom';


const Sidebar = () => {

    const classes = useStyle();

    return <div className={classes.root}>
        <Link to={'/app/inbox'} style={{textDecoration: 'none', color: '#000000'}}>
        <ButtonBase className={classes.base}>
            <img className={classes.icon} src={'/images/mail-inbox.png'}/>
            <Typography style={{marginLeft: '7px'}}>
                Inbox
            </Typography>
        </ButtonBase>
        </Link>
        <Link to={'/app/done'} style={{textDecoration: 'none', color: '#000000'}}>
        <ButtonBase className={classes.base}>
            <img className={classes.icon} src={'/images/done.png'}/>
            <Typography  style={{marginLeft: '7px'}}>
                Done
            </Typography>
        </ButtonBase>
        </Link>
    </div>
}

export default Sidebar;