import { Divider, Typography, Button } from '@material-ui/core';
import React from 'react';
import useStyle from './Styles';

const Inbox = () => {

    const classes = useStyle();

    const [value, setValue] = React.useState();
    const [tasks, setTasks] = React.useState(JSON.parse(localStorage.getItem('tasks')) || []);

    const addTask = () => {
        if(!value) return;

        tasks.push(value);
        
        localStorage.setItem('tasks', JSON.stringify(tasks));
        setTasks(JSON.parse(localStorage.getItem('tasks')));
        setValue('');
    }

    
    const doingTask = (item) => {
        let taskDone = localStorage.getItem('done');

        if(taskDone !== null){
            taskDone = JSON.parse(taskDone);
            taskDone.push(item);
        }
        else {
            taskDone = [item];
        }
         
        localStorage.setItem('done', JSON.stringify(taskDone))
    }

    const deleteTask = (item, index, arr) => {
        let arr1 = arr.slice(0, index);
        let arr2 = arr.slice(index + 1, arr.length + 1);
        localStorage.setItem('tasks', JSON.stringify(arr1.concat(arr2)));
        setTasks(JSON.parse(localStorage.getItem('tasks')));
        doingTask(item);
    }

    return <div className={classes.root}>
        <Typography style={{fontSize: '40px'}}>Inbox</Typography>
        <Divider style={{width: '100%'}}/>
        <div className={classes.cont}>
            <textarea placeholder={'Add your work'} value={value} 
            onChange={e => setValue(e.target.value)} 
            className={classes.field}/>
            <Button variant={"contained" }className={classes.btn} onClick={addTask}>Add task</Button>
            <div style={{marginTop: '50px'}}>
                {
                     tasks.map((item, index, arr) => {return <div className={classes.taskCont}>
                        <img className={classes.check} src={'/images/icons8-checkmark.gif'} onClick={() => deleteTask(item, index, arr)}/> 
                        <Typography component={'span'}>{item}</Typography>
                    </div>
                })
                }
            </div>
        </div>
    </div>
}

export default Inbox;