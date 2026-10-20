type PengumumanItem = {
  judul: string;
  isi: string;
};

const pengumuman: PengumumanItem[] = [
  {
    judul: "Pengumuman Ujian Tengah Semester",
    isi: "Ujian Tengah Semester akan dilaksanakan sesuai jadwal yang telah ditentukan.",
  },
  {
    judul: "Pengumuman Libur Perkuliahan",
    isi: "Perkuliahan diliburkan pada tanggal yang telah ditetapkan oleh universitas.",
  },
  {
    judul: "Pengumuman Pembayaran UKT",
    isi: "Mahasiswa diharapkan melakukan pembayaran UKT sesuai dengan jadwal yang telah ditentukan.",
  },
];

function Pengumuman() {
  return (
    <main>
      <span className="label">INFORMASI KAMPUS</span>
      <h2>Pengumuman Terbaru</h2>

      <p>
        Informasi terbaru seputar kegiatan akademik
        dan administrasi mahasiswa.
      </p>

      <div id="daftarPengumuman">
        {pengumuman.map((item, index) => (
          <div className="container-pengumuman" key={index}>
            <article>
              <h2>
                {index + 1}. {item.judul}
              </h2>
              <p>{item.isi}</p>
            </article>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Pengumuman;
