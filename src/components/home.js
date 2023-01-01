import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Sliders from "./slider";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AddIcon from "@mui/icons-material/Add";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import { Link, useNavigate } from "react-router-dom";
import Popularcomp from "./small/popularcomp";
import ChatIcon from "@mui/icons-material/Chat";
import Header from "./small/header";
import Footer from "./small/footer";
import PopularMobiles from "./small/popularmobiles";
import TechNewsDialog from "./technews";
import { formatAmount, IsMobileWidth, IsTabletWidth } from "./utils";
import SearchBar from "./small/searchbar";
import { useDispatch, useSelector } from "react-redux";
import {
  getBrands,
  getLatestProducts,
  getBlogs,
  priceWiseProducts,
  sendNewsLatter,
} from "../redux/actions/app.actions";
import clsx from "clsx";
import CircularProgress from "@mui/material/CircularProgress";
import { isValidMessage } from "./validator";
import { Helmet } from "react-helmet";

const Home = () => {
  const [rangePrices, setRangePrices] = useState([1000, 500000]);
  const [isTechNewsDialogOpen, setIsTechNewsDialogOpen] = useState(false);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const mobileWidth = IsMobileWidth();
  const tabletWidth = IsTabletWidth();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    brands,
    latestProducts,
    blogs,
    advertisement,
    priceWiseProductsResponse,
    sendNewsLatterResponse,
    currency,
  } = useSelector((selectSate) => selectSate.app);
  const [ram, setRam] = useState(0);
  const handleImgClick = (slug) => {
    navigate(`/product/${slug}`, { replace: true });
  };

  const handleTeachNews = (e) => {
    e.preventDefault();
    setIsTechNewsDialogOpen(true);
  };

  useEffect(() => {
    if (!brands?.data && !brands?.loading) {
      dispatch(getBrands());
    }
  }, []);

  useEffect(() => {
    if (!latestProducts?.data && !latestProducts?.loading) {
      dispatch(getLatestProducts());
    }
  }, []);

  useEffect(() => {
    if (!blogs?.data && !blogs?.loading) {
      dispatch(getBlogs());
    }
  }, []);

  let localSelectedCurrency = localStorage.getItem("selectedCurrency");

  const [state, setState] = useState({
    email: "",
  });

  const handleChange = (name, value) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  console.log(isValidMessage(state));

  const handleSentMessage = (e) => {
    e.preventDefault();
    let form = new FormData();
    form.append("news_latter_email", state.email);
    dispatch(sendNewsLatter(form));
  };

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

  // useEffect(() => {
  //   if (!currency?.data && !currency?.loading) {
  //     dispatch(getCurrency());
  //   }
  // }, []);

  // const getPrice = (amount) => {
  //     if(currency?.data && currency?.data?.currency){
  //       let data = currency.data.currency.find((data) => data.name === "USD")
  //       return (data?.price * amount)
  //     }
  //     else {
  //       return amount
  //     }
  // };

  return (
    <>
      {isSearchBarOpen && mobileWidth ? (
        <>
          <SearchBar onGoBack={() => setIsSearchBarOpen(false)} />
          {/* <Header setIsSearchBarOpen={setIsSearchBarOpen} isSearchBarOpen={isSearchBarOpen} /> */}
        </>
      ) : (
        <>
          <Header
            hadleSarchBarOpen={() => setIsSearchBarOpen(true)}
            isSearchBarOpen={isSearchBarOpen}
          />

          <section className="sliders">
            <div className="container">
              <Sliders />
            </div>
          </section>
          <section className="filters">
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <h2 className="main-tit">Lets Find A Mobile Phone</h2>
                  <div className="range-button">
                    <div className="range-area flex">
                      <Slider
                        range
                        className="text-red-400"
                        min={1000}
                        max={500000}
                        defaultValue={[rangePrices[0], rangePrices[1]]}
                        allowCross={false}
                        step={0.01}
                        onChange={(test) => {
                          setRangePrices(test);
                        }}
                      />
                    </div>
                    <div className="range-values-wrap">
                      <div className="row align-items-center">
                        <div className="col-sm-5 col-6">
                          <div className="flex  align-items-center">
                            <h4 className="rs-sign">RS</h4>
                            <input
                              onChange={(e) =>
                                setRangePrices([e.target.value, rangePrices[1]])
                              }
                              className="min-range-price bg-transparent"
                              type="text"
                              placeholder="10000"
                              value={rangePrices[0]}
                            />
                          </div>
                        </div>
                        {mobileWidth ? (
                          ""
                        ) : (
                          <div className="col-sm-2 col-2">
                            <h4 className="to-sign">TO</h4>
                          </div>
                        )}
                        <div className="col-sm-5 col-6">
                          <div className="flex align-items-center">
                            {" "}
                            <h4 className="rs-sign">RS</h4>
                            <input
                              onChange={(e) =>
                                setRangePrices([rangePrices[0], e.target.value])
                              }
                              className="min-range-price bg-transparent"
                              type="text"
                              placeholder="350,000"
                              value={rangePrices[1]}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <button
                          className="find-mobil"
                          onClick={() => {
                            navigate(
                              `/filterbrand/trending-mobiles?from=${rangePrices[0]}&to=${rangePrices[1]}&ram=${ram}`
                            );
                          }}
                        >
                          Find mobile
                        </button>
                      </div>
                    </div>
                    <div
                      className={
                        mobileWidth ? "mt-3 row" : tabletWidth ? "mt-3" : "row"
                      }
                    >
                      <div className="col-sm-12">
                        <h3 className="ram-tit" style={{ marginTop: 10 }}>
                          RAM
                        </h3>

                        <div className="ram-wrapping" style={{ marginTop: 32 }}>
                          <h3
                            className={`ram-single ${ram === 2 && "ram-single-selected"
                              }`}
                            onClick={() => {
                              setRam(2)
                              navigate(`/ram/2`)
                            }}
                          >
                            2 GB
                          </h3>
                          <h3
                            className={`ram-single ${ram === 3 && "ram-single-selected"
                              }`}
                            onClick={() => {
                              setRam(3)
                              navigate(`/ram/3`)
                            }}
                          >
                            3 GB
                          </h3>
                          <h3
                            className={`ram-single ${ram === 4 && "ram-single-selected"
                              }`}
                            onClick={() => {
                              setRam(4)
                              navigate(`/ram/4`)
                            }}
                          >
                            4 GB
                          </h3>
                          <h3
                            className={`ram-single ${ram === 6 && "ram-single-selected"
                              }`}
                            onClick={() => {
                              setRam(6)
                              navigate(`/ram/6`)
                            }}
                          >
                            6 GB
                          </h3>
                          <h3
                            className={`ram-single ${ram === 8 && "ram-single-selected"
                              }`}
                            onClick={() => {
                              setRam(8)
                              navigate(`/ram/8`)
                            }}
                          >
                            8 GB
                          </h3>
                          <h3
                            className={`ram-single ${ram === 12 && "ram-single-selected"
                              }`}
                            onClick={() => {
                              setRam(12)
                              navigate(`/ram/12`)
                            }}
                          >
                            12 GB
                          </h3>
                          <h3
                            onClick={() => {
                              setRam(16)
                              navigate(`/ram/16`)
                            }}
                            style={{ marginRight: "0" }}
                            className={`ram-single ${ram === 16 && "ram-single-selected"
                              }`}
                          >
                            16 GB
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 hide-on-mobile">
                  <h2 className="main-tit">By Brand</h2>
                  {brands?.loading ? (
                    <div className="w-100 d-flex justify-content-center align-items-center h-40vh">
                      <CircularProgress />
                    </div>
                  ) : brands?.error ? (
                    brands?.error
                  ) : (
                    brands?.data?.brands &&
                    brands?.data?.brands?.length > 0 && (
                      <div className="row first-row-br-wrap">
                        {brands?.data?.brands.map((data, index) => (
                          <Link
                            to={`/filterbrand/${data?.slug}`}
                            className="col-sm-4 brand-col"
                            key={data?.id}
                          >
                            <div className="brand-wrapp ">
                              <h2 className="brand-tit">{data?.brand_name}</h2>
                              <ChevronRightIcon className="chv-right-ico" />
                            </div>
                          </Link>
                        ))}
                        <div
                          className="col-sm-4 brand-col"
                          onClick={handleTeachNews}
                        ></div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </section>

          <section style={{ marginTop: "30px" }}>
            <div className="container">
              <div className="row">
                {advertisement.data?.ads &&
                  (!mobileWidth ? (
                    <img
                      className="single-mob-imgss"
                      src={`https://softliee.com/softlee/public/storage/adds/${advertisement.data?.ads.find(
                        (data) => data?.size === "728 × 90 px"
                      )?.image
                        }`}
                      alt=""
                    />
                  ) : (
                    <img
                      className="single-mob-imgss-mobile"
                      src={`https://softliee.com/softlee/public/storage/adds/${advertisement.data?.ads.find(
                        (data) => data?.size === "300 × 250 px"
                      )?.image
                        }`}
                      alt=""
                    />
                  ))}
              </div>
            </div>
          </section>

          <section className="latest-phones popular-mobiles">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-7">
                  <h2 className="main-tit">Latest Mobiles</h2>
                </div>
                {mobileWidth ? (
                  <div className="col-sm-6 col-5 ">
                    <div className="flex align-items-end justify-content-end">
                      {" "}
                      <a className="seemoree" href="#">
                        See More <ChevronRightIcon className="btn-chev" />
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="col-sm-6 col-5">
                    <div className="flex align-items-end justify-content-end">
                      {" "}
                      <a className="seemoree" href="#">
                        See More <ChevronRightIcon className="btn-chev" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="container">
              <div className="row px-2">
                {latestProducts?.data?.products?.data &&
                  latestProducts?.data?.products?.data.map((item, _index) => {
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
                  })}
              </div>
            </div>
          </section>
          {/* <section className="">
            <div className="container">
              <div className="row">
                <div className="whitesd-bg">
                  <h3 className="addasd-title">Ad Placement</h3>
                </div>
              </div>
            </div>
          </section> */}
          <section style={{ marginTop: "30px" }}>
            <div className="container">
              <div className="row">
                {advertisement.data?.ads &&
                  (!mobileWidth ? (
                    <img
                      className="single-mob-imgss"
                      src={`https://softliee.com/softlee/public/storage/adds/${advertisement.data?.ads.find(
                        (data) => data?.size === "728 × 90 px"
                      )?.image
                        }`}
                      alt=""
                    />
                  ) : (
                    <img
                      className="single-mob-imgss-mobile"
                      src={`https://softliee.com/softlee/public/storage/adds/${advertisement.data?.ads.find(
                        (data) => data?.size === "300 × 250 px"
                      )?.image
                        }`}
                      alt=""
                    />
                  ))}
              </div>
            </div>
          </section>

          {/* <PopularMobiles title="Popular Mobiles" /> */}
          <Popularcomp />

          {/* tech news section */}
          {/* {tabletWidth ? (
            <section className="technews">
              <div className="container">
                <div className="row">
                  <div className="col-sm-6 col-7">
                    <h2 className="main-tit">Tech News</h2>
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
                <div className="row">
                  {blogs?.data?.blogs &&
                    blogs?.data?.blogs.map((data) => (
                      <div className="col-sm-6">
                        <div className="single-post-item-wrap">
                          <div className="for-flexing-single-post">
                            <img
                              className="posts-img"
                              src={`https://softliee.com/softlee/public/storage/blogs/${data?.image}`}
                            />
                            <div className="right-side-info">
                              <h3 className="posts-title-m">{data?.title}</h3>
                              <a href="#" className="readmorebtn">
                                Read More
                              </a>
                             
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </section>
          ) : (
            <section className="technews">
              <div className="container">
                <div className="row">
                  <div className="col-sm-6 col-7">
                    <h2 className="main-tit">Tech News</h2>
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
                <div className="row">
                  {blogs?.data?.blogs &&
                    blogs?.data?.blogs.map((data) => (
                      <div className="col-sm-6">
                        <div className="single-post-item-wrap">
                          <div className="for-flexing-single-post">
                            <img
                              className="post-img"
                              src={`https://softliee.com/softlee/public/storage/blogs/${data?.image}`}
                              alt=""
                            />
                            <div className="right-side-info">
                              <h3 className="post-title-m">{data?.title}</h3>
                              <Link to={`/details/${data?.slug}`}>
                                <a href="#" className="readmorebtn">
                                  Read More
                                </a>
                              </Link>
                             
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </section>
          )} */}
          {/* newsletter section */}
          {mobileWidth ? (
            <section className="newsletter">
              <div className="container">
                <div className="row">
                  <h2 className="newslter-tit">Subscribe to Newsletter</h2>
                  <div className="flex justify-content-center newsletter-inputs">
                    <input
                      value={state.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="subscribes"
                      placeholder="Enter your Email Address"
                      type="text"
                    />
                    <button
                      className="subscribe"
                      disabled={sendNewsLatterResponse?.loading}
                      onClick={handleSentMessage}
                    >
                      {sendNewsLatterResponse?.loading
                        ? "loading..."
                        : "Subscribe"}
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="text-center  "
                style={{
                  marginTop: "10px",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                {sendNewsLatterResponse?.data ? (
                  <div className="" style={{ color: "#4958EF" }}>
                    {sendNewsLatterResponse?.data?.message}
                  </div>
                ) : null}
              </div>
            </section>
          ) : (
            <section className="newsletter">
              <div className="container">
                <div className="row">
                  <h2 className="newslter-tit">Subscribe to Newsletter</h2>
                  <div className="flex justify-content-center newsletter-inputs">
                    <input
                      value={state.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="subscribes"
                      placeholder="Enter your Email Address"
                      type="text"
                    />
                    <button
                      className="subscribe"
                      disabled={sendNewsLatterResponse?.loading}
                      onClick={handleSentMessage}
                    >
                      {sendNewsLatterResponse?.loading
                        ? "loading..."
                        : "Subscribe"}
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="text-center  "
                style={{
                  marginTop: "26px",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                {sendNewsLatterResponse?.data ? (
                  <div className="" style={{ color: "#4958EF" }}>
                    {sendNewsLatterResponse?.data?.message}
                  </div>
                ) : null}
              </div>
            </section>
          )}
          <Footer />
          <TechNewsDialog
            brands={brands}
            dialogIsOpen={isTechNewsDialogOpen}
            handleClose={() => setIsTechNewsDialogOpen(false)}
          />
        </>
      )}
    </>
  );
};
export default Home;
