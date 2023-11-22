const About=()=>{
    return(
        <section class="about section" id="about">
            <h2 class="section-title">About Me</h2>

            <div class="about__container bd-grid">
                <div class="about__img">
                <img src="./assets/image/naufal.jpg" alt="" className="about__img" />
                </div>

                <div>
                    <p class="about__text">Hallo! Perkenalkan nama aku Naufal Alamsyah Ramanda bisa dipanggil Naufal atau Nopal. 
                    Saat ini aku sedang menjalani sebagai mahasiswa UPI di Bandung, 
                    jurusanku sendiri yaitu Pendidikan Ilmu Komputer angkatan 2022. Aku mempelajari IT 
                    dan mempunyai keinginan kuat untuk terus belajar dan berkembang di dunia teknologi.
                    Pengalaman aku mengajar di bidang ilmu komputer memberikan dasar yang kuat untuk memahami konsep dasar bidang ini.</p>
                    <p class="about__text2">Aku percaya bahwa pendidikan adalah kunci kesuksesan yang paling penting, 
                    itulah sebabnya aku berdedikasi untuk memperluas pengetahuan aku di bidang IT. </p>
                </div>
            </div>
        </section>
    );
}

export default About;