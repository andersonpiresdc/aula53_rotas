import {Link} from 'react-router-dom';

export default function Contato(){
   return(
      <div>
         <h1>Contatos...</h1>
         <Link to="/">Home</Link><br/>
         <Link to="/sobre">Sobre</Link><br/>
      </div>
   )
}