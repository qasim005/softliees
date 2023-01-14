import { Link, useNavigate } from "react-router-dom";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { Icon } from "@iconify/react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/Dropdown";
import "./headermobile.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useEffect, useState } from "react";
import NotifyDropdown from "./notifydropdown";
import TechNewsDialog from "../technews";
import SearchDialog from "./searchDialog";
import { Backdrop, ClickAwayListener } from "@mui/material";
import { IsMobileWidth, IsTabletWidth } from "../utils";
import CountryPopup from "./countrypopup";
import { useDispatch, useSelector } from "react-redux";
import {
  logout,
  getCurrency,
  getSearchProduct,
  getNotification,
  getBrands,
} from "../../redux/actions/app.actions";
import { formatAmount } from "../utils";

const Header = (props) => {
  const { isSearchBarOpen } = props;
  const [show, setShow] = useState(false);
  const [showS, setShowS] = useState(false);
  const [ControlBrands, setControlBrands] = useState(false);
  const [isTechNewsDialogOpen, setIsTechNewsDialogOpen] = useState(false);
  const [isSearchDialogOpen, setIsSearchDialogOpen] = useState(false);
  const [search, setSearch] = useState();
  const [countryPopupOpen, setCountryPopupOpen] = useState(true);
  const [selectedValue, setSelectedValue] = useState("");
  let navigate = useNavigate();
  const tabletWidth = IsTabletWidth();
  const mobileWidth = IsMobileWidth();
  const { logoutResponse, currency, notification, brands } = useSelector(
    (selectSate) => selectSate.app
  );
  const [allNotifications, setAllNotifications] = useState([]);
  const handleImgClick = (slug, type) => {
    navigate(`/${type}/${slug}`, { replace: true });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseS = () => setShowS(false);
  const handleShowS = () => setShowS(true);

  const handleTeachNews = (e) => {
    e.preventDefault();
    setIsTechNewsDialogOpen(true);
  };

  const handleBlurForSearchDialog = () => {
    setIsSearchDialogOpen(false);
  };

  const handleCountryPopupClose = (value) => {
    setCountryPopupOpen(false);
    setSelectedValue(value);
  };

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (logoutResponse.data) {
      localStorage.removeItem("softliUserData");
      navigate("/login");
    }
  }, [logoutResponse.data]);

  useEffect(() => {
    if (!currency?.data && !currency?.loading) {
      dispatch(getCurrency());
    }
  }, []);

  const handleSearch = () => {
    setIsSearchDialogOpen(true);
    dispatch(getSearchProduct({ search: search }));
    navigate("/searchresult")
  };

  useEffect(() => {
    if (!notification?.data && !notification?.loading) {
      dispatch(getNotification());
    }
  }, []);

  useEffect(() => {
    if (!brands?.data && !brands?.loading) {
      dispatch(getBrands());
    }
  }, []);
  let localSelectedCurrency = localStorage.getItem("selectedCurrency");

  useEffect(() => {
    if (notification?.data) {
      let allNotifications = [];
      notification?.data?.latest_products.map((data) => {
        allNotifications.push({
          ...data,
          latestProduct: true,
        });
      });

      setAllNotifications(allNotifications);
    }
  }, [notification]);

  const handleSearchChange = (e) => {
    // if(e !== ""){
    setIsSearchDialogOpen(true);
    dispatch(getSearchProduct({ search: e }));
    // }
    setSearch(e);
  };

  const handleCurrencyChange = (currency) => {
    if (currency !== localSelectedCurrency) {
      localStorage.setItem("selectedCurrency", currency);
      window.location.reload();
    }
  };
  useEffect(() => {
    console.log(localSelectedCurrency);
  }, [localSelectedCurrency])
  return (
    <>
      {!isSearchBarOpen && (
        <>
          <Offcanvas fullWidth show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <img
                  src="../../../assets/images/icons/off-can-logo.png"
                  alt=""
                />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="p-0 z-index-full">
              <div className="topbrands ps-3 pe-3">
                <div className="title-wrap">
                  <div className="icon-wrap-off">
                    <img src="../../../assets/images/icons/icon1.svg" alt="" />
                  </div>
                  <h3 className="topbrand-tit">Top Brands</h3>
                </div>

                <Icon
                  className="off-canvas-chevron"
                  icon="system-uicons:chevron-up"
                />
              </div>
              <div className="Line"></div>

              <div className="off-submenu ps-3 pe-3">
                {
                  !ControlBrands ? <>
                    <h3 className="topbrand-tit sub" onClick={() => {
                      navigate("/new-mobile/iphone-mobiles-price")
                      setShow(false)
                    }}>Apple</h3>
                    <h3 className="topbrand-tit sub" onClick={() => {
                      navigate("/new-mobile/samsung-mobile-phones-prices-in-pakistan")
                      setShow(false)
                    }}>Samsung</h3>
                    <h3 className="topbrand-tit sub" onClick={() => {
                      navigate("/new-mobile/iphone-mobiles-price")
                      setShow(false)
                    }}>Realme</h3>
                    <h3 className="topbrand-tit sub" onClick={() => {
                      setControlBrands(true)
                    }}>More..</h3>
                  </> : <>
                    <h3 className="topbrand-tit sub" onClick={() => {
                      navigate("/new-mobile/iphone-mobiles-price")
                      setShow(false)
                    }}>Apple</h3>
                    <h3 className="topbrand-tit sub" onClick={() => {
                      navigate("/new-mobile/samsung-mobile-phones-prices-in-pakistan")
                      setShow(false)
                    }}>Samsung</h3>
                    <h3 className="topbrand-tit sub" onClick={() => {
                      navigate("/new-mobile/iphone-mobiles-price")
                      setShow(false)
                    }}>Realme</h3>
                    <h3 className="topbrand-tit sub" onClick={() => {
                      navigate("/new-mobile/google-mobile-phones-price-in-pakistan")
                      setShow(false)
                    }}>Google</h3>
                    <h3 className="topbrand-tit sub" onClick={() => {
                      navigate("/new-mobile/huawei-mobile-phone-price-in-pakistan")
                      setShow(false)
                    }}>Huawei</h3>
                    <h3 className="topbrand-tit sub" onClick={() => {
                      navigate("/new-mobile/infinix-mobile-phones")
                      setShow(false)
                    }}>Infinix</h3>
                    <h3 className="topbrand-tit sub" onClick={() => {
                      setControlBrands(false)
                    }}>Less..</h3>

                  </>
                }

              </div>
              <div className="topbrands ps-3 pe-3">
                <div className="title-wrap">
                  <div className="icon-wrap-off">
                    <img
                      className="off-ico"
                      src="../../../assets/images/icons/icon2.svg"
                      alt=""
                    />
                  </div>
                  <h3 className="topbrand-tit trending">
                    <Link
                      to="/"
                      className="off-links"
                    >
                      Home Mobiles
                    </Link>
                  </h3>
                </div>
              </div>
              <div className="Line"></div>
              <div className="topbrands ps-3 pe-3">
                <div className="title-wrap">
                  <div className="icon-wrap-off">
                    <img
                      className="off-ico"
                      src="../../../assets/images/icons/icon3.svg"
                      alt=""
                    />
                  </div>

                  <h3 className="topbrand-tit trending">
                    {" "}
                    <Link to="/top-upcoming-mobile-phones-in-2023" className="off-links">
                      Upcoming Mobiles
                    </Link>
                  </h3>
                </div>
              </div>
              <div className="Line"></div>
              <div className="topbrands ps-3 pe-3">
                <div className="title-wrap">
                  <div className="icon-wrap-off">
                    <img
                      className="off-ico"
                      src="../../../assets/images/icons/icon4.svg"
                      alt=""
                    />
                  </div>
                  <h3 className="topbrand-tit trending">
                    <Link to="/blog" className="off-links">
                      Tech News
                    </Link>
                  </h3>
                </div>
              </div>

              <div className="Line"></div>
              <div className="more-links">
                <Link to="/privacypolicy" className="off-links ps-3 pe-3">
                  <span>Privacy Policy</span>
                </Link>
                <div className="Line"></div>
                <Link className="off-links ps-3 pe-3" to="/contact">
                  <span>Contact us</span>
                </Link>
                <div className="Line"></div>
                <Link className="off-links ps-3 pe-3" to="/advertise">
                  <span>Advertise with us</span>
                </Link>
                <div className="Line"></div>
                <Link className="off-links ps-3 pe-3" to="/termsandconditions">
                  <span>Terms and Conditions</span>
                </Link>
                <Link className="off-links ps-3 pe-3" to="">
                  <div></div>
                </Link>
                <Link className="off-links ps-3 pe-3" to="">
                  <div></div>
                </Link>
              </div>
              <div className="only-lang off-c">
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdon-basic">
                    <div className="lang-wrap">
                      <img
                        className="ic-notify flag"
                        src="../../assets/images/pkflag.png"
                        alt=""
                      />
                      <h5 className="pak-tit">Pakistan</h5>
                      <Icon className="flag-drop-ico" icon="bx:chevron-down" />
                    </div>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <>
                      <li>
                        {" "}
                        <img
                          className="ic-notify flag"
                          src="../../assets/images/pkflag.png"
                          alt=""
                        />
                        pakistan
                      </li>
                      <li>
                        {" "}
                        <img
                          className="ic-notify flag"
                          src="../../assets/images/indflag.png"
                          alt=""
                        />
                        india
                      </li>
                      <li>
                        <img
                          className="ic-notify flag"
                          src="../../assets/images/usaflag.png"
                          alt=""
                        />
                        USA
                      </li>
                    </>
                    ;
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
          <Offcanvas
            className="notification-off-canvas"
            placement="start"
            show={showS}
            onHide={handleCloseS}
          >
            <Offcanvas.Header className="small-notification-header d-flex justify-content-between align-items-center text-white">
              <h5>
                <img
                  className="me-3"
                  src="../../assets/images/icons/goback-white.png"
                  alt=""
                  onClick={handleCloseS}
                />
                Notifications
              </h5>
              <Link to="/login">
                <img
                  src="../../../assets/images/icons/account-mob.png"
                  alt=""
                />
              </Link>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="notify-upper">
                <h3 className="notification-tit">Notifications</h3>
                <h3 className="notification-tit">
                  <Icon className="check-ico" icon="bi:check-circle" /> Mark as
                  Read
                </h3>
              </div>

              {allNotifications.map((item, index) => (
                <div className="notify-item">
                  <img
                    className="side-mobile-sec-img"
                    src={`https://softliee.com/softlee/public/storage/${item?.latestPost ? "blogs" : "product"
                      }/${item.image}`}
                    height="88px"
                    onClick={() =>
                      handleImgClick(
                        item.slug,
                        item?.latestPost ? "details" : "product"
                      )
                    }
                  />
                  <div>
                    <h3
                      className="notify-tit"
                      onClick={() =>
                        handleImgClick(
                          item.slug,
                          item?.latestPost ? "details" : "product"
                        )
                      }
                    >
                      {item.name ? item.name : item.title}
                    </h3>
                    <h6 className="notification-time">
                      RS{" "}
                      {item.orignal_price
                        ? formatAmount(item.orignal_price)
                        : "N/A"}
                    </h6>
                  </div>
                </div>
              ))}
            </Offcanvas.Body>
          </Offcanvas>
          <header className="desktop-header">
            <div className="blue-bg">
              <div className="container">
                <div className="row">
                  <div className="col-sm-2">
                    <Link to="/">
                      <img
                        className="logo-img"
                        src="../../assets/images/softliee.png"
                        alt="logo"
                      />
                    </Link>
                  </div>
                  <ClickAwayListener onClickAway={handleBlurForSearchDialog}>
                    <div
                      className={`${tabletWidth ? "col-sm-4" : "col-sm-6"
                        }  p-0 ${isSearchDialogOpen
                          ? "search-box-parent-container rounded-5 p-0"
                          : ""
                        }`}
                    >
                      <div className="flex search-wrap">
                        <input
                          onFocus={() => setIsSearchDialogOpen(true)}
                          onChange={(e) => handleSearchChange(e.target.value)}
                          value={search}
                          type="text"
                          className="search"
                          placeholder="Search your Phone.."
                        />

                        <img
                          onClick={handleSearch}
                          className="search-btn"
                          src="../../assets/images/search-icon.png"
                          alt="search"
                        />
                      </div>

                      {isSearchDialogOpen && (
                        <SearchDialog
                          open={isSearchDialogOpen}
                          value={search}
                        />
                      )}
                    </div>
                  </ClickAwayListener>
                  <div className="col-sm-4">
                    <div className="lang-not-login flex">
                      <div className="only-lang">
                        <Dropdown>
                          <Dropdown.Toggle variant="light" id="dropdon-basic">

                            {
                              localSelectedCurrency == null || localSelectedCurrency == "Pakistan" ?
                                <div className="lang-wrap null pak ">

                                  <img
                                    className="ic-notify flag"
                                    src="../../assets/images/pkflag.png"
                                    alt=""
                                  />


                                  <h5 className="pak-tit">

                                    Pakistan
                                  </h5>
                                  <Icon
                                    className="flag-drop-ico"
                                    icon="bx:chevron-down"
                                  />
                                </div> :


                                <div className="lang-wrap usa ">


                                  <h5 className="pak-tit">
                                    USA
                                  </h5>
                                  <Icon
                                    className="flag-drop-ico"
                                    icon="bx:chevron-down"
                                  />
                                </div>

                            }

                          </Dropdown.Toggle>

                          <Dropdown.Menu className="asdasdas">
                            {currency?.data?.currency &&
                              currency?.data?.currency.map((item, index) => (
                                <>
                                  <li
                                    style={{
                                      padding: "10px",
                                      cursor: "pointer",
                                    }}
                                    className="cursor-pointer"
                                    onClick={() =>
                                      handleCurrencyChange(item?.country)
                                    }
                                  >
                                    {" "}
                                    <img
                                      className="ic-notify flag"
                                      src={`https://softliee.com/softlee/public/storage/currency/${item?.flag_icon}`}
                                      alt=""
                                    />
                                    {item?.country}
                                  </li>
                                </>
                              ))}
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>

                      <div>
                        <NotifyDropdown />
                      </div>

                      <div>
                        {localStorage.getItem("softliUserData") ? (
                          <div className="link-custom">
                            <div className="flex align-items-center justify-center ">
                              <Dropdown>
                                <Dropdown.Toggle
                                  // variant="success"
                                  id="dropdown-basic"
                                  className="user-profile-icon"
                                >
                                  <Icon
                                    icon="mdi:user"
                                    color="white"
                                    width="32"
                                    height="32"
                                  />
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="user-profile-drop-menu">
                                  <Dropdown.Item>
                                    {JSON.parse(
                                      localStorage.getItem("softliUserData")
                                    )?.user?.name && (
                                        <h6 className="mr-16 mb-0 font-bold username-h">
                                          {
                                            JSON.parse(
                                              localStorage.getItem(
                                                "softliUserData"
                                              )
                                            )?.user?.name
                                          }
                                        </h6>
                                      )}
                                  </Dropdown.Item>
                                  <Dropdown.Item>
                                    <h3
                                      className="login-tit cursor-pointer logout"
                                      onClick={handleLogout}
                                    >
                                      Logout
                                    </h3>
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                          </div>
                        ) : (
                          <Link to="/login" className="link-custom">
                            <div className="flex align-items-center">
                              <img
                                className="ic-login"
                                src="../../assets/images/ic_login.png"
                                alt=""
                              />
                              <h3 className="login-tit">Login</h3>
                            </div>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="box-shadow-wrapping">
              <div className="container">
                <div className="flex justify-content-between">
                  <ul className="navigation">
                    <li className="nav-single-li">
                      <Link
                        className="nav-single-a"
                        to="/"
                      >
                        Home Mobiles
                      </Link>
                    </li>
                    <li className="nav-single-li">
                      <a className="nav-single-a" href="/blog">
                        Tech News
                      </a>
                    </li>
                    <li className="nav-single-li">
                      <a className="nav-single-a" href="/top-upcoming-mobile-phones-in-2023">
                        Upcoming mobiles
                      </a>
                    </li>
                    <li className="nav-single-li">
                      <a className="nav-single-a" href="/popularmobiles">
                        Popular Mobiles
                      </a>
                    </li>
                    <li className="nav-single-li">
                      <Link className="nav-single-a" to="/compare-mobile-phone">
                        Compare Mobiles
                      </Link>
                    </li>
                    <li className="nav-single-li">
                      <a className="nav-single-a" href="/phonefinder">
                        Phone Finder
                      </a>
                    </li>
                  </ul>
                  <div className="flex">
                    <a
                      href="https://www.facebook.com/softliee/"
                      target="_blank"
                    >
                      <img
                        className="social-icon-single"
                        src="../../assets/images/social-icons/fb.png"
                        alt=""
                      />
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UCui5-jNud8arKsWsbt3WqeQ"
                      target="_blank"
                    >
                      <img
                        className="social-icon-single"
                        src="../../assets/images/social-icons/youtube.png"
                        alt=""
                      />
                    </a>
                    <a
                      href="https://pk.linkedin.com/showcase/softliee"
                      target="_blank"
                    >
                      <img
                        className="social-icon-single"
                        src="../../assets/images/social-icons/linkidin.png"
                        alt=""
                      />
                    </a>
                    <a
                      href="https://www.pinterest.com/softliee/"
                      target="_blank"
                    >
                      <img
                        style={{ marginRight: "0" }}
                        className="social-icon-single"
                        src="../../assets/images/social-icons/pinterest.png"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <header className="mobile-header">
            <div className="header-mob-wrap">
              <div className="hamburger-wrap">
                <img
                  onClick={handleShow}
                  src="../../../assets/images/icons/ham.png"
                  alt=""
                />
              </div>

              <div className="logo-wrapp">
                <Link to="/">
                  {" "}
                  <img
                    className="logo-img"
                    src="../../assets/images/softliee.png"
                    alt="logo"
                  />
                </Link>
              </div>
              <div className="right-side-wrap">
                <img
                  src="../../../assets/images/icons/search.png"
                  alt=""
                  onClick={() => props.hadleSarchBarOpen(true)}
                />
              </div>
              <div>
                <Link to="/login">
                  <img
                    src="../../../assets/images/icons/account-mob.png"
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </header>
        </>
      )}

      <section>
        <div className="mobile-buttons hide-on-desktop">
          <div
            onClick={handleCloseS}
            className={
              !showS && window.location.pathname === "/"
                ? "active icon-box-wrap"
                : "icon-box-wrap"
            }
          >
            <Link to="/" className="custom-link">
              <img
                className="ico"
                src="../../../assets/images/icons/i1.svg"
                alt=""
              />
              <h3 className="icon-box-tit">Home</h3>
            </Link>
          </div>
          <div
            onClick={handleCloseS}
            className={
              !showS && window.location.pathname === "/compare-mobile-phone"
                ? "active icon-box-wrap"
                : "icon-box-wrap"
            }
          >
            <Link to="/compare-mobile-phone" className="custom-link">
              <img
                className="ico"
                src="../../../assets/images/icons/i2.svg"
                alt=""
              />
              <h3 className="icon-box-tit">Compare</h3>
            </Link>
          </div>

          <div
            onClick={handleCloseS}
            className={
              !showS && window.location.pathname === "/phonefinder"
                ? "active icon-box-wrap"
                : "icon-box-wrap"
            }
          >
            <Link to="/phonefinder" className="custom-link">
              <img
                className="ico"
                src="../../../assets/images/icons/i3.svg"
                alt=""
              />
              <h3 className="icon-box-tit">Finder</h3>
            </Link>
          </div>
          <div
            className={showS ? "active icon-box-wrap" : "icon-box-wrap"}
            onClick={handleShowS}
          >
            <img
              className="ico notify-ico-off-c"
              src="../../../assets/images/icons/i4.svg"
              alt=""
            />
            <h3 className="icon-box-tit">Notify</h3>
          </div>
        </div>
      </section>
      <TechNewsDialog
        dialogIsOpen={isTechNewsDialogOpen}
        handleClose={() => setIsTechNewsDialogOpen(false)}
      />
      {mobileWidth && !isSearchBarOpen && (
        <CountryPopup
          selectedValue={selectedValue}
          open={countryPopupOpen}
          onClose={handleCountryPopupClose}
        />
      )}
    </>
  );
};
export default Header;
