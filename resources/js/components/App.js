import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import Header from './Header';
import ProductIndex from './ProductIndex';
import ProductCreate from './ProductCreate';
import ProductShow from './ProductShow';
import ProductEdit from './ProductEdit';
import ProductDelete from './ProductDelete';
import './App.css';
 
class App extends Component {
    render () {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path='/' component={ProductIndex}/>
                        <Route path='/product/create' component={ProductCreate} />
                        <Route path='/product/edit/:id' component={ProductEdit} />
                        <Route path='/product/delete/:id' component={ProductDelete} />
                        <Route path='/product/:id' component={ProductShow} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
 
ReactDOM.render(<App />, document.getElementById('app'))