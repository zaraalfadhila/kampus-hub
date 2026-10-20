import { useState } from "react";

type MahasiswaItem = {
  nama: string;
  nim: string;
  fakultas: string;
  prodi: string;
  nilai: string;
};

const mahasiswa: MahasiswaItem[] = [
  {
    nama: "Zarabiyaturifa Alfadhila",
    nim: "20252210180",
    fakultas: "Teknik",
    prodi: "Informatika",
    nilai: "90",
  },
  {
    nama: "Muhammad Brilliyan Ghoutsi",
    nim: "20252210175",
    fakultas: "Teknik",
    prodi: "Informatika",
    nilai: "90",
  },
  {
    nama: "Moch. Andika Riski Maulana",
    nim: "20252210173",
    fakultas: "Teknik",
    prodi: "Informatika",
    nilai: "90",
  },
  {
    nama: "Arjun Samudera Ahli Fikri",
    nim: "20252210170",
    fakultas: "Teknik",
    prodi: "Informatika",
    nilai: "90",
  },
  {
    nama: "Andhika wahyu Setiawan",
    nim: "20252210166",
    fakultas: "Teknik",
    prodi: "Informatika",
    nilai: "90",
  },
];

function Mahasiswa() {
  const [keyword, setKeyword] = useState("");
  const [terpilih, setTerpilih] =
    useState<MahasiswaItem | null>(null);

  const hasil = mahasiswa.filter((mhs) =>
    mhs.nama.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <main>
      <span className="label">DATA AKADEMIK</span>
      <h2>Data Mahasiswa</h2>
      <p>Cari nama mahasiswa untuk melihat informasi akademik.</p>

      <form
        id="formPencarian"
        onSubmit={(event) => {
          event.preventDefault();
          setTerpilih(hasil.length === 1 ? hasil[0] : null);
        }}
      >
        <label htmlFor="q">Nama Mahasiswa</label>

        <div className="search-row">
          <input
            id="q"
            type="text"
            value={keyword}
            placeholder="Ketik nama mahasiswa..."
            autoComplete="off"
            onChange={(event) => {
              setKeyword(event.target.value);
              setTerpilih(null);
            }}
          />

          <button type="submit">Cari</button>
        </div>
      </form>

      {keyword && (
        <div id="saran">
          {hasil.length > 0 ? (
            hasil.map((mhs) => (
              <div
                className="saran-item"
                key={mhs.nim}
                onClick={() => {
                  setTerpilih(mhs);
                  setKeyword(mhs.nama);
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

      <section id="Daftar-Mahasiswa">
        <span className="label">HASIL PENCARIAN</span>

        {terpilih && (
          <div className="container-pengumuman">
            <article>
              <h2>{terpilih.nama}</h2>
              <p>
                <strong>NIM:</strong> {terpilih.nim}
                <br />
                <strong>Fakultas:</strong> {terpilih.fakultas}
                <br />
                <strong>Prodi:</strong> {terpilih.prodi}
                <br />
                <strong>Nilai:</strong> {terpilih.nilai}
              </p>
            </article>
          </div>
        )}
      </section>
    </main>
  );
}

export default Mahasiswa;
