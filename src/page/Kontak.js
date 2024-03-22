import '../index5.css';
import Navbar from './Navbar';
function Kontak() {
    return (
        <div className="Kontak">
            <Navbar />
            <section class="contact-form">
                <h2>Hubungi Saya</h2>
                <form action="https://formsubmit.co/your-email@example.com" method="POST">
                    <div class="form-group">
                        <label for="name">Nama Lengkap</label>
                        <input type="text" name="name" id="name" placeholder="Masukkan Nama Anda" required />
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="text" name="name" id="email" placeholder="Masukkan Email Anda" required />
                    </div>
                    <div class="form-group">
                        <label for="message">Pesan</label>
                        <textarea name="message" id="message" placeholder="Masukkan Pesan Anda" required></textarea>
                    </div>
                    <button type="submit">Kirim Pesan</button>
                </form>
            </section>
        </div>
    );
}

export default Kontak;
