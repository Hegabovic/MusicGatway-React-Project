import {Navbar} from 'react-bootstrap';
import {NavLink} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import '../../style.css';

let MusicHome = ()=>{
    return(
        <div>
             <Navbar bg="dark" variant="light" id="music-header" className={'d-flex justify-content-center'}>
                 <NavLink className={'btn btn-dark'} to={'/allSingers'}> Music Gateway </NavLink>
             </Navbar>
        </div>
    )
}

export default MusicHome;