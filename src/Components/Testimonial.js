import React from "react";

const Testimonial = () => {
  return (
    <section>
      <div className="container-lg py-5">
        <div className="row justify-content-center">
          <div className="col-6 col-md-6">
            <div className="heading text-center">
              <p className="fw-bold text-muted mb-0">TESTIMONIALS</p>
              <h3 className="fw-bold">What Clients Say About Us</h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-8 colmd-6">
            <div
              id="carouselExampleAutoplaying"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="2000">
                  <div className="text">
                    <p className="fw-bold">
                      <i>
                        "They have designed a highly creative and attractive
                        website for us. The look and feel of website is really
                        awesome.We would be more than happy to recommend Teciex
                        Solutions to anyone looking for professional web
                        designing services at cost effective prices."
                      </i>
                    </p>
                    <p className="text-muted mb-0">Amit Kumar</p>
                    <p className="fw-bold mb-0">GenTop India Pvt. Ltd.</p>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <div className="text">
                    <p className="fw-bold">
                      <i>
                        "I just wanted to thank you for the excellent job you
                        have done on our website. The service was incredible and
                        responsive. We were treated as the valued customer,
                        affordable price compared to the others website company.
                        Cheers!!"
                      </i>
                    </p>
                    <p className="text-muted mb-0">Frederick SavioEmmanual</p>
                    <p className="fw-bold mb-0">Joshua Constructions</p>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <div className="text">
                    <p className="fw-bold">
                      <i>
                        "Very Good Professional Web Design and Development
                        Company with Supportive & Helpful attitude towards their
                        clients. We have been receiving professional advices
                        from them throughout the project and not forgetting the
                        website design."
                      </i>
                    </p>
                    <p className="text-muted mb-0">Shiva Kumar</p>
                    <p className="fw-bold mb-0">www.globalinteriorsindia.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
