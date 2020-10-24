//import { Label } from '@material-ui/icons';
import React from 'react';

import {Link} from 'react-router-dom';

import {Menu} from './styles'


function App() {
  return (
    <div style={{display: "flow-root"}}>
       
        <Menu>
          <ul>
              <li>
                <Link to="/">Saídas</Link>
              </li>
              <li>
                <Link to="/motoristas">Motoristas</Link>
              </li>
              <li>
                <Link to="/veiculos">Veículos</Link>
              </li>
            </ul>
        </Menu> 
    </div>
  );
}

export default App;
