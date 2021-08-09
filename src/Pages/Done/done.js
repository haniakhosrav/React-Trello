import { Button, Typography } from '@material-ui/core';
import React from 'react';
import useStyle from './Styles';

const Done = () => {
    const classes = useStyle();

    const [tasks, setTasks] = React.useState(JSON.parse(localStorage.getItem('done')))

    const deleteAll = () => {
        setTasks(localStorage.removeItem('done'))
    }
    
    return <div className={classes.root}>
        <div className={classes.tasksCont}>
            {
                tasks &&
                <Typography className={classes.title}>You did these works</Typography>
            }
            {
                (tasks || []).map((item) => {
                    return <div className={classes.doneTask}>{item}</div>
                })
            }
            {
                tasks &&
                <Button className={classes.btn} variant={'contained'} onClick={deleteAll}>Delete all</Button>
            }
        </div>
        {
            !tasks &&
            <div style={{display:'flex', alignItems: 'center', height:'100vh'}}>
                <div className={classes.Dcontainer}>
                    Hooray <br/> 
                    you did all of your works
                    <br/>
                    <img style={{height:'70px', width:'70px'}} src={'/images/hooray.png'}/>
                </div>
            </div>
        }
        
    </div>
}

export default Done;