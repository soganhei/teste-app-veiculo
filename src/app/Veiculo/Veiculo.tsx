import React,{useEffect,useState} from 'react'
import {Link, useHistory} from 'react-router-dom'

import {StatusCodes} from 'http-status-codes'

 
import { faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {    
  Container,
  Grid,  
  Table, 
  TableIcons
} from '../../styles'

import http from '../../http'
import {IVeiculo} from '../../estrutura'


function Veiculos() {

  const router = useHistory()

  const  [items,setItems] = useState<IVeiculo[]>([])
   

  const find = async (params:Object)=>{

      const response = await http.Veiculo.Find(params)
      const items = await response.json()
      setItems(items)
  }

  useEffect(()=>{
      find({})
  },[])

  const handlerDelete = async (idVeiculo:Number | undefined) => {

      if(!window.confirm("Deseja excluir?")){
          return ()=>{}
      }
      
      if(idVeiculo !== undefined){

          try {

            const {status} = await http.Veiculo.Delete(idVeiculo)
        
            if(status === StatusCodes.NO_CONTENT){             
                find({})
            }

          } catch (error) {
              const err = await error.json()
              alert(err.message)
          }

      }
  }

  return (
     <div>
         <Container>
             <Grid>
               <h2>Veículos</h2>                    
                   <div>
                      <Link to="/veiculos/form" className="ver-form"><FontAwesomeIcon icon={faPlus} /> Novo Veículo</Link>
                   </div>
                   {items.length > 0 && (
                      <Table>
                      <table className="table">
                            <thead>
                               <tr>
                                  <th className="radius-left">#</th>
                                  <th>Placa</th>
                                  <th>Marca</th>
                                  <th>Cor</th>
                                  <th className="radius-right">Ação</th> 
                                </tr>                            
                            </thead>
                            <tbody>
                                {items.map((item,idx)=>{
                                   return (
                                    <tr key={idx}>
                                        <td>{item.id}</td>
                                        <td>{item.placa}</td>
                                        <td>{item.marca}</td>
                                        <td>{item.cor}</td>
                                        <td>    
                                          <TableIcons>
                                           <span onClick={()=> router.push(`/veiculos/form/${item.id}`)}><FontAwesomeIcon icon={faEdit} /></span>
                                           <span onClick={()=> handlerDelete(item.id)} className="trash"><FontAwesomeIcon icon={faTrash} /></span>
                                         </TableIcons>                               
                                        </td>                                
                                      </tr> 
                                   )
                                })}                            
                            </tbody>
                      </table>
                     </Table>
                   )}
             </Grid>
        </Container>
     </div>
  );
}

export default Veiculos;
