import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MusicHome from "./components/musicHome/MusicHome";
import AllSingers from "./components/allSingers/AllSingers";

let App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MusicHome/>}/>
                <Route path="/allSingers" element={<AllSingers/>}/>
            </Routes>
        </BrowserRouter>


    )
}

export default App;