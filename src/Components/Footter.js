import React from "react";
import "./compCss/comman.css";

const Footter = () => {
  return (
    <div className="footer-container  container-fluid p-2">
      <div
        className=" container d-flex justify-content-around flex-wrap mt-5"
        style={{ color: "white" }}
      >
        <div className="footer">
          <h6>ABOUT</h6>
          <ul className="">
            <li>
              <a>Contact Us</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Careers</a>
            </li>

            <li>
              <a>Stories</a>
            </li>
            <li>
              <a>Wholesale</a>
            </li>
            <li>
              <a>Stories</a>
            </li>
            <li>
              <a>Corporate Information</a>
            </li>
          </ul>
        </div>
        <div className=" footer">
          <h6>ABOUT</h6>
          <ul className=" ">
            <li>
              <a>Contact Us</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Careers</a>
            </li>
            <li>
              <a>Stories</a>
            </li>

            <li>
              <a>Wholesale</a>
            </li>
            <li>
              <a>Stories</a>
            </li>
            <li>
              <a>Corporate Information</a>
            </li>
          </ul>
        </div>

        <section class="mb-4 ">
          <h6 class="cont-h6">CONTACT US</h6>

          <div class="row">
            <div class="col-md-9 mb-md-0 mb-5">
              <form
                id="contact-form"
                name="contact-form"
                action="mail.php"
                method="POST"
              >
                <div class="row">
                  <div class="col-md-6">
                    <div class="md-form mb-0">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        class="form-control"
                      />
                      <label for="name" class="">
                        Your name
                      </label>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="md-form mb-0">
                      <input
                        type="text"
                        id="email"
                        name="email"
                        class="form-control"
                      />
                      <label for="email" class="">
                        Your email
                      </label>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12">
                    <div class="md-form mb-0">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        class="form-control"
                      />
                      <label for="subject" class="">
                        Subject
                      </label>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12">
                    <div class="md-form">
                      <textarea
                        type="text"
                        id="message"
                        name="message"
                        rows="2"
                        class="form-control md-textarea"
                      ></textarea>
                      <label for="message">Your message</label>
                    </div>
                  </div>
                </div>
              </form>

              <div class="text-center text-md-left">
                <a
                  class="btn btn-primary"
                  onclick="document.getElementById('contact-form').submit();"
                >
                  Send
                </a>
              </div>
              <div class="status"></div>
            </div>

            <div class="col-md-3 text-center">
              <ul class="list-unstyled mb-0">
                <li>
                  <i class="fas fa-map-marker-alt fa-2x"></i>
                  <p>Nandurbar, CA 94126, India</p>
                </li>

                <li>
                  <i class="fas fa-phone mt-4 fa-2x"></i>
                  <p>+91 7709435361</p>
                </li>

                <li>
                  <i class="fas fa-envelope mt-4 fa-2x"></i>
                  <p>mayurbhoi200@gmail.com</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Footter;
