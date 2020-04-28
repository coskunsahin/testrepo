import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';
import Create from './components/Create';

import './index.css'; 
import Show from './components/Show';
import Edit from './components/Edit';


ReactDOM.render(

<Router>
<div>
 
 

  <Route path='/show/:id' component={Show}/>
  <Route path='/edit/:id'component={Edit}/>
</div>
</Router>,
document.getElementById('root')

);
serviceWorker.unregister()
