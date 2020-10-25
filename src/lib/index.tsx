
//Retornar YYYY-MM-DD
export const FormatDate = (date:Date):String =>{
    return date.toJSON().slice(0,10)
}