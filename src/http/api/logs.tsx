import api,{response} from './config'

const http = {    
    Find: async (params:any)=>{

        const url = `${api}/logs?`+ new URLSearchParams(params)

        return fetch(url,{                 
            headers:{                   
                "Content-Type":"application/json", 
                "Accept":"application/json", 
            },                  
        }).then(response)

    },
    FindbyID: async (idLog:Number)=>{

        return fetch(`${api}/logs/${idLog}`,{                 
            headers:{                   
                "Content-Type":"application/json", 
                "Accept":"application/json", 
            },                  
        }).then(response)

    }, 
    
}

export default http