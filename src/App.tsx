import { Routes, Route } from "react-router-dom";
//import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';


import Main from "./views/main";


function App() {
    return (
		<Routes>
        	<Route path="/" element={<Main/>}></Route>
			<Route path="/portfolio-website" element={<Main/>}></Route>
        </Routes>
	);
};

export default App;