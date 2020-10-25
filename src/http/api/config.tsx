
export const  response =  (res:Response) =>{
    if (!res.ok) {
        return Promise.reject(res);
    }
    return res;
}

export default "http://localhost:5000"