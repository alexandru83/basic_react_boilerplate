/**
 * Created by Alex on 11/27/2017.
 */
import React from 'react';
import './bootstrap/bootstrap-custom.scss';

export default class App extends React.Component{
    render(){
        return <div className="container">
            <h1 className="jumbotron">Basic React Boilerplate(BRB)</h1>
            <button className="btn btn-primary">Button</button>
        </div>;
    }
}
