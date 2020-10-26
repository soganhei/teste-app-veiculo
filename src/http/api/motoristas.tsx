import api,{response} from './config'
import {IMotorista} from '../../estrutura';

const http = {
    Save: async (payload:IMotorista)=>{

        let method = "POST"
        let url = `${api}/motoristas`
          
        if(payload.id !== undefined){
            method = "PUT"
            url = `${url}/${payload.id}`
        }

        return fetch(url,{
            method, 
            headers:{                   
                "Content-Type":"application/json", 
                "Accept":"application/json", 
            }, 
            body: JSON.stringify(payload) 
        }).then(response)

    },
    Find: async (params:any)=>{

        const url = `${api}/motoristas?`+ new URLSearchParams(params)

        return fetch(url,{                 
            headers:{                   
                "Content-Type":"application/json", 
                "Accept":"application/json", 
            },                  
        }).then(response)

    },
    FindbyID: async (idMotorista:Number)=>{

        return fetch(`${api}/motoristas/${idMotorista}`,{                 
            headers:{                   
                "Content-Type":"application/json", 
                "Accept":"application/json", 
            },                  
        }).then(response)

    }, 
    Delete: async (idMotorista:Number)=>{

        return fetch(`${api}/motoristas/${idMotorista}`,{
            method:"DELETE", 
            headers:{                   
                "Content-Type":"application/json", 
                "Accept":"application/json", 
            },                  
        }).then(response)

    }, 
}

export default http