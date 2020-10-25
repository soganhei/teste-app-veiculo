import React from 'react';
import {Link} from 'react-router-dom';

import { faUserAlt, faCarAlt, faCalendarAlt, faBook } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {Menu} from './styles'




function App() {
  return (
    <div style={{display: "flow-root"}}>
       
        <Menu>
          <ul>
              <li>
                <Link to="/"> <FontAwesomeIcon icon={faCalendarAlt} /> Saídas</Link>
              </li>
              <li>
                <Link to="/motoristas"><FontAwesomeIcon icon={faUserAlt} /> Motoristas</Link>
              </li>
              <li>
                <Link to="/veiculos"><FontAwesomeIcon icon={faCarAlt} /> Veículos</Link>
              </li>
              <li>
                <Link to="/logs"><FontAwesomeIcon icon={faBook} /> Logs</Link>
              </li>
            </ul>
        </Menu> 
    </div>
  );
}

export default App;
