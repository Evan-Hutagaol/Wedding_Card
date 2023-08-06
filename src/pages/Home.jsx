import React from "react";

function Home() {
  return (
    <div>
      <section id="home" class="home">
        <div class="comtainer">
          <div class="row justify-content-center">
            <div className="col-md-8 text-center">
              <h2>Acara Pernikahan</h2>
              <h3>
                Diselenggarakan pada 31 Agustus 2023 di Hotel Tribrata, Jakarta
              </h3>
              <p>
                Oleh karena itu, dengan segala hormat, kami bermaksud untuk
                mengundang Bapak/Ibu, Saudara/i, untuk hadir pada acara
                pernikahan kami.
              </p>
            </div>
          </div>

          <div className="row couple">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-8 text-end">
                  <h3>Evan Hutagaol</h3>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Corrupti beatae aspernatur dolorum dolor porro modi libero!
                    Earum, quam repellat sunt iure commodi id at sapiente
                    tempore similique! Cupiditate, tempore quasi.
                  </p>
                  <p>
                    Putra dari Bpk. Binsar <br /> dan <br /> Ibu Mesri
                  </p>
                </div>
                <div className="col-4">
                  <img
                    src="/assets/images/Evan2.png"
                    alt="Evan"
                    class="img-responsive rounded-circle"
                  />
                </div>
              </div>
            </div>

            <span class="heart">
              <i class="bi bi-heart-fill"></i>
            </span>

            <div className="col-lg-6">
              <div className="row">
                <div className="col-4">
                  <img
                    src="/assets/images/Lisa2.png"
                    alt="Lisa"
                    class="img-responsive rounded-circle"
                  />
                </div>
                <div className="col-8">
                  <h3>Lisa Manoban</h3>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Corrupti beatae aspernatur dolorum dolor porro modi libero!
                    Earum, quam repellat sunt iure commodi id at sapiente
                    tempore similique! Cupiditate, tempore quasi.
                  </p>
                  <p>
                    Putra dari Bpk. Pranpriya <br /> dan <br /> Ibu Chitthip
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="info" class="info">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-10 text-center">
              <h2>Informasi Acara</h2>
              <p class="alamat">
                Alamat: Gedung The Tribrata Darmawangsa Jakarta, <br />
                Jl. Darmawangsa III No.2, Kec. Kby. Baru, Kota Jakarta Selatan,
                DKI Jakarta
              </p>
              <a
                href="https://goo.gl/maps/m3XTeJYJggHJ7KGv6"
                target="_blank"
                class="btn btn-light btn-sm"
              >
                Klik untuk membuka peta
              </a>
              <p>
                Diharapkan untuk tidak salah alamat dan tanggal. Manakala tiba
                di tujuan namun tidak ada tanda-tanda sedang dilangsungkan
                pernikahan, boleh jadi Anda salah jadwal, atau salah tempat.
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default Home;
