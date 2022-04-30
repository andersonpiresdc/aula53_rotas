import {Link} from 'react-router-dom';

export default function Erro(){
   return(
      <div>
         <h1>Esta página não foi encontrada...</h1><br/>
         <span>Você deve estar procurtando</span><br/>
         <Link to="/">Home</Link><br/>
         <Link to="/contato">Contato</Link><br/>
         <Link to="/sobre">Sobre</Link><br/>
      </div>
   )
}