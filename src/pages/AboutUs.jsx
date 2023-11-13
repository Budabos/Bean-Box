import "bootstrap/dist/css/bootstrap.min.css";
import { Fragment } from "react";
import "./About.css";

const AboutUs = () => {
  return (
    <Fragment>
      <section className="aboutus">
        <div className="text-center">
          <h3>About Us</h3>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className=" card img-fluid rounded-start about-img"></div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="about">
                <div className="abouthead text-center">
                  <h5>Why We Rock</h5>
                </div>
                <div className="aboutparagraph">
                  <p>
                    <b>Welcome!</b>to BeanBox where passion for coffee meets
                    innovation. We are more than just a platform; we are a
                    <b>community of coffee enthusiasts</b>dedicated to exploring
                    the rich world of coffee drinks and beans. Our journey began
                    with a simple idea- to bring the joy of exceptional coffee
                    experiences to your fingertips:
                    <p className="text-center font-weight-bold text-success">
                      <br />
                      <b>Our Mission is your happiness!!</b>
                    </p>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h5 className="text-center text-success">Our Mission</h5>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <p>
                At BeanBox,<b>our mission</b> is to elevate your coffee
                experience by curating and delivering the finest ethically
                sourced beans from around the world. We are dedicated to
                providing coffee enthusiasts with a journey of flavor,
                connecting them to the stories behind each cup. Through quality,
                sustainability and a passion for craftmainship, we aim to make
                every sip, a moment of joy and exploration
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className=" card img-fluid rounded-start mission-img"></div>
            </div>
            <div>
              <h5 className="text-success text-center">Our Vision</h5>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className=" card img-fluid rounded-start vision-img"></div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <p>
                Our <b>Vision at BeanBox </b>is to become the go to destination
                for coffee lovers seeking unparalleled quality variety and a
                connection to the global coffee community. We envision a world
                where every coffee experience is an adventure, where our
                commitment to ethical practices contributes to the well-being of
                coffee growing communities enthusiasts, we strive to redefine
                the standard for exceptional coffee and inspire a culture of
                mindful and joyful brewing!
              </p>
            </div>
            <div className="text-center text-success font-italic">
              <h5>This is your One Stop Place for a life time experience!</h5>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default AboutUs;
