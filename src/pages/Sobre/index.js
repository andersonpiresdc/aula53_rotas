import {Link} from 'react-router-dom';

export default function Sobre(){
   return(
      <div>
         <h1>Saibam ou pouco sobre a nossa história...</h1>
         <Link to="/">Home</Link><br/>
         <Link to="/contato">Contato</Link><br/>
      </div>
   )
}