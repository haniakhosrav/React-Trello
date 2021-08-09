import React from 'react';
import Header from './Pages/header';
import Sidebar from './Pages/Sidebar/sidebar';
import Inbox from './Pages/Inbox/inbox';
import Done from './Pages/Done/done'
import {Route, BrowserRouter, Switch } from 'react-router-dom';
import useStyle from './Pages/Styles';
import { useTrelloState } from './context/context';
import Welcome from './Pages/welcome';

const App = () => {

    const classes = useStyle();

    const {isOpen} = useTrelloState();
    const isMenuOpen = () => {
        if(!isOpen) return '-20%';
        return 0;
    }

    return <BrowserRouter>
    <Switch>
        <Route exact path={'/'} component={Welcome}/>
        <Route path={'/app'} render={() => {
            return <div>
            <Header/>
            <div className={classes.root}>
                <div className={classes.sidebar} style={{marginLeft: isMenuOpen(), transition:'1s'}}>
                    <Sidebar/>
                </div>
                <div className={classes.main}>
                    <Switch>
                        <Route exact path={'/app/inbox'} component={Inbox}/>
                        <Route path={'/app/done'} component={Done}/>
                        <Route component={Inbox}/>
                    </Switch>
                </div>  
            </div>
        </div>
        }}/>
    </Switch>      
</BrowserRouter>
}

export default App;