import Footer from "./small/footer";
import Header from "./small/header";
import React, { useEffect, useState } from "react";
import SearchBar from "./small/searchbar";
import { IsMobileWidth, IsTabletWidth } from "./utils";
const Advertisewithus = () => {
  const tabletWidth = IsTabletWidth();
  const mobileWidth = IsMobileWidth();
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  return (
    <>
      {isSearchBarOpen && mobileWidth ? (
        <>
          <SearchBar onGoBack={() => setIsSearchBarOpen(false)} />
        </>
      ) : (
        <>
          <Header
            hadleSarchBarOpen={() => setIsSearchBarOpen(true)}
            isSearchBarOpen={isSearchBarOpen}
          />
          <section className="advertise-with-us">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <form className="row g-3">
                    <h3 className="main-tit">Advertise us</h3>
                    <p>
                      Place your business message in front of the world! We
                      offer effective, very low cost website advertising
                      solutions that enable advertisers to place their banners
                      or text links on our site in various key locations. We can
                      also answer any technical support questions you might
                      have.
                    </p>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control form-control-custom"
                        placeholder="Full Name*"
                      />
                    </div>

                    <div className="col-md-6">
                      <input
                        type="email"
                        className="form-control form-control-custom"
                        placeholder="Email Address*"
                      />
                    </div>
                    {/* <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control form-control-custom"
                    placeholder="Phone"
                  />
                </div> */}

                    <div className="col--md-12">
                      <textarea
                        className="form-control form-control-custom txt-arr"
                        placeholder="Message"
                      ></textarea>
                    </div>
                    <div className="col-md-12 text-end">
                      <button type="submit" className="btn-form-submit">
                        Submit Details
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </>
      )}
    </>
  );
};
export default Advertisewithus;
