import '../index4.css';
import Navbar from './Navbar';
function Portofolio() {
    return (
        <div className="Portofolio">
            <Navbar />
            <div class="portofolio">
                <img src="images/portofolio-1.png" alt="" />
                <div class="overlay">
                    <h3>Aplikasi Stratch Library</h3>
                    <p>Sebuah Projek UAS PEMHIR berkelompok yang beranggotakan 4 orang</p>
                    <a href="https://github.com/SuryaHidayat93/Scratch-library">Pelajari Lebih Lanjut</a>
                </div>
            </div>
            <div class="portofolio2">
                <img src="images/portofolio-1a.png" alt="" />
                <div class="overlay2">
                    <h3>Menu Cafe</h3>
                    <p>Projek dirisendiri</p>
                    <a href="https://github.com/SuryaHidayat93/wangy-cofee">Pelajari Lebih Lanjut</a>
                </div>
            </div>
        </div>
    );
}

export default Portofolio;
