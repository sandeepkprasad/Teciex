import React from "react";
import { Link } from "react-router-dom";
import web from "../Assests/web.svg";
import mobile from "../Assests/mobile.svg";
import domain from "../Assests/domain.svg";
import ecommerce from "../Assests/ecommerce.svg";
import digital from "../Assests/digital.svg";
import graphics from "../Assests/graphics.svg";
import erp from "../Assests/erp.svg";
import it from "../Assests/it.svg";
import billing from "../Assests/billing.svg";

const services = [
  {
    img: web,
    title: "Web Development",
    text: "We specialize in creating and optimizing high-quality, custom websites for businesses and organizations of all sizes. Building mobile-friendly and easy-to-use websites and applications for clients.",
  },
  {
    img: mobile,
    title: "Mobile App Development",
    text: "We develop high-quality, custom cross-platform mobile applications that are robust and optimized for performance, scalability, and accessibility.",
  },
  {
    img: domain,
    title: "Domain & Hosting Services",
    text: "We provide domain registration and web hosting services to individuals and organizations to enable them gain visibility in the digital space.",
  },
  {
    img: ecommerce,
    title: "Ecommerce",
    text: "E-commerce website is no longer limited to just adding shopping cart! Now developing an ideal e-commerce website seeks integrated front and back end support for numerous reasons. These include facilitating your employees to track orders, gain information about customers and easy update on every page of website.",
  },
  {
    img: digital,
    title: "Digital Marketing",
    text: "Our IT consultations service, Digital marketing involves marketing to consumers through digital channels, including websites, mobile devices, and social media platforms.",
  },
  {
    img: graphics,
    title: "Graphics Design",
    text: "Our IT consultations service provides design of different types like Brands Identity and Logo Design,Packaging Design, Web And Mobile Design, Layout and Print Design etc.",
  },
  {
    img: erp,
    title: "ERP",
    text: "Our IT consultations service provides expert guidance and support for businesses and individuals looking to optimize their technology solutions.",
  },
  {
    img: it,
    title: "IT Consultations",
    text: "Our IT consultations service provides expert guidance and support for businesses and individuals looking to optimize their technology solutions.",
  },
  {
    img: billing,
    title: "Inventory & Billing",
    text: "We help you manage inventory, create and track documents and streamline production.",
  },
];

const Service = () => {
  return (
    <section>
      <div className="container-lg py-5">
        <div className="row justify-content-center">
          <div className="col-6 col-md-6">
            <div className="heading text-center">
              <p className="fw-bold text-muted mb-0">SERVICES</p>
              <h3 className="fw-bold">Our Vision & Our Goal</h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          {services.map((service) => {
            return (
              <div className="col-10 col-md-3 mx-4 mb-3 py-3 text-center rounded shadow">
                <div className="services-card">
                  <img
                    height={200}
                    width={200}
                    className="mb-3"
                    src={service.img}
                    alt="..."
                  />
                  <div className="services-body">
                    <h5 className="fw-bold mb-3">{service.title}</h5>
                    <p className="text-muted mb-4">
                      {service.text.slice(0, 50)}...
                    </p>
                    <Link to="/services" className="btn btn-primary btn-sm">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Service;
