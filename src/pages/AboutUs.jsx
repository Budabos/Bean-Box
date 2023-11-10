import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Fragment } from "react";

const AboutUs = () => {
  return (
    <Fragment>
      <section className="aboutus">
        <div>About Us</div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="about-img"></div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="about">
                <div className="abouthead">
                  <h3>Why We Rock</h3>
                </div>
                <div className="aboutparagraph">
                  <p>
                    Your happiness is our greatest pursuit. With us you get to
                    enjoy natural cofee in ways beyond imagination: We deliver
                    to your taste:
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default AboutUs;
