import { mahasiswa } from './data.js';

const daftarMahasiswa = document.getElementById("Daftar-Mahasiswa");

mahasiswa.forEach((mhs) => {

    daftarMahasiswa.innerHTML += `
        <div class="container-pengumuman">
            <article>
                <h2>${mhs.nama}</h2>
                <p>
                    NIM: ${mhs.nim}<br>
                    Fakultas: ${mhs.fakultas}<br>
                    Prodi: ${mhs.prodi}<br>
                    Nilai: ${mhs.nilai}
                </p>
            </article>
        </div>
    `;

});