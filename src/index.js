import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home/Home';
import Portfolio from './Main/Portfolio/Portfolio';
import CV from './Main/CV/CV';
import Contact from './Main/Contact/Contact';
import Manifesto from './Main/Manifesto/Manifesto';
import Blog from './Main/Blog/Blog';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';



ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/cv" component={CV}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/manifesto" component={Manifesto}/>
            <Route path="/blog" component={Blog}/>
        </Switch>
    </BrowserRouter>
    ),document.getElementById('root'));
registerServiceWorker();


