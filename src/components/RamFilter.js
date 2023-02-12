import React, { useState, useEffect } from "react";
import Footer from "./small/footer";
import Header from "./small/header";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import clsx from "clsx";
import { formatAmount, IsMobileWidth, IsTabletWidth } from "./utils";
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

  let localSelectedCurrency = localStorage.getItem("selectedCurrency");

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
    navigate(`/${slug}`, { replace: true });
  };

  const handleImgClick = () => {
    navigate("/trending_products", { replace: true });
  };

  const getItemPrice = (price) => {
    let selectedCurrency =
      currency.data &&
      currency.data?.currency &&
      currency.data?.currency.find(
        (data) => data?.country === localSelectedCurrency
      );
    if (selectedCurrency) {
      return (parseInt(price / selectedCurrency?.price));
    } else {
      return price;
    }
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

                <p className="ads-text">ADS</p>
                <Adsense
                  client="ca-pub-2933454440337038"
                  slot="6702463586"
                  style={mobileWidth ? { width: 300, height: 100, display: "block", margin: "0 auto" } : {
                    width: 728, height: 90, display: "block", margin: "0 auto"
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
              Users.map((item, index) => {

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
                        src={`https://softliee.com/softlee/public/storage/product/${item.image}`}
                        alt={item.name}
                        onClick={() => handleImgClick(item.slug)}
                      />
                      <h3
                        className={clsx(
                          "",
                          mobileWidth && "single-mob-tits",
                          !mobileWidth && "single-mob-tit"
                        )}
                        onClick={() => handleImgClick(item.slug)}
                      >
                        {item.name}
                      </h3>
                      <Link
                        to={`/compare-mobile-phone/${item?.slug}/change_product`}
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
                          {item.ram}
                          {" / "} {item?.storage} | {item.battery}
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
                          {localSelectedCurrency === "USD" ? "$ " : "RS "}
                          {item.orignal_price
                            ? formatAmount(getItemPrice(item.orignal_price))
                            : "N/A"}
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

                <p className="ads-text">ADS</p>
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
