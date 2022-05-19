import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MusicHome from "./components/musicHome/MusicHome";
import AllSingers from "./components/allSingers/AllSingers";
import SingleSinger from "./components/SingleSInger/SingleSinger";

let App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MusicHome/>}/>
                <Route path="/allSingers" element={<AllSingers/>}/>
                <Route path="/allSingers/:id" element={<SingleSinger/>}/>
            </Routes>
        </BrowserRouter>


    )
}

export default App;