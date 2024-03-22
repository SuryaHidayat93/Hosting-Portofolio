import Navbar from "../page/Navbar";

function SectionHome() {
    return (
        <section class="home">
            <Navbar />
            <div class="home-content">

                <h1>Hallo, saya Surya Hidayat</h1>
                <h3>Web developer</h3>
                <p>
                    Saya adalah salah satu mahasiswa teknik Informatika di Universitas Islam Negeri Sultan Syarif Kasim
                </p>
                <div class="btn-box">
                    <a href="#" class="btn">Hire Me</a>
                    <a href="#" class="btn">Let's talk</a>
                </div>
            </div>
            <div class="home-sci">
                <a href=""><i class="bx bxl-facebook"></i></a>
                <a href="https://www.instagram.com/surya_hidayat93/"><i class="bx bxl-instagram"></i></a>
                <a href="https://www.linkedin.com/in/surya-hidayat-b11a0b214/"><i class="bx bxl-linkedin"></i></a>
            </div>
            <div class="img">
                <img src="images/background.png" alt="Surya Hidayat (replace with a descriptive alt text)" />
                <span class="bubble">
                    <svg weight="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#FF6600" d="M57.3,-49.4C67.5,-32.9,64.4,-9.4,56.3,7.6C48.2,24.6,35.2,35.3,19.3,44.7C3.4,54.1,-15.2,62.2,-34.4,58.1C-53.6,54,-73.2,37.6,-74.5,20.3C-75.8,3.1,-58.8,-15.1,-43.3,-32.8C-27.8,-50.6,-13.9,-68,4.8,-71.8C23.5,-75.7,47.1,-66,57.3,-49.4Z" transform="translate(100 100)" />
                    </svg>
                </span>
            </div>


        </section>



    );
}

export default SectionHome;