import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
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


const Header = () => (
    <div>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Editexpense</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </div>
);
const NotFoundPage = () => (
    <div>
        Sorry. 404 Error. <Link to="/">Go home</Link>
    </div>
);


const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path='/' component={ExpenseDashboardPage} exact={true} />
                <Route path='/create' component={AddExpensePage} />
                <Route path='/edit' component={EditExpensePage} />
                <Route path='/help' component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>

);



ReactDOM.render(routes, document.getElementById('app'));
