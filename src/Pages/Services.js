import React, { useEffect } from "react";
import webImg from "../Assests/web-services.svg";
import mobileImg from "../Assests/mobile-services.svg";
import hostingImg from "../Assests/hosting-services.svg";
import ecommerceImg from "../Assests/ecommerce-services.svg";
import digitalImg from "../Assests/digital-services.svg";
import graphicsImg from "../Assests/graphics-services.svg";
import erpImg from "../Assests/erp-services.svg";
import itImg from "../Assests/it-services.svg";
import aboutImg from "../Assests/about-img.png";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section>
      <div className="container-lg py-5 d-none d-sm-block">
        <div className="about mb-5">
          <h3 className="fw-bold">Our Services</h3>
        </div>
        <div className="container-lg mb-5">
          <div className="about-img text-center">
            <img width="75%" src={aboutImg} alt="..." />
          </div>
        </div>
        <div className="row d-flex justify-content-between border rounded py-3 mb-4">
          <div className="col-6 col-md-6">
            <div className="about-text">
              <p className="text-muted fw-bold">WEB DEVELOPMENT</p>
              <p className="mb-0">
                We specialize in creating and optimizing high-quality, custom
                websites for businesses and organizations of all sizes. Building
                mobile-friendly and easy-to-use websites and applications for
                clients.
              </p>
            </div>
          </div>
          <div className="col-4 col-md-4">
            <div className="about-image my-5">
              <img height={250} width="100%" src={webImg} alt="..." />
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-between border rounded py-3 mb-4">
          <div className="col-6 col-md-6">
            <div className="about-text">
              <p className="text-muted fw-bold">MOBILE APP DEVELOPMENT</p>
              <p className="mb-0">
                We develop high-quality, custom cross-platform mobile
                applications that are robust and optimized for performance,
                scalability, and accessibility.
              </p>
            </div>
          </div>
          <div className="col-4 col-md-4 order-first">
            <div className="about-image my-5">
              <img height={250} width="100%" src={mobileImg} alt="..." />
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-between border rounded py-3 mb-4">
          <div className="col-6 col-md-6">
            <div className="about-text">
              <p className="text-muted fw-bold">DOMAIN & HOSTING SERVICES</p>
              <p className="mb-0">
                We provide domain registration and web hosting services to
                individuals and organizations to enable them gain visibility in
                the digital space.
              </p>
            </div>
          </div>
          <div className="col-4 col-md-4">
            <div className="about-image my-5">
              <img height={250} width="100%" src={hostingImg} alt="..." />
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-between border rounded py-3 mb-4">
          <div className="col-6 col-md-6">
            <div className="about-text">
              <p className="text-muted fw-bold">E-COMMERCE</p>
              <p className="mb-0">
                E-commerce website is no longer limited to just adding shopping
                cart! Now developing an ideal e-commerce website seeks
                integrated front and back end support for numerous reasons.
                These include facilitating your employees to track orders, gain
                information about customers and easy update on every page of
                website.
              </p>
            </div>
          </div>
          <div className="col-4 col-md-4 order-first">
            <div className="about-image my-5">
              <img height={250} width="100%" src={ecommerceImg} alt="..." />
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-between border rounded py-3 mb-4">
          <div className="col-6 col-md-6">
            <div className="about-text">
              <p className="text-muted fw-bold">DIGITAL MARKETING</p>
              <p className="mb-0">
                Our IT consultations service, Digital marketing involves
                marketing to consumers through digital channels, including
                websites, mobile devices, and social media platforms.
              </p>
            </div>
          </div>
          <div className="col-4 col-md-4">
            <div className="about-image my-5">
              <img height={250} width="100%" src={digitalImg} alt="..." />
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-between border rounded py-3 mb-4">
          <div className="col-6 col-md-6">
            <div className="about-text">
              <p className="text-muted fw-bold">GRAPHICS DESIGN</p>
              <p className="mb-0">
                Our IT consultations service provides design of different types
                like Brands Identity and Logo Design,Packaging Design, Web And
                Mobile Design, Layout and Print Design etc.
              </p>
            </div>
          </div>
          <div className="col-4 col-md-4 order-first">
            <div className="about-image my-5">
              <img height={250} width="100%" src={graphicsImg} alt="..." />
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-between border rounded py-3 mb-4">
          <div className="col-6 col-md-6">
            <div className="about-text">
              <p className="text-muted fw-bold">ERP</p>
              <p className="mb-0">
                Our IT consultations service provides expert guidance and
                support for businesses and individuals looking to optimize their
                technology solutions.
              </p>
            </div>
          </div>
          <div className="col-4 col-md-4">
            <div className="about-image my-5">
              <img height={250} width="100%" src={erpImg} alt="..." />
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-between border rounded py-3 mb-4">
          <div className="col-6 col-md-6">
            <div className="about-text">
              <p className="text-muted fw-bold">IT CONSULTATIONS</p>
              <p className="mb-0">
                Our IT consultations service provides expert guidance and
                support for businesses and individuals looking to optimize their
                technology solutions.
              </p>
            </div>
          </div>
          <div className="col-4 col-md-4 order-first">
            <div className="about-image my-5">
              <img height={250} width="100%" src={itImg} alt="..." />
            </div>
          </div>
        </div>
      </div>

      <div className="container-lg py-5 d-block d-sm-none">
        <div className="about mb-5">
          <h3 className="fw-bold">Our Services</h3>
        </div>
        <div className="container-lg mb-5">
          <div className="about-img text-center">
            <img width="75%" src={aboutImg} alt="..." />
          </div>
        </div>
        <div className="row d-flex justify-content-between border rounded py-3 mb-4">
          <div className="col-12 col-md-6">
            <div className="about-text">
              <p className="text-muted fw-bold">WEB DEVELOPMENT</p>
              <p className="mb-0">
                We specialize in creating and optimizing high-quality, custom
                websites for businesses and organizations of all sizes. Building
                mobile-friendly and easy-to-use websites and applications for
                clients.
              </p>
            </div>
          </div>
          <div className="col-4 col-md-4 d-none">
            <div className="about-image">
              <img height={250} width="100%" src={webImg} alt="..." />
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-between border rounded py-3 mb-4">
          <div className="col-12 col-md-6">
            <div className="about-text">
              <p className="text-muted fw-bold">MOBILE APP DEVELOPMENT</p>
              <p className="mb-0">
                We develop high-quality, custom cross-platform mobile
                applications that are robust and optimized for performance,
                scalability, and accessibility.
              </p>
            </div>
          </div>
          <div className="col-4 col-md-4 order-first d-none">
            <div className="about-image my-5">
              <img height={250} width="100%" src={mobileImg} alt="..." />
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-between border rounded py-3 mb-4">
          <div className="col-12 col-md-6">
            <div className="about-text">
              <p className="text-muted fw-bold">DOMAIN & HOSTING SERVICES</p>
              <p className="mb-0">
                We provide domain registration and web hosting services to
                individuals and organizations to enable them gain visibility in
                the digital space.
              </p>
            </div>
          </div>
          <div className="col-4 col-md-4 d-none">
            <div className="about-image my-5">
              <img height={250} width="100%" src={hostingImg} alt="..." />
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-between border rounded py-3 mb-4">
          <div className="col-12 col-md-6">
            <div className="about-text">
              <p className="text-muted fw-bold">E-COMMERCE</p>
              <p className="mb-0">
                E-commerce website is no longer limited to just adding shopping
                cart! Now developing an ideal e-commerce website seeks
                integrated front and back end support for numerous reasons.
                These include facilitating your employees to track orders, gain
                information about customers and easy update on every page of
                website.
              </p>
            </div>
          </div>
          <div className="col-4 col-md-4 order-first d-none">
            <div className="about-image my-5">
              <img height={250} width="100%" src={ecommerceImg} alt="..." />
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-between border rounded py-3 mb-4">
          <div className="col-12 col-md-6">
            <div className="about-text">
              <p className="text-muted fw-bold">DIGITAL MARKETING</p>
              <p className="mb-0">
                Our IT consultations service, Digital marketing involves
                marketing to consumers through digital channels, including
                websites, mobile devices, and social media platforms.
              </p>
            </div>
          </div>
          <div className="col-4 col-md-4 d-none">
            <div className="about-image my-5">
              <img height={250} width="100%" src={digitalImg} alt="..." />
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-between border rounded py-3 mb-4">
          <div className="col-12 col-md-6">
            <div className="about-text">
              <p className="text-muted fw-bold">GRAPHICS DESIGN</p>
              <p className="mb-0">
                Our IT consultations service provides design of different types
                like Brands Identity and Logo Design,Packaging Design, Web And
                Mobile Design, Layout and Print Design etc.
              </p>
            </div>
          </div>
          <div className="col-4 col-md-4 order-first d-none">
            <div className="about-image my-5">
              <img height={250} width="100%" src={graphicsImg} alt="..." />
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-between border rounded py-3 mb-4">
          <div className="col-12 col-md-6">
            <div className="about-text">
              <p className="text-muted fw-bold">ERP</p>
              <p className="mb-0">
                Our IT consultations service provides expert guidance and
                support for businesses and individuals looking to optimize their
                technology solutions.
              </p>
            </div>
          </div>
          <div className="col-4 col-md-4 d-none">
            <div className="about-image my-5">
              <img height={250} width="100%" src={erpImg} alt="..." />
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-between border rounded py-3 mb-4">
          <div className="col-12 col-md-6">
            <div className="about-text">
              <p className="text-muted fw-bold">IT CONSULTATIONS</p>
              <p className="mb-0">
                Our IT consultations service provides expert guidance and
                support for businesses and individuals looking to optimize their
                technology solutions.
              </p>
            </div>
          </div>
          <div className="col-4 col-md-4 order-first d-none">
            <div className="about-image my-5">
              <img height={250} width="100%" src={itImg} alt="..." />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
