import styled,{ createGlobalStyle } from 'styled-components'

export const GlobalStyle =  createGlobalStyle`
  
    html,body, #root{            
        max-height: 100vh; 
       
        width: 100%;
        height: 100%;  
        position: relative;

        margin:0; 
        padding: 0; 

        background-color: var(--corPrimaria); 
            
    }
    *,input,button{
        font-family: 'Roboto', sans-serif;          
    }

    :root{
        --corPrimaria:#07C2E8;
        --corSecundaria: #0D91A8; 
    }

    .table{
        width: 100%;
        border-collapse: collapse;
    }
    .table thead {
        .radius-left{
            border-radius: 4px 0 0 4px;
        }
        .radius-right{
            border-radius: 0 4px 4px 0;
        }
    }
    .table thead th{
        color:white; 
        padding: 10px;          
        font-weight:300; 
        font-weight: 400; 
        background-color:var(--corSecundaria);        
        
    }

    .table tbody tr td{
        padding: 9px; 
        font-weight:300; 
        cursor: pointer;
        text-align: center; 
        border-bottom: 1px solid #B6FFAB; 
    }

    h2{
        font-weight: 400; 
    }

    a.ver-form{
        padding: 9px; 
        font-size: 12pt; 
        font-weight: 400; 
        border-radius: 9px; 
        text-decoration:none; 
        display:inline-block; 
        margin: 30px 0 10px 0; 
        color: var(--corPrimaria);
        border:1px solid var(--corPrimaria);
        
        &:hover{
            color: white; 
            font-weight: 400; 
            border:1px solid var(--corSecundaria);
            background-color: var(--corSecundaria);

        }
           
    }

    input.input-autocomplete{

        width: 300px; 
        padding: 9px; 
        border-radius: 6px; 
        border:1px solid #B9B9B9;
        color: var(--corSecundaria); 

        &:active,&:focus{
            border:1px solid var(--corPrimaria); 
        }
        &::placeholder{
            color: black; 
            font-weight:400; 
        }
    }

`

export const Menu = styled.div`
    top: 0; 
    left:0;     
    width: 150px; 
    height: 100vh; 
    position:fixed;
    background-color: var(--corSecundaria); 

    > ul{
        margin-top: 60px; 
    }

    > ul li{
        display:inline-block; 
        padding: 10px 0 10px 0;  

    }
    > ul li a{
       color:white; 
       text-decoration:none; 

    } 
   
`

export const Container = styled.div`
      display:flex;      
      margin-left: 150px;
`

export const Grid = styled.div`    
     width: 1000px; 
     padding: 15px;    
     margin: 60px auto; 
     border-radius: 9px; 
     background-color: white; 
`

export const Table = styled.div`
    margin-top: 20px; 
`

export const Form = styled.form`        
    display:flex; 
    flex-direction: column;  

    > .btn{
        width: 200px; 
        margin-top: 20px; 
    }
`

export const Button = styled.button`
    
    border:1px solid #14FC5F; 
    padding: 7px; 
    
    color: #14FC5F; 
    background:none; 
     
    font-size: 12pt; 
    border-radius: 6px;
    &:hover{
        color:white;
        cursor: pointer;        
        font-weight: 400; 
        background-color:#0FBD46; 
        border:1px solid #0FBD46; 
       
    }  
`

export const InputIcon = styled.div`
     
`
export const Icon = styled.div``
export const InputText = styled.div`
    display:flex; 
    flex-direction: column; 
 
`
export const Label = styled.label`
   font-weight: 300; 
   padding: 10px 0 10px 0; 
`
export const Input = styled.input`
   
   width: 300px; 
   padding: 9px; 
   color: var(--corSecundaria); 
   border-radius: 6px; 
   border:1px solid #B9B9B9;

   &:active,&:focus{
       border:1px solid var(--corPrimaria); 
   }
     
`

export const Buttons = styled.div`
    display:flex; 
    margin-top: 20px;
    flex-direction: row; 

    > .btn{
        width: 150px; 
        padding: 13px; 
        margin-right: 20px; 
    }
    > .prev{
        color: #6D806A; 
        border:1px solid #6D806A;
        &:hover{
            color: white; 
            background-color: #7d817d;
        }
    }
`

export const TextError = styled.span`
    display:flex; 
    margin-top: 9px; 
    color: #FF241C; 
    font-weight: 400;

`
