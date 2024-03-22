import Navbar from "./Navbar";
import '../index2.css';

function Biodata() {
    return (
        <div className="Biodata">
            <Navbar />
            <section>
                <div class="biodata-container">
                    <h2>Biodata</h2>
                    <div class="biodata-item">
                        <span class="biodata-label">Nama Lengkap:</span>
                        <span class="biodata-value">Surya Hidayat</span>
                    </div>
                    <div class="biodata-item">
                        <span class="biodata-label">Tempat, Tanggal Lahir:</span>
                        <span class="biodata-value">Sibuak 18 Oktober 2003</span>
                    </div>
                    <div class="biodata-item">
                        <span class="biodata-label">Pekerjaan:</span>
                        <span class="biodata-value">Mahasiswa</span>
                    </div>
                    <div class="biodata-item">
                        <span class="biodata-label">Riwayat Pendidikan:</span>
                        <span class="biodata-value">
                            Teknik Informatika<br />
                            UIN Sultan Syarif Kasim
                        </span>
                    </div>
                    <div class="biodata-item">
                        <span class="biodata-label">Skill:</span>
                        <span class="biodata-value">Web development, Kerja Sama tim</span>
                    </div>
                    <div class="img1">
                        <img src="images/background2.png" alt="" />
                    </div>
                </div>



            </section>
        </div>
    );
}

export default Biodata;
