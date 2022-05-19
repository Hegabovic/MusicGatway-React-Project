import MusicHeader from "../MusicHeader/MusicHeader";
import SingerCard from "../SingerCard/SingerCard";
import {useEffect, useState} from "react";

let AllSingers = () => {
    let [singers, setSingers] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/artists`)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setSingers(data)
            })
            .catch((err) => {
                console.log(err)
            });
    }, []);

    let renderSingers = () => {
        if (singers.length > 0) {
            return singers.map((singer,index) => {
                return (
                    <SingerCard key={index} singer={singer}/>
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


    return (
        <div className={'all-singers-bk'}>
            <MusicHeader/>
            <div className={'d-flex justify-content-center'}>
            {renderSingers()}
            </div>
        </div>
    )
}


export default AllSingers;