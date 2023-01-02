import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Link, useNavigate } from "react-router-dom";
import { IsMobileWidth, IsTabletWidth, formatAmount } from "../utils";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { getPopularProducts } from "../../redux/actions/app.actions";
import Slider from "react-slick";
import Footer from "../small/footer";
import Header from "../small/header";
import SearchBar from "./searchbar";
import { CircularProgress } from "@mui/material";
import { Helmet } from "react-helmet";

const PopularMobiles = (props) => {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const mobileWidth = IsMobileWidth();
  const tabletWidth = IsTabletWidth();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { popularProducts, advertisement, currency } = useSelector(
    (selectSate) => selectSate.app
  );
  const handleImgClick = (slug) => {
    navigate(`/product/${slug}`, { replace: true });
  };

  useEffect(() => {
    if (!popularProducts?.data && !popularProducts?.loading) {
      dispatch(getPopularProducts());
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
      return (price / selectedCurrency?.price).toFixed(2);
    } else {
      return price;
    }
  };

  return (
    <>
      <Helmet>
        <title>Best Popular Mobile Phone 2023 in Pakistan - Softliee</title>
        <meta
          name="description"
          content="Mobile Prices in Pakistan 2023 and Find New & Latest mobile Market Rates in ... Mobile brands like Samsung, Apple, Vivo, Tecno, Oppo, Infinix, and other top ..."
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
          <section style={{ marginTop: "30px" }}>
            <div className="container">
              <div className="row">
                {advertisement.data?.ads &&
                  advertisement.data?.ads[0] &&
                  advertisement.data?.ads[0]?.image && (
                    <img
                      className="single-mob-imgss"
                      src={`https://softliee.com/softlee/public/storage/adds/${advertisement.data?.ads[0]?.image}`}
                      alt=""
                    />
                  )}
              </div>
            </div>
          </section>
          <section className="popular-mobiles">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-7">
                  <h2 className="main-tit">Popular Mobiles</h2>
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
                {popularProducts.loading ? (
                  <div className="w-100 d-flex justify-content-center align-items-center h-40vh">
                    <CircularProgress />
                  </div>
                ) : (
                  popularProducts?.data?.$popular_products?.data &&
                  popularProducts?.data?.$popular_products?.data.map(
                    (item, index) => {
                      return (
                        <div className="col-sm-3 col-6 px-2">
                          <div
                            className="single-m-wrap"
                            style={{ minHeight: "400px", maxHeight: "400px" }}
                          >
                            <img
                              className="single-mob-img"
                              src={`https://softliee.com/softlee/public/storage/product/${item.image}`}
                              alt={item.name}
                              onClick={() => handleImgClick(item.slug)}
                            />
                            <h3 className="single-mob-tit">{item.name}</h3>
                            <div className="compair-btn-with-ico">
                              <h4>Compare</h4>
                              <AddIcon />
                            </div>

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

                            <div className="price-icon-wrap flex align-items-center justify-content-center">
                              <h3 className="single-mob-tit">
                                {localSelectedCurrency === "USD" ? "$ " : "RS "}
                                {item.orignal_price
                                  ? formatAmount(
                                    getItemPrice(item.orignal_price)
                                  )
                                  : "N/A"}
                              </h3>
                              <RemoveRedEyeIcon />
                            </div>
                          </div>
                        </div>
                      );
                    }
                  )
                )}
              </div>
            </div>
          </section>
          <Footer />
        </>
      )}
    </>
  );
};
export default PopularMobiles;
