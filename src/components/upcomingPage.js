import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Link, useNavigate } from "react-router-dom";
import { IsMobileWidth, IsTabletWidth, formatAmount } from "./utils";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { getUpcomingProducts } from "../redux/actions/app.actions";
import Slider from "react-slick";
import Footer from "./small/footer";
import Header from "./small/header";
import SearchBar from "../components/small/searchbar";
import { CircularProgress } from "@mui/material";
import { Helmet } from "react-helmet";
import { Adsense } from "@ctrl/react-adsense";

const UpcomingPage = (props) => {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const mobileWidth = IsMobileWidth();
  const tabletWidth = IsTabletWidth();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { upcomingProducts, advertisement, currency } = useSelector(
    (selectSate) => selectSate.app
  );
  const handleImgClick = (slug) => {
    navigate(`/${slug}`, { replace: true });
  };

  useEffect(() => {
    if (!upcomingProducts?.data && !upcomingProducts?.loading) {
      dispatch(getUpcomingProducts());
    }
  }, []);

  let localSelectedCurrency = localStorage.getItem("selectedCurrency");


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


  return (
    <>

      <Helmet>
        <title>Top Upcoming Mobile Phones in 2023 - Softliee.com</title>
        <meta
          name="description"
          content="Latest Softliee Upcoming Mobile Phones in 2023 · Samsung, Nokia, Oppo, Apple, Infinix, realme and much more"
        />
      </Helmet>

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
          <section className="ads-section" style={{ marginTop: "50px" }}>
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

          <section className="popular-mobiles">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-7">
                  <h2 className="main-tit">Upcoming Mobiles</h2>
                </div>
                <div className="col-sm-6 col-5">
                  <div className="flex align-items-end justify-content-end">
                    {" "}
                    <a className="seemoree" href="#">
                      See More <ChevronRightIcon className="btn-chev" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row px-2">
                {upcomingProducts.loading ? (
                  <div className="w-100 d-flex justify-content-center align-items-center h-40vh">
                    <CircularProgress />
                  </div>
                ) : (
                  upcomingProducts?.data?.$upcoming_products?.length > 0 &&
                  upcomingProducts?.data?.$upcoming_products.map((data) => (
                    <div className="col-sm-3 col-6 px-2">
                      <div
                        className="single-m-wrap"
                        style={{ minHeight: "350px", maxHeight: "350px" }}
                      >
                        <img
                          className="single-mob-img"
                          src={`https://softliee.com/softlee/public/storage/product/${data?.image}`}
                          alt={data?.name}
                          onClick={() => handleImgClick(data?.slug)}
                        />
                        <h3 className="single-mob-tit">{data?.name}</h3>
                        {/* <div className="compair-btn-with-ico">
                          <h4>Compare</h4>
                          <AddIcon />
                        </div> */}

                        {/* <div
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
                        </div> */}

                        <div className="price-icon-wrap flex align-items-center justify-content-center">
                          <h3 className="single-mob-tit">
                            {localSelectedCurrency === "USD" ? "$ " : "RS "}
                            {data.orignal_price
                              ? formatAmount(getItemPrice(data.orignal_price))
                              : "N/A"}
                          </h3>

                          {/* <RemoveRedEyeIcon /> */}
                        </div>
                        <div className="flex align-items-center justify-content-center">
                          <Link
                            class="view_more_link"
                            to={`/mobiles/${data?.slug}`}
                          >
                            View More
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </section>

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
        </>
      )}
    </>
  );
};
export default UpcomingPage;
