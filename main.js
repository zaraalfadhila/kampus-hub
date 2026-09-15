import { mahasiswa, pengumuman } from './data.js';

const daftarPengumuman = document.getElementById("daftarPengumuman");

if (daftarPengumuman) {
    pengumuman.forEach(function (item, index) {
        daftarPengumuman.innerHTML += `
            <div class="container-pengumuman">
                <article>
                    <h2>${index + 1}. ${item.judul}</h2>
                    <p>${item.isi}</p>
                </article>
            </div>
        `;
    });
}

const formPencarian = document.getElementById("formPencarian");

if (formPencarian) {
    const inputPencarian = document.getElementById("q");
    const saran = document.getElementById("saran");
    const daftarMahasiswa = document.getElementById("Daftar-Mahasiswa");

    let mahasiswaTerpilih = null;

    inputPencarian.addEventListener("focus", function () {
        tampilkanSaran(mahasiswa);
    });

    inputPencarian.addEventListener("input", function () {
        const keyword = inputPencarian.value.toLowerCase().trim();

        const hasil = mahasiswa.filter((mhs) =>
            mhs.nama.toLowerCase().includes(keyword)
        );

        mahasiswaTerpilih = null;

        tampilkanSaran(hasil);
    });

    function tampilkanSaran(data) {
        saran.innerHTML = "";

        if (data.length === 0) {
            saran.innerHTML = `
                <div class="saran-item">
                    Mahasiswa tidak ditemukan
                </div>
            `;

            saran.style.display = "block";
            return;
        }

        data.forEach((mhs) => {
            const item = document.createElement("div");

            item.classList.add("saran-item");
            item.textContent = mhs.nama;

            item.addEventListener("click", function () {
                mahasiswaTerpilih = mhs;
                inputPencarian.value = mhs.nama;
                saran.style.display = "none";
            });

            saran.appendChild(item);
        });

        saran.style.display = "block";
    }

    formPencarian.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!mahasiswaTerpilih) {
            alert("Silakan pilih nama mahasiswa terlebih dahulu.");
            return;
        }

        tampilkanDetail(mahasiswaTerpilih);
    });

    function tampilkanDetail(mhs) {
        daftarMahasiswa.innerHTML = `
            <span class="label">DATA MAHASISWA</span>

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
    }

    document.addEventListener("click", function (event) {
        if (!event.target.closest("#formPencarian")) {
            saran.style.display = "none";
        }
    });
}