import React from 'react'

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
      </section>
    </div>
  )
}

export default InfoAcara
