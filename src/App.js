import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import React, {Component} from 'react';
import './App.css';
import {Provider} from 'react-redux';
import {store} from "./common/store";
import {RepositoriesSearch} from "./repositoriesSearch/repositoriesSearch";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <RepositoriesSearch/>
            </Provider>
        );
    }
}

export default App;
