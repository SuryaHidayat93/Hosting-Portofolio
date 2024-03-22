import Home from './page/Home';
import Galeri from './page/Galeri';
import Portofolio from './page/Portofolio';
import Kontak from './page/Kontak';
import Biodata from './page/Biodata';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (

    <Router>
      <div className="App">
        <Routes>
          <Route path='/*' element={<Home />} />
          <Route path='/Biodata' element={<Biodata />} />
          <Route path='/Galeri' element={<Galeri />} />
          <Route path='/Portofolio' element={<Portofolio />} />
          <Route path='/Kontak' element={<Kontak />} />
        </Routes>
      </div>

    </Router>





  );
}

export default App;
