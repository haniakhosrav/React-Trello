import { Button, Typography } from '@material-ui/core';
import React from 'react';
import useStyle from './Styles';
import { Link } from 'react-router-dom';

const Welcome = () => {
    const classes = useStyle();

    return <div className={classes.container}>
        <img className={classes.background} src={'/images/welcome.jpg'}/>
        <Typography className={classes.title2}>
            Welcome to Trello
            <br/>
            Let's go to add your works
        </Typography>
        <Link to={'/app/inbox'} style={{textDecoration:'none'}}>
            <Button className={classes.enter} variant={'contained'}>let's go</Button>
        </Link>
    </div>
}

export default Welcome;