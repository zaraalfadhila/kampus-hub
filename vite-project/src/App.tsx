import { useState } from "react"
import "./App.css"

const mahasiswa = [
    {
        nama: "Zarabiyaturifa Alfadhila",
        nim: "20252210180",
        fakultas: "Teknik",
        prodi: "Informatika",
        nilai: "90"
    },
    {
        nama: "Muhammad Brilliyan Ghoutsi",
        nim: "20252210175",
        fakultas: "Teknik",
        prodi: "Informatika",
        nilai: "90"
    },
    {
        nama: "Moch. Andika Riski Maulana",
        nim: "20252210173",
        fakultas: "Teknik",
        prodi: "Informatika",
        nilai: "90"
    },
    {
        nama: "Arjun Samudera Ahli Fikri",
        nim: "20252210170",
        fakultas: "Teknik",
        prodi: "Informatika",
        nilai: "90"
    },
    {
        nama: "Andhika wahyu Setiawan",
        nim: "20252210166",
        fakultas: "Teknik",
        prodi: "Informatika",
        nilai: "90"
    }
]

const pengumuman = [
    {
        judul: "Pengumuman Ujian Tengah Semester",
        isi: "Ujian Tengah Semester akan dilaksanakan sesuai jadwal yang telah ditentukan."
    },
    {
        judul: "Pengumuman Libur Perkuliahan",
        isi: "Perkuliahan diliburkan pada tanggal yang telah ditetapkan oleh universitas."
    },
    {
        judul: "Pengumuman Pembayaran UKT",
        isi: "Mahasiswa diharapkan melakukan pembayaran UKT sesuai dengan jadwal yang telah ditentukan."
    }
]

function App() {
    const [halaman, setHalaman] = useState("pengumuman")
    const [keyword, setKeyword] = useState("")
    const [mahasiswaTerpilih, setMahasiswaTerpilih] =
        useState<typeof mahasiswa[0] | null>(null)

    const hasil = mahasiswa.filter((mhs) =>
        mhs.nama.toLowerCase().includes(keyword.toLowerCase())
    )

    return (
        <div className="container">

            <header>
                <span className="label">KAMPUSHUB</span>

                <h1>KampusHub</h1>

                <p>
                    Pusat informasi mahasiswa Universitas Wahidiyah
                </p>
            </header>

            <nav>
                <span className="nav-label">NAV</span>

                <button
                    className={halaman === "pengumuman" ? "active" : ""}
                    onClick={() => {
                        setHalaman("pengumuman")
                        setMahasiswaTerpilih(null)
                        setKeyword("")
                    }}
                >
                    Pengumuman
                </button>

                <button
                    className={halaman === "tentang" ? "active" : ""}
                    onClick={() => setHalaman("tentang")}
                >
                    Tentang
                </button>

                <button
                    className={halaman === "mahasiswa" ? "active" : ""}
                    onClick={() => setHalaman("mahasiswa")}
                >
                    Mahasiswa
                </button>

            </nav>

            {halaman === "pengumuman" && (
                <main>

                    <span className="label">
                        INFORMASI KAMPUS
                    </span>

                    <h2>
                        Pengumuman Terbaru
                    </h2>

                    <p>
                        Informasi terbaru seputar kegiatan akademik
                        dan administrasi mahasiswa.
                    </p>

                    <div id="daftarPengumuman">

                        {pengumuman.map((item, index) => (
                            <div
                                className="container-pengumuman"
                                key={index}
                            >
                                <article>

                                    <h2>
                                        {index + 1}. {item.judul}
                                    </h2>

                                    <p>
                                        {item.isi}
                                    </p>

                                </article>
                            </div>
                        ))}

                    </div>

                </main>
            )}

            {halaman === "mahasiswa" && (
                <>
                    <main>

                        <span className="label">
                            DATA AKADEMIK
                        </span>

                        <h2>
                            Data Mahasiswa
                        </h2>

                        <p>
                            Cari nama mahasiswa untuk melihat informasi
                            akademik.
                        </p>

                        <form
                            id="formPencarian"
                            onSubmit={(event) => {
                                event.preventDefault()

                                if (hasil.length === 1) {
                                    setMahasiswaTerpilih(hasil[0])
                                }
                            }}
                        >

                            <label htmlFor="q">
                                Nama Mahasiswa
                            </label>

                            <input
                                type="text"
                                id="q"
                                value={keyword}
                                placeholder="Ketik nama mahasiswa..."
                                autoComplete="off"
                                onChange={(event) => {
                                    setKeyword(event.target.value)
                                    setMahasiswaTerpilih(null)
                                }}
                            />

                            <button type="submit">
                                Cari
                            </button>

                            {keyword.length > 0 && (
                                <div
                                    id="saran"
                                    style={{ display: "block" }}
                                >

                                    {hasil.length > 0 ? (

                                        hasil.map((mhs) => (
                                            <div
                                                className="saran-item"
                                                key={mhs.nim}
                                                onClick={() => {
                                                    setMahasiswaTerpilih(mhs)
                                                    setKeyword(mhs.nama)
                                                }}
                                            >
                                                {mhs.nama}
                                            </div>
                                        ))

                                    ) : (

                                        <div className="saran-item">
                                            Mahasiswa tidak ditemukan
                                        </div>

                                    )}

                                </div>
                            )}

                        </form>

                    </main>

                    <section id="Daftar-Mahasiswa">

                        <span className="label">
                            HASIL PENCARIAN
                        </span>

                        {mahasiswaTerpilih && (
                            <div className="container-pengumuman">

                                <article>

                                    <h2>
                                        {mahasiswaTerpilih.nama}
                                    </h2>

                                    <p>
                                        NIM: {mahasiswaTerpilih.nim}
                                        <br />

                                        Fakultas: {mahasiswaTerpilih.fakultas}
                                        <br />

                                        Prodi: {mahasiswaTerpilih.prodi}
                                        <br />

                                        Nilai: {mahasiswaTerpilih.nilai}
                                    </p>

                                </article>

                            </div>
                        )}

                    </section>
                </>
            )}

            {halaman === "tentang" && (
                <main>

                    <span className="label">
                        TENTANG
                    </span>

                    <h2>
                        Tentang KampusHub
                    </h2>

                    <p>
                        Halaman ini masih dalam tahap pengembangan.
                    </p>

                </main>
            )}

            <footer>

                <span className="label">
                    KAMPUSHUB
                </span>

                <p>
                    Pemrograman Web · 2026 · Universitas Wahidiyah
                </p>

            </footer>

        </div>
    )
}

export default App