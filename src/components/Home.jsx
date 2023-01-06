/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect, useRef } from "react";
import "./StyleSheet.css";
const HomePage = () => {
  //Ref for Target scroll
  const scrollToRef = useRef();
  //Refs for accessing user inputs
  const name = useRef();
  const email = useRef();
  const password = useRef();
  //getting the saved signup details
  const localSignUp = localStorage.getItem("signup");
  const localPassword = localStorage.getItem("password");

  const [showHome, setShowHome] = useState(false);

  const [show, setShow] = useState(false);

  //useEffect to update the states
  useEffect(() => {
    if (localSignUp) {
      setShowHome(true);
    }
    if (localPassword) {
      setShow(true);
    }
  }, [localSignUp, localPassword]);

  // handler for user signup and save details in localstorage
  const handleSignUp = () => {
    if (name.current.value && email.current.value && password.current.value) {
      localStorage.setItem("name", name.current.value);
      localStorage.setItem("email", email.current.value);
      localStorage.setItem("password", password.current.value);
      localStorage.setItem("signup", email.current.value);
      alert("Signup done successfully");
      window.location.reload();
    }
  };

  return (
    <>
      <div>
        <div id="root">
          <div>
            <div className="navbar_container">
              <div>
                <img
                  src="/images/VooshLogo.c64bcebd.webp"
                  className="voosh_logo"
                />
              </div>
              <div></div>
            </div>
            <div className="page1_container" id="page1">
              <div className="landing_bg_container">
                <img
                  src="./images/landing_bg.da8497cd24d321282c0d.webp"
                  className="landing_bg_icon"
                />
              </div>
              <div className="page1_title_container_content">
                <div className="page1_title_container">
                  <div className="title">
                    Consolidate your restaurants' insights in one place. Unlock
                    growth.
                  </div>
                  <div className="subtitle">
                    Your one stop solution to view mission-critical data and
                    insights from all your locations in one place.
                  </div>
                  <div
                    className="button_arrow_container"
                    style={{ display: show ? "none" : "flex" }}
                  >
                    <div className="button_container_style">
                      <div
                        className="undefined button_container"
                        onClick={() => {
                          scrollToRef.current.scrollIntoView({
                            behavior: "smooth",
                          });
                        }}
                      >
                        <span
                          className="text_button"
                          style={{ display: show ? "flex" : "hidden" }}
                        >
                          Book Demo
                        </span>
                      </div>
                    </div>

                    <div className="arrow_img_container">
                      <img
                        src="./images/arrow.ff14f58c77374c33f8e8.webp"
                        className="arrow_img"
                      />
                    </div>
                  </div>
                </div>
                <div className="my_profile_container">
                  <img
                    src="./images/three_lines.cb3005e94acb8877cb80.webp"
                    className="three_lines"
                  />
                  <img
                    src="./images/my_profile.61da110e7e1e80c97356.webp"
                    className="my_profile_icon"
                  />
                </div>
                <div className="page1-outlet-container">
                  <img
                    src="./images/page1_1.cb1dbedcdc321b25fb4e.webp"
                    className="page1-outlet-icon1"
                  />
                  <img
                    src="./images/page1_2.4bfc2d124bbd2e50da2d.webp"
                    className="page1-outlet-icon2"
                  />
                  <img
                    src="./images/page1_3.1d108925b5e5156bb2d4.webp"
                    className="page1-outlet-icon3"
                  />
                  <img
                    src="./images/page1_4.a2a22e7f5e42a50552ae.webp"
                    className="page1-outlet-icon4"
                  />
                  <img
                    src="./images/page1_5.f505a37d3e86d1a571da.webp"
                    className="page1-outlet-icon5"
                  />
                  <img
                    src="./images/page1_6.2213ad7f35bd24758114.webp"
                    className="page1-outlet-icon6"
                  />
                </div>
              </div>
            </div>
            <div className="revenue-container">
              <div className="revenue-inner-container">
                <div className="revenue-title">
                  Since partnering with Voosh, restaurant partners have seen an
                  average increase of 10% in revenues
                </div>
                <div className="revenue-subtext">Along with:</div>
                <div className="revenue-states-container">
                  <div className="revenue-states-box">
                    <div className="revenue-state-value">10%</div>
                    <div className="revenue-state-subtext">
                      Increase in revenue
                    </div>
                    <div className="revenue-state-title">Better Operations</div>
                  </div>
                  <div className="revenue-states-box">
                    <div className="revenue-state-value">0.5+</div>
                    <div className="revenue-state-subtext">
                      Increase in Customer ratings
                    </div>
                    <div className="revenue-state-title">Better CX</div>
                  </div>
                  <div className="revenue-states-box">
                    <div className="revenue-state-value">5%</div>
                    <div className="revenue-state-subtext">
                      Extra payout by DD and UE
                    </div>
                    <div className="revenue-state-title">Better Financial</div>
                  </div>
                </div>
                <img
                  src="./images/revenue-up-arrow.cd2f9efe8c5ea01bc586.webp"
                  className="revenue-up-arrow"
                />
              </div>
            </div>
            <div className="outletPage_container">
              <div className="container">
                <div className="title_heading">
                  Foodservice brands lack the ability to streamline data from
                  multiple sources on one platform
                </div>
                <div className="title_subheading">
                  Different data channels do not speak to each other
                </div>
              </div>
              <div className="image_container">
                <img
                  src="./images/outlet_graphic.b3bec4452172330b0084.webp"
                  className="image_icon"
                />
              </div>
            </div>
            <div className="page2_container">
              <div className="page2-details-container">
                <div className="title">
                  Understand your business better. Optimize sales and reduce
                  costs.
                </div>
                <div className="subtext">
                  Bring all your outlets and brands into one place. Track what’s
                  working and what's not with a click.
                </div>
              </div>
              <div className="page2-features-container">
                <div className="page2-feature-box">
                  <img
                    className="page2-feature-icon"
                    src="./images/page2_icon1.bd81fbb0d7b3c7cc6c73.webp"
                  />
                  <div className="page2-feature-text">
                    Hassle free acess to Data
                  </div>
                </div>
                <div className="page2-feature-box">
                  <img
                    className="page2-feature-icon"
                    src="./images/page2_icon2.f6da4146e172e1077533.webp"
                  />
                  <div className="page2-feature-text">
                    Actionable Insights on all Reviews
                  </div>
                </div>
                <div className="page2-feature-box">
                  <img
                    className="page2-feature-icon"
                    src="./images/page2_icon3.ed022ee17fbd16103c32.webp"
                  />
                  <div className="page2-feature-text">
                    Simplified Financial Reconcilliation
                  </div>
                </div>
                <div className="page2-feature-box">
                  <img
                    className="page2-feature-icon"
                    src="./images/page2_icon4.107569a415fc529cdbac.webp"
                  />
                  <div className="page2-feature-text">
                    Higher Sales &amp; Optimized Ops
                  </div>
                </div>
              </div>
              <img
                className="page2-bg"
                src="./images/understand_business_bg.04ac8480e6e2c5b1d1c9.webp"
              />
            </div>
            <div className="page3_container">
              <div className="page3_text_container">
                <div className="page_title_container"></div>
                <div className="page_title_icon_container">
                  <img
                    src="./images/free_access.8ce7ed5e6bacd50afa8f.webp"
                    className="page_title_icon"
                  />
                </div>
                <div className="title">
                  Centralized Dashboard for all your outlets and brands
                </div>
                <div className="subtitle">
                  All your data brought together under a single dashboard.
                  Giving you 10,000 ft. view as well as granular order-level
                  data.
                </div>
              </div>
              <div className="features_img_container">
                <img
                  src="./images/Centralised_Dashboard.7fe8fbe19c9da11d90e3.webp"
                  className="features_img_icon"
                />
              </div>
            </div>
            <div className="page4_container">
              <div className="features_img_container">
                <img
                  src="./images/Financial_complexity.3d8bb64046c1ed9fa3d4.webp"
                  className="features_img_icon"
                />
              </div>
              <div className="page4_text_container">
                <div className="page_title_container"></div>
                <div className="page_title_icon_container">
                  <img
                    src="./images/serviceability_icon.0883cd4239aff4a3e82c.webp"
                    className="page_title_icon"
                  />
                </div>
                <div className="title">
                  Machine learning-powered insights into your reviews
                </div>
                <div className="subtitle">
                  Understand all your reviews across Ubereats,Doordash
                  etc.Understand what’s working and what isn’t on a store or
                  brand level.
                </div>
              </div>
            </div>
            <div className="page5_container">
              <div className="page5_text_container">
                <div className="page_title_container"></div>
                <div className="page_title_icon_container">
                  <img
                    src="./images/complexity.48c7cf70f34f2c6d17db.webp"
                    className="page_title_icon"
                  />
                </div>
                <div className="title">Get a hold of your commissions</div>
                <div className="subtitle">
                  Understand your financial data in the way you want and never
                  pay extra again.
                </div>
              </div>
              <div className="features_img_container">
                <img
                  src="./images/Performance.813486b3936d0e02ec40.webp"
                  className="features_img_icon"
                />
              </div>
            </div>
            <div className="page6_container">
              <div className="features_img_container">
                <img
                  src="./images/Serviceability.a9d8e4af015c31617b25.webp"
                  className="features_img_icon"
                />
              </div>
              <div className="page6_text_container">
                <div className="page_title_container"></div>
                <div className="page_title_icon_container">
                  <img
                    src="./images/performance_icon.104f633f5669082ca663.webp"
                    className="page_title_icon"
                  />
                </div>
                <div className="title">View store-level performance</div>
                <div className="subtitle">
                  Understand your outlets' end-to-end operations to take the
                  right steps for your business.
                </div>
              </div>
            </div>
            <div className="aboutUs_container">
              <div className="about-us-details-component">
                <div className="about-us-text-container">
                  <div className="title">ABOUT US</div>
                  <div className="subtext">
                    <span className="brand-name">Voosh</span> is a food
                    technology company aiming to empower Foodservice brands
                    using our proprietary visualization tools and data
                    science.We’re building a one stop visualization tool for
                    CXOs, operational heads or zonal managers to get business
                    insights and make real time decisions to help grow their
                    online sales.
                  </div>
                </div>
                <img
                  src="./images/about_us_bg.50f95238322901a23377.webp"
                  className="about_us_bg"
                />
              </div>
              <div className="about-us-investor">
                <div className="title">
                  We are backed by some of the best global investors:
                </div>
                <div className="brands-container">
                  <img
                    className="brand-image"
                    src="./images/investor2.c804618546b843135ba7.webp"
                  />
                  <img
                    className="brand-image"
                    src="./images/investor3.64f72a3087a651802bcb.webp"
                  />
                  <img
                    className="brand-image"
                    src="./images/investor4.9645801b796a8576ab6f.webp"
                  />
                  <img
                    className="brand-image"
                    src="./images/investor1.aca691c651a7684aec14.webp"
                  />
                  <img
                    className="brand-image"
                    src="./images/investor5.fce4c7ae3dc258341971.webp"
                  />
                </div>
              </div>
            </div>
            {showHome ? (
              <div className="page8_container" id="Waitinglist">
                <div className="page8_container_text">
                  <div className="title">
                    You're successfully registered now!
                  </div>
                </div>
                <div className="page8_text_container"></div>
                <img
                  src="./images/book_now_bg.e9f9294653918137cd78.webp"
                  className="waiting_list"
                />
              </div>
            ) : show ? (
              <div></div>
            ) : (
              <div
                className="page8_container"
                id="Waitinglist"
                ref={scrollToRef}
              >
                <div className="page8_container_text">
                  <div className="title">Book A Demo Now</div>
                </div>
                <div className="page8_text_container">
                  <div className="card_container">
                    <div className="email_container">
                      <div>
                        <div
                          className="full_width"
                          style={{ marginbottom: "5px" }}
                        >
                          <div className="input_container">
                            <div className="input_label">
                              Name <span className="compulsory_icon">*</span>
                            </div>

                            <input
                              type="text"
                              className="input_style"
                              maxLength={50}
                              placeholder="Ex. John Doe"
                              ref={name}
                            />
                          </div>
                        </div>
                        <div
                          className="full_width"
                          style={{ marginbottom: "5px" }}
                        >
                          <div className="input_container">
                            <div className="input_label">
                              Email <span className="compulsory_icon">*</span>
                            </div>
                            <input
                              className="input_style"
                              placeholder="Ex. mail@website.com"
                              ref={email}
                            />
                          </div>
                        </div>
                        <div
                          className="full_width"
                          style={{ marginbottom: "5px" }}
                        >
                          <div className="input_container">
                            <div className="input_label">
                              Password{" "}
                              <span className="compulsory_icon">*</span>
                            </div>
                            <input
                              type="password"
                              className="input_style"
                              placeholder="Minimum 8 characters"
                              minLength={8}
                              ref={password}
                            />
                          </div>
                        </div>
                        <div
                          className="full_width"
                          style={{ marginbottom: "5px" }}
                        >
                          <div className="input_container">
                            <div className="input_label">
                              Company Name{" "}
                              <span className="compulsory_icon">*</span>
                            </div>
                            <input
                              type="text"
                              className="input_style"
                              maxLength={100}
                              placeholder="Ex. XYZ PVT LTD"
                            />
                          </div>
                        </div>
                        <div
                          className="full_width"
                          style={{ marginbottom: "5px" }}
                        >
                          <div className="input_container">
                            <div className="input_label">
                              Your title{" "}
                              <span className="compulsory_icon">*</span>
                            </div>

                            <input
                              type="text"
                              className="input_style"
                              maxLength={30}
                              placeholder="Ex. Operational Head"
                            />
                          </div>
                        </div>
                        <div
                          className="button_container_style"
                          onClick={handleSignUp}
                        >
                          <span className="text_button">Book Demo</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  src="./images/book_now_bg.e9f9294653918137cd78.webp"
                  className="waiting_list"
                />
              </div>
            )}
            <div className="footer_container">
              <div className="left_container">
                <div>
                  <img
                    src="./images/VooshLogo.c64bcebd.webp"
                    className="voosh_logo"
                  />
                </div>
                <div className="description">
                  A company that is dedicated to making food a more personal
                  experience, through technology and data.
                </div>
              </div>
              <div className="right_container">
                <div className="heading">Contact</div>
                <a href="tel: +918105050640" className="subheading">
                  Call Us
                </a>
                <a href="mailto:%20harsh@voosh.in" className="subheading">
                  E-mail Us
                </a>
                <div className="social_container">
                  <a href="https://www.facebook.com/vooshindia/">
                    <img
                      src="./images/Facebook.a6cf0b1d149e660f77b1.webp"
                      className="social_icon"
                    />
                  </a>
                  <a href="https://www.instagram.com/vooshindia/?hl=en">
                    <img
                      src="./images/Instagram.4960637dc7b96bb2a893.webp"
                      className="social_icon"
                    />
                  </a>
                  <a href="https://mobile.twitter.com/vooshindia">
                    <img
                      src="./images/Twitter.4aa8602736baaaf9cf29.webp"
                      className="social_icon"
                    />
                  </a>
                  <a href="https://www.linkedin.com/authwall?trk=bf&amp;trkInfo=AQHlkYD1eo2WrQAAAYFRU7AAVX_Z3k6yMvrpaww70Wfiv3QhvYIP9T7E1VjEUqiMzNSuUur6Cm5Y9sL2f49gKFhDtLRtup0VvCzzYVGLFJsvZpGF7RYa4PiZ4-n5vWqBbCkO4bY=&amp;original_referer=&amp;sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fvooshfoods%2F">
                    <img
                      src="./images/LinkedIn.46b250e64fb2a82b9e9f.webp"
                      className="social_icon"
                    />
                  </a>
                </div>
              </div>
              <div className="signature_container">
                <img
                  src="./images/Signature.cfd001ca1ebb6fc9a004.webp"
                  className="signature_icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
