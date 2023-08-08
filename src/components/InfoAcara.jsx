import React from "react";

function InfoAcara() {
  return (
    <div>
      <section id="info" class="info">
        <div className="container">
          <div className="row justify-content-center">
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
                class="btn btn-light btn-sm my-3"
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

        <div className="row justify-content-center">
          <div className="col-md-4 col-8 mb-4">
            <div class="card text-center">
              <div class="card-header">Martuppol</div>
              <div class="card-body">
                <div className="row justify-content-center">
                  <div className="col-md-6">
                    <i class="bi bi-clock d-block"></i>
                    <span>09.00 - 11.00</span>
                  </div>
                  <div className="col-md-6">
                    <i class="bi bi-calendar4-week d-block"></i>
                    <span>Jumat, 1 September 2023</span>
                  </div>
                </div>
              </div>

              <div class="card-footer">
                Saat acara martuppol dimohon kepada seluruh tamu tetap kondusif
                pada saat acara berlangsung
              </div>
            </div>
          </div>
          <div className="col-md-4 col-8">
            <div class="card text-center">
              <div class="card-header">Pesta Pernikahan</div>
              <div class="card-body">
                <div className="row justify-content-center">
                  <div className="col-md-6">
                    <i class="bi bi-clock d-block"></i>
                    <span>12.00 - Selesai</span>
                  </div>
                  <div className="col-md-6">
                    <i class="bi bi-calendar4-week d-block"></i>
                    <span>Sabtu, 2 September 2023</span>
                  </div>
                </div>
              </div>

              <div class="card-footer">
                Saat acara pestra pernikahan dimohon kepada seluruh tamu tetap
                kondusif pada saat acara berlangsung
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default InfoAcara;
