import {Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

let MusicHeaderBack = ()=>{
    return(
        <div>
            <Navbar bg="" variant="light" className={'d-flex justify-content-center'}>
                <NavLink className={'btn btn-dark'} to={'/allSingers'}>back</NavLink>
            </Navbar>
        </div>
    )
}

export default MusicHeaderBack;