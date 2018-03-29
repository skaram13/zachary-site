import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SlideShow from './Home/SlideShow/SlideShow';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SlideShow />, document.getElementById('root'));
registerServiceWorker();
