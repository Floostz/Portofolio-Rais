import { Component } from 'solid-js';
import profileImage from '/assets/fawwaz.jpg'
const About: Component = () => {
  return (
    <div class="about-container">
      <h2>Tentang Saya</h2>
      <div class="profile">
        <div class="profile-image">
          <img src={profileImage} alt="Foto Profil" class="image" />
        </div>
        <div class="profile-text">
          <p>
            Halo! Saya <strong>Muhammad Faawwaz Aziz Nur Rais</strong>, seorang developer yang penuh semangat dan berdedikasi
            dengan dasar pengetahuan yang kuat dalam berbagai teknologi yang saya peroleh melalui pendidikan di bidang Rekayasa Perangkat Lunak (PPLG).
          </p>
          <p>
            Sepanjang perjalanan akademik saya, saya telah mengerjakan berbagai proyek, terus mengembangkan keterampilan
            dan mencari tantangan baru untuk diatasi. Saya sangat tertarik dalam menciptakan pengalaman pengguna yang imersif
            melalui teknologi web mutakhir dan pengembangan 3D.
          </p>
          <p>
            Saya antusias untuk berkontribusi dalam proyek-proyek inovatif, terus belajar hal-hal baru, dan berkembang secara profesional
            di dunia teknologi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;