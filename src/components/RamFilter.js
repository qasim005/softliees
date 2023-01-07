import React, { useState, useEffect } from "react";
import Footer from "./small/footer";
import Header from "./small/header";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import clsx from "clsx";
import { IsMobileWidth, IsTabletWidth } from "./utils";
import { useSelector } from "react-redux";
import { Adsense } from "@ctrl/react-adsense";


const RamFilter = () => {
  const [Users, setUsers] = useState([]);
  const mobileWidth = IsMobileWidth();
  const tabletWidth = IsTabletWidth();
  const { filters, brands, filterMobilesResponse, advertisement, currency } = useSelector(
    (selectSate) => selectSate.app
  );
  const location = useLocation()
  // console.log(location.pathname.split("/"));
  const path = location.pathname.split("/");
  const navigate = useNavigate()


  const getUser = async () => {

    try {
      await fetch(
        `https://softliee.com/softlee/public/api/ram_products/${path[2]}`
      ).then(async (response) => {
        await response.json().then((res) => {
          console.log(res.ram_product);
          setUsers(res.ram_product);
        });
      });
      //   setLoading(false);
    } catch (error) {
      alert("api get faile");
    }
  };
  const handleImgClick1 = (slug) => {
    navigate(`/product/${slug}`, { replace: true });
  };


  useEffect(() => {
    getUser();
  }, []);
  useEffect(() => {
    console.log(Users);
  }, [Users]);

  return (
    <div>
      <section className="ram-filter">
        <Header />

        <section className="ads-section" style={{ marginTop: "50px", marginBottom: "30px" }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">

                <Adsense
                  client="ca-pub-2933454440337038"
                  slot="6702463586"
                  style={mobileWidth ? { width: 300, height: 100, display: "block", margin: "0 auto" } : {
                    width: 720, height: 90, display: "block", margin: "0 auto"
                  }}
                  format=""
                />
              </div>


            </div>
          </div>
        </section>


        <div className="container ram-filter-content">
          <div className="row px-2">
            <div className="section-head-ram">
              <h1>Ram Mobile</h1>
            </div>
          </div>
          <div className="row px-2">
            {Users.length > 0 && Users ? (
              Users.map((items, index) => {

                return (
                  <div className="col-sm-3 col-6 bg-sm-danger px-2">
                    <div
                      className={clsx(
                        "",
                        mobileWidth && "single-m-wraps",
                        !mobileWidth && "single-m-wrap"
                      )}
                      style={{ maxHeight: "400px" }}
                    >
                      <img
                        className="single-mob-img"
                        //   src="\assets\images\mobiles\image1.png"
                        src={`https://softliee.com/softlee/public/storage/product/${items.image}`}
                        alt={items.alt_imag}
                        onClick={() => handleImgClick1(items.slug)}
                      />
                      <h3
                        className={clsx(
                          "",
                          mobileWidth && "single-mob-tits",
                          !mobileWidth && "single-mob-tit"
                        )} onClick={() => handleImgClick1(items.slug)}>{items.name}</h3>

                      <Link
                        to={`/compare-mobile-phone/${items?.slug}/change_product`}
                        className="compair-btn-with-ico"
                      >
                        <h4>Compare</h4>
                        <AddIcon />
                      </Link>

                      <div
                        className={clsx(
                          "mt-3",
                          tabletWidth && "deetails-wrap",
                          !tabletWidth && "details-wrap"
                        )}
                      >
                        <h4
                          className={clsx(
                            " p-1",
                            tabletWidth && "deetails",
                            !tabletWidth && "details"
                          )}
                        >
                          {items.ram_storage1} GB | {items.battery}
                        </h4>
                      </div>
                      <div
                        className={clsx(
                          "flex align-items-center justify-content-center",
                          mobileWidth && "price-icon-wraps",
                          !mobileWidth && "price-icon-wrap"
                        )}
                      >
                        <h3
                          className={clsx(
                            "",
                            mobileWidth && "single-mob-tits",
                            !mobileWidth && "single-mob-tit"
                          )}
                        >
                          RS {items.orignal_price}
                        </h3>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <></>
            )}

          </div>
        </div>

        <section className="ads-section" style={{ marginBottom: "50px" }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">

                <Adsense
                  client="ca-pub-2933454440337038"
                  slot="6702463586"
                  style={mobileWidth ? { width: 300, height: 250, display: "block", margin: "0 auto" } : {
                    width: 970, height: 250, display: "block", margin: "0 auto"
                  }}
                  format=""
                />
              </div>


            </div>
          </div>
        </section>

        <Footer />
      </section >
    </div >
  );
};

export default RamFilter;
