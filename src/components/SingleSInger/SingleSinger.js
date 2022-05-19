import MusicHeaderBack from "../MusicHeaderBack/MusicHeaderBack";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

let SingleSinger = () => {
    let {id} = useParams();

    let [singer, setSinger] = useState([]);
    console.log(singer)
    useEffect(() => {
        fetch(`http://localhost:5000/artists/${id}`)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setSinger(data)
            })
            .catch((err) => {
                console.log(err)
            });

    }, []);


    let renderAlbum = () => {
        if (singer.albums) {
            return singer.albums.map((album) => {
                return (
                    <div>
                        <img className="card-img-top myImgcontainer mt-3" src={`/images/albums/${album.cover}.jpg`}
                             alt={"Card image cap"}/>
                    </div>
                )
            })
        } else {
            return (
                <div>
                    no data
                </div>
            )
        }
    }


    let renderSinger = () => {
        if (singer.id) {
            return (
                <div>
                    <div className={'details'}>
                        <div className={'d-flex flex-column text-center mt-5'}>
                            <h1 className={'font-weight-bold'}>{singer.name}</h1>
                            <p>{singer.bio}</p>
                        </div>
                        <div className={'d-flex justify-content-center'}>
                            <img className="card-img-top imageSinglePage mt-3"
                                 src={`/images/covers/${singer.cover}.jpg`}
                                 alt="Card image cap"/>
                        </div>
                    </div>

                </div>

            )
        } else {
            return (
                <div>
                    no data
                </div>
            )
        }
    }

    console.log(id)
    return (
        <div>

            <div className={'all-singers-bk'}>
                <MusicHeaderBack/>
                <div>
                    {renderSinger()}
                    <h1 className={'text-center fontAlbum'}>Albums</h1>
                    <div className={'d-flex flex-row justify-content-center '}>

                        <div className={'imageContainer'}>
                            {renderAlbum()}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default SingleSinger