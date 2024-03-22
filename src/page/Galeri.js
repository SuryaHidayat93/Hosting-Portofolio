import Navbar from "./Navbar";
import '../index3.css';

function Galeri() {
    return (
        <div className="Galeri">
            <Navbar />
            <div class="bubble">
                <svg weight="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#FF6600" d="M21.2,-31C30.2,-17.6,42.3,-13.6,52.1,-2.6C62,8.5,69.6,26.5,66,43C62.3,59.5,47.4,74.5,28.9,82.5C10.4,90.6,-11.7,91.7,-23.1,80.3C-34.5,68.8,-35.3,44.8,-34.1,28.5C-32.9,12.3,-29.8,3.8,-31.5,-8.9C-33.2,-21.5,-39.7,-38.3,-35.3,-52.5C-30.8,-66.8,-15.4,-78.4,-4.7,-72.8C6.1,-67.2,12.1,-44.4,21.2,-31Z" transform="translate(100 100)" />
                </svg>
            </div>
            <div class="gallery">
                <div class="gallery-item">
                    <img src="images/foto1.PNG" alt="" />
                </div>
                <div class="gallery-item">
                    <img src="images/foto2.PNG" alt="" />
                </div>
                <div class="gallery-item">
                    <img src="images/foto3.PNG" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Galeri;
