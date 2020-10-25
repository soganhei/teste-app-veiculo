import {IMotorista,IVeiculo,IFormSaidaVeiculo} from '../estrutura';

const api = "http://localhost:5000"

const response =  (res:Response) =>{
    if (!res.ok) {
        return Promise.reject(res);
    }
    return res;
}

const http = {
    Motorista:{
        Save: async (payload:IMotorista)=>{

            let method = "POST"
            let url = `${api}/motoristas`
              

            if(payload.id != undefined){
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
    },
    Veiculo:{
        Save: async (payload:IVeiculo)=>{

            let method = "POST"
            let url = `${api}/veiculos`
              
            if(payload.id != undefined){
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

            const url = `${api}/veiculos?`+ new URLSearchParams(params)

            return fetch(url,{                 
                headers:{                   
                    "Content-Type":"application/json", 
                    "Accept":"application/json", 
                },                  
            }).then(response)
    
        },
        FindbyID: async (idMotorista:Number)=>{

            return fetch(`${api}/veiculos/${idMotorista}`,{                 
                headers:{                   
                    "Content-Type":"application/json", 
                    "Accept":"application/json", 
                },                  
            }).then(response)
    
        }, 
        Delete: async (idMotorista:Number)=>{

            return fetch(`${api}/veiculos/${idMotorista}`,{
                method:"DELETE", 
                headers:{                   
                    "Content-Type":"application/json", 
                    "Accept":"application/json", 
                },                  
            }).then(response)
    
        }, 
    },
    Saida:{
        Save: async (payload:IFormSaidaVeiculo)=>{

            let method = "POST"
            let url = `${api}/saidas`
              
            if(payload.id != undefined){
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

            const url = `${api}/saidas?`+ new URLSearchParams(params)

            return fetch(url,{                 
                headers:{                   
                    "Content-Type":"application/json", 
                    "Accept":"application/json", 
                },                  
            }).then(response)
    
        },
        FindbyID: async (idSaida:Number)=>{

            return fetch(`${api}/saidas/${idSaida}`,{                 
                headers:{                   
                    "Content-Type":"application/json", 
                    "Accept":"application/json", 
                },                  
            }).then(response)
    
        }, 
        Delete: async (idSaida:Number)=>{

            return fetch(`${api}/saidas/${idSaida}`,{
                method:"DELETE", 
                headers:{                   
                    "Content-Type":"application/json", 
                    "Accept":"application/json", 
                },                  
            }).then(response)
    
        }, 
    },
}

export default http