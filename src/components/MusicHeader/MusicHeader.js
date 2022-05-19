import {Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

let MusicHeader = ()=>{
    return(
        <div>
            <Navbar bg="" variant="light" className={'d-flex justify-content-center'}>
                <NavLink className={'btn btn-outline-warning'} to={'/'}>Take Me Home</NavLink>
            </Navbar>
        </div>
    )
}

export default MusicHeader;