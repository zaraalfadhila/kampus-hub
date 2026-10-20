import { useEffect, useState } from "react";

type BeritaItem = {
  id: number;
  title: string;
  body: string;
};

function Berita() {
  const [berita, setBerita] = useState<BeritaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Gagal mengambil data berita");
        }
        return response.json();
      })
      .then((data: BeritaItem[]) => {
        setBerita(data.slice(0, 10));
      })
      .catch(() => {
        setError("Gagal memuat berita. Periksa koneksi internet.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <main>
      <span className="label">INFORMASI TERKINI</span>
      <h2>Berita Terbaru</h2>
      <p>Berita yang diambil dari REST API.</p>

      {loading && <p>Memuat berita...</p>}
      {error && <p>{error}</p>}

      {!loading && !error && (
        <div id="daftarPengumuman">
          {berita.map((item, index) => (
            <div className="container-pengumuman" key={item.id}>
              <article>
                <h2>
                  {index + 1}. {item.title}
                </h2>
                <p>{item.body}</p>
              </article>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default Berita;
