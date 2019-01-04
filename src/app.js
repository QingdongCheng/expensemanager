import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        This is from dashboard component.
    </div>
);

const AddExpensePage = () => (
    <div>
        This is from addexpense component.
    </div>
);



const EditExpensePage = () => (
    <div>
        This is from Editexpense component.
    </div>
);


const HelpPage = () => (
    <div>
        This is from HelpPage component.
    </div>
);

const NotFoundPage = () => (
    <div>
        Sorry. 404 Error. Page Not Found.
    </div>
);


const routes = (
    <BrowserRouter>
        <Switch>
            <Route path='/' component={ExpenseDashboardPage} exact={true}/>
            <Route path='/create' component={AddExpensePage} />
            <Route path='/edit' component={EditExpensePage} />
            <Route path='/help' component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
    
);
    


ReactDOM.render(routes, document.getElementById('app'));
