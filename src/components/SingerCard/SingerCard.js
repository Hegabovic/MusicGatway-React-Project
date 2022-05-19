import {NavLink} from "react-router-dom";

let SingerCard = ({singer}) => {
    console.log(singer)
    return (
        <div className="my-card mt-4">
            <div className="card-content">
                <div className="img-place">
                    <div id="card-img">
                        <img className="card-img-top myimgclass"  src={`/images/covers/${singer.cover}.jpg`} alt="Card image cap"/>
                    </div>
                </div>
                <div className="card-text d-flex flex-column justify-content-center">
                    <h5 className={'text-center'}>{singer.name}</h5>
                    <NavLink to={`/allSingers/${singer.id}`} className="btn">Details</NavLink>
                </div>
            </div>
        </div>
    )
}
export default SingerCard;