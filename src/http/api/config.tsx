
export const  response =  (res:Response) =>{
    if (!res.ok) {
        return Promise.reject(res);
    }
    return res;
}

const api = 'http://localhost:5000'

export default api