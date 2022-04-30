import { Link, useParams } from 'react-router-dom';
export default function Produto(){
   const {id} = useParams();
   return(
      <div>
         <h1>Grade de produtos</h1>
         {
         id === '' &&
         <h1>Produto selecionado: PRODUTO NÃO ENCONTRADO</h1>
         }
         <span>Produto selecionado: {id} </span>
         <br/>
         <Link to="/">Voltar para a pagina inicial</Link>
      </div>
   )
}