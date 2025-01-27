import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropsExample from '../pages/PropsExample';
import SimpleFunction from '../pages/SimpleFunction';
import SimpleState from '../pages/SimpleState';
import EventHandling from '../pages/EventHandling';
import UseEffectAPI from '../pages/UseEffectAPI';
import UseContextProvider from '../pages/UseContextExample';
import ConditionalRendering from '../pages/ConditionalRendering';
import ListExample from '../pages/ListExample';
import BootstrapExample from '../pages/BootstrapExample';
import CheckoutExample from '../pages/CheckoutExample';
import Header from '../components/header/Header';

function AppRoutes() {
    return (
        <Router>
            <Header />
            <div className="content">
                <Switch>
                    <Route path="/simple-function" component={SimpleFunction} />
                    <Route path="/props-example">
                        <PropsExample message="Hello, this is a prop!" />
                    </Route>
                    <Route path="/simple-state" component={SimpleState} />
                    <Route path="/event-handling" component={EventHandling} />
                    <Route path="/use-effect-api" component={UseEffectAPI} />
                    <Route path="/use-context" component={UseContextProvider} />
                    <Route path="/conditional-rendering" component={ConditionalRendering} />
                    <Route path="/list-example" component={ListExample} />
                    <Route path="/bootstrap-example" component={BootstrapExample} />
                    <Route path="/checkout-example" component={CheckoutExample} />
                    <Route path="/" exact>
                        <h1 className="title">Welcome! Please select a page from the dropdown menu.</h1>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default AppRoutes;