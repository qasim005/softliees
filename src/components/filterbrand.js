import Slider from "react-slick";
import Footer from "./small/footer";
import Header from "./small/header";
import Dropdown from "react-bootstrap/Dropdown";
import Sliders from "rc-slider";
import AddIcon from "@mui/icons-material/Add";
import Form from "react-bootstrap/Form";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import {
    Link,
    useNavigate,
    useParams,
    useSearchParams,
} from "react-router-dom";
import { formatAmount, IsMobileWidth } from "./utils";
import SearchBar from "./small/searchbar";
import { useDispatch, useSelector } from "react-redux";
import {
    getProductByBrand,
    getTrendingProducts,
    priceWiseProducts,
    filterMobiles,
} from "../redux/actions/app.actions";
import CircularProgress from "@mui/material/CircularProgress";
import { Helmet } from "react-helmet";
import { Adsense } from "@ctrl/react-adsense";

const Filterbrand = (props) => {
    let navigate = useNavigate();
    const { slug } = useParams();
    const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
    const [rangePrices, setRangePrices] = useState([10000, 350000]);
    const [searchParams] = useSearchParams();

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrow: true,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const mobileWidth = IsMobileWidth();
    const dispatch = useDispatch();

    const [state, setState] = useState({
        ram: "",
        storage: "",
        camera: "",
        battery: "",
        priceRange: "",
    });

    const handleChange = (name, value) => {
        if (name === "ram") {
            dispatch(
                priceWiseProducts({
                    from_price: state.priceRange
                        ? 0
                        : searchParams.get("from")
                            ? searchParams.get("from")
                            : undefined,
                    to_price: state.priceRange
                        ? parseInt(state.priceRange)
                        : searchParams.get("to")
                            ? searchParams.get("to")
                            : undefined,
                    filters: [
                        {
                            2: parseInt(value),
                            3: state.storage !== "" ? parseInt(state.storage) : undefined,
                            4: state.camera !== "" ? parseInt(state.camera) : undefined,
                            6: state.battery !== "" ? parseInt(state.battery) : undefined,
                        },
                    ],
                })
            );
        } else if (name === "storage") {
            dispatch(
                priceWiseProducts({
                    from_price: state.priceRange
                        ? 0
                        : searchParams.get("from")
                            ? searchParams.get("from")
                            : undefined,
                    to_price: state.priceRange
                        ? parseInt(state.priceRange)
                        : searchParams.get("to")
                            ? searchParams.get("to")
                            : undefined,
                    filters: [
                        {
                            2: state.ram !== "" ? parseInt(state.ram) : undefined,
                            3: parseInt(value),
                            4: state.camera !== "" ? parseInt(state.camera) : undefined,
                            6: state.battery !== "" ? parseInt(state.battery) : undefined,
                        },
                    ],
                })
            );
        } else if (name === "camera") {
            dispatch(
                priceWiseProducts({
                    from_price: state.priceRange
                        ? 0
                        : searchParams.get("from")
                            ? searchParams.get("from")
                            : undefined,
                    to_price: state.priceRange
                        ? parseInt(state.priceRange)
                        : searchParams.get("to")
                            ? searchParams.get("to")
                            : undefined,
                    filters: [
                        {
                            2: state.ram !== "" ? parseInt(state.ram) : undefined,
                            3: state.storage !== "" ? parseInt(state.storage) : undefined,
                            4: parseInt(value),
                            6: state.battery !== "" ? parseInt(state.battery) : undefined,
                        },
                    ],
                })
            );
        } else if (name === "battery") {
            dispatch(
                priceWiseProducts({
                    from_price: state.priceRange
                        ? 0
                        : searchParams.get("from")
                            ? searchParams.get("from")
                            : undefined,
                    to_price: state.priceRange
                        ? parseInt(state.priceRange)
                        : searchParams.get("to")
                            ? searchParams.get("to")
                            : undefined,
                    filters: [
                        {
                            2: state.ram !== "" ? parseInt(state.ram) : undefined,
                            3: state.storage !== "" ? parseInt(state.storage) : undefined,
                            4: state.camera !== "" ? parseInt(state.camera) : undefined,
                            6: parseInt(value),
                        },
                    ],
                })
            );
        } else if (name === "priceRange") {
            dispatch(
                priceWiseProducts({
                    from_price: value
                        ? 0
                        : searchParams.get("from")
                            ? searchParams.get("from")
                            : undefined,
                    to_price: value
                        ? parseInt(value)
                        : searchParams.get("to")
                            ? searchParams.get("to")
                            : undefined,
                    filters: [
                        {
                            2: state.ram !== "" ? parseInt(state.ram) : undefined,
                            3: state.storage !== "" ? parseInt(state.storage) : undefined,
                            4: state.camera !== "" ? parseInt(state.camera) : undefined,
                            6: state.battery !== "" ? parseInt(state.battery) : undefined,
                        },
                    ],
                })
            );
        }

        setState({
            ...state,
            [name]: value,
        });
    };
    const {
        filters,
        trendingProducts,
        productByBrand,
        priceWiseProductsResponse,
        advertisement,
        currency,
    } = useSelector((selectSate) => selectSate.app);

    const handleImgClick1 = (slug) => {
        navigate(`/${slug}`, { replace: true });
    };

    const handleImgClick = () => {
        navigate("/trending_products", { replace: true });
    };

    useEffect(() => {
        if (searchParams.get("under")) {
            dispatch(
                priceWiseProducts({
                    under: searchParams.get("under"),
                })
            );
        } else if (
            searchParams.get("from") &&
            searchParams.get("to") &&
            searchParams.get("ram")
        ) {
            dispatch(
                priceWiseProducts({
                    from: searchParams.get("from"),
                    to: searchParams.get("to"),
                    ram: searchParams.get("ram"),
                })
            );
        } else if (slug === "trending-mobiles") {
            if (!trendingProducts?.data && !trendingProducts?.loading) {
                dispatch(getTrendingProducts());
            }
        } else {
            dispatch(getProductByBrand(slug));
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
            return parseInt(price / selectedCurrency?.price);
        } else {
            return price;
        }
    };

    console.log(state);

    return (
        <>
            {isSearchBarOpen && mobileWidth ? (
                <>
                    <SearchBar onGoBack={() => setIsSearchBarOpen(false)} />
                </>
            ) : (
                <>
                    <Helmet>
                        <title>
                            {productByBrand?.data?.brands?.meta_title
                                ? productByBrand?.data?.brands?.meta_title
                                : "Sofliee"}
                        </title>
                        <meta
                            name="description"
                            content={
                                productByBrand?.data?.brands?.meta_description
                                    ? productByBrand?.data?.brands?.meta_description
                                    : ""
                            }
                        />
                        <meta
                            name="keywords"
                            content={
                                productByBrand?.data?.brands?.meta_keywords
                                    ? productByBrand?.data?.brands?.meta_keywords
                                    : ""
                            }
                        />
                    </Helmet>
                    <Header
                        hadleSarchBarOpen={() => setIsSearchBarOpen(true)}
                        isSearchBarOpen={isSearchBarOpen}
                    />

                    <section className="brandslides">
                        <div className="container">
                            <div className="slider-wrapper filter-prod">
                                <Slider {...settings}>
                                    <div>
                                        <img
                                            className="slider-image slider1 img-fluid"
                                            src="../../assets/images/filterprod/Branding1.png"
                                            alt=""
                                        />
                                    </div>
                                    <div>
                                        <img
                                            className="slider-image slider1 img-fluid"
                                            src="../../assets/images/filterprod/Branding2.png"
                                            alt=""
                                        />
                                    </div>
                                    <div>
                                        <img
                                            className="slider-image slider1 img-fluid"
                                            src="../../assets/images/filterprod/Branding3.png"
                                            alt=""
                                        />
                                    </div>
                                    <div>
                                        <img
                                            className="slider-image slider1 img-fluid"
                                            src="../../assets/images/filterprod/Branding4.png"
                                            alt=""
                                        />
                                    </div>
                                    <div>
                                        <img
                                            className="slider-image slider1 img-fluid"
                                            src="../../assets/images/filterprod/Branding5.png"
                                            alt=""
                                        />
                                    </div>
                                    <div>
                                        <img
                                            className="slider-image slider1 img-fluid"
                                            src="../../assets/images/filterprod/Branding6.png"
                                            alt=""
                                        />
                                    </div>
                                    <div>
                                        <img
                                            className="slider-image slider1 img-fluid"
                                            src="../../assets/images/filterprod/Branding7.png"
                                            alt=""
                                        />
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </section>
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

                    <section className="filter-devices d-none">
                        <div className="container">
                            <h3 className="main-tit filter-devices-tit">Filter Devices</h3>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 py-12">
                                    <div className="d-flex">
                                        <div className="single-filter">
                                            <div className="date-filter-a first-filter">
                                                <h6 className="filter-tit">Date</h6>

                                                <Form.Select
                                                    aria-label="Default select example"
                                                    id="dropdown-basic"
                                                >
                                                    <option>Ascending</option>
                                                    <option value="1">descending</option>
                                                </Form.Select>
                                            </div>
                                        </div>

                                        <div className="single-filter">
                                            <div className="date-filter-a">
                                                <h6 className="filter-tit">Ram</h6>

                                                <Form.Select
                                                    aria-label="Default select example"
                                                    id="dropdown-basic"
                                                    onChange={(e) => handleChange("ram", e.target.value)}
                                                >
                                                    <option value={""}>Select</option>
                                                    <option value="8">8 gb</option>
                                                    <option value="7">6 gb</option>
                                                    <option value="6">4 gb</option>
                                                    <option value="5">3 gb</option>
                                                    <option value="4">2 gb</option>
                                                    <option value="9">16 gb</option>
                                                    <option value="40">12 gb</option>
                                                </Form.Select>
                                            </div>
                                        </div>

                                        <div className="single-filter">
                                            <div className="date-filter-a">
                                                <h6 className="filter-tit">Storage</h6>
                                                <Form.Select
                                                    aria-label="Default select example"
                                                    id="dropdown-basic"
                                                    onChange={(e) =>
                                                        handleChange("storage", e.target.value)
                                                    }
                                                >
                                                    <option value={""}>Select</option>
                                                    <option value="12">64 gb</option>
                                                    <option value="15">512 gb</option>
                                                    <option value="11">32 gb</option>
                                                    <option value="14">256 gb</option>
                                                    <option value="10">16 gb</option>
                                                    <option value="13">128 gb</option>
                                                </Form.Select>
                                            </div>
                                        </div>

                                        <div className="single-filter">
                                            <div className="date-filter-a">
                                                <h6 className="filter-tit">Camera</h6>
                                                <Form.Select
                                                    aria-label="Default select example"
                                                    id="dropdown-basic"
                                                    onChange={(e) =>
                                                        handleChange("camera", e.target.value)
                                                    }
                                                >
                                                    <option value={""}>Select</option>
                                                    <option value="20">64 mp</option>
                                                    <option value="38">50 mp</option>
                                                    <option value="19">48 mp</option>
                                                    <option value="18">20 mp</option>
                                                    <option value="17">16 mp</option>
                                                    <option value="16">12 mp</option>
                                                    <option value="36">108 mp</option>
                                                </Form.Select>
                                            </div>
                                        </div>

                                        <div className="single-filter">
                                            <div className="date-filter-a">
                                                <h6 className="filter-tit">Battery</h6>
                                                <Form.Select
                                                    aria-label="Default select example"
                                                    id="dropdown-basic"
                                                    onChange={(e) =>
                                                        handleChange("battery", e.target.value)
                                                    }
                                                >
                                                    <option value={""}>Select</option>
                                                    <option value="29">7000mah</option>
                                                    <option value="28">6000mah</option>
                                                    <option value="27">5000mah</option>
                                                    <option value="26">4500mah</option>
                                                    <option value="35">4000mah</option>
                                                    <option value="25">3000mah</option>
                                                </Form.Select>
                                            </div>
                                        </div>

                                        <div className="single-filter">
                                            <div className="date-filter-a">
                                                <h6 className="filter-tit">Price range</h6>
                                                <Form.Select
                                                    aria-label="Default select example"
                                                    id="dropdown-basic"
                                                    onChange={(e) =>
                                                        handleChange("priceRange", e.target.value)
                                                    }
                                                >
                                                    <option value={""}>Select</option>
                                                    <option value={15000}>under 15,000</option>
                                                    <option value={25000}>under 25,000</option>
                                                    <option value={35000}>under 35,000</option>
                                                    <option value={45000}>under 45,000</option>
                                                    <option value={65000}>under 65,000</option>
                                                    <option value={85000}>under 85,000</option>
                                                    <option value={115000}>under 115,000</option>
                                                </Form.Select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="oppo-mobiles">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <h3 className="main-tit text-capialize">
                                        {searchParams.get("under")
                                            ? "Browse By Budget Mobiles"
                                            : searchParams.get("from")
                                                ? "Filtered Mobiles"
                                                : slug?.replaceAll("-", " ")}
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="row px-2">
                                {(
                                    priceWiseProductsResponse?.loading
                                        ? priceWiseProductsResponse?.loading
                                        : slug === "trending-mobiles"
                                            ? trendingProducts?.loading
                                            : productByBrand?.loading
                                ) ? (
                                    <div className="w-100 d-flex justify-content-center align-items-center h-40vh">
                                        <CircularProgress />
                                    </div>
                                ) : (
                                    priceWiseProductsResponse?.error
                                        ? priceWiseProductsResponse?.error
                                        : slug === "trending-mobiles"
                                            ? trendingProducts?.error
                                            : productByBrand?.error
                                ) ? (
                                    slug === "trending-mobiles" ? (
                                        trendingProducts?.error
                                    ) : (
                                        productByBrand?.error
                                    )
                                ) : (
                                    priceWiseProductsResponse?.data?.products
                                        ? priceWiseProductsResponse?.data?.products
                                        : searchParams.get("under") &&
                                            priceWiseProductsResponse?.data?.budget_products &&
                                            priceWiseProductsResponse?.data?.budget_products
                                                ?.length > 0
                                            ? priceWiseProductsResponse?.data?.budget_products
                                            : priceWiseProductsResponse?.data?.$price_wise_product
                                                ? priceWiseProductsResponse?.data?.$price_wise_product
                                                : slug === "trending-mobiles"
                                                    ? trendingProducts?.data?.$trending_products &&
                                                    trendingProducts?.data?.$trending_products?.length > 0
                                                    : productByBrand?.data?.brand_products &&
                                                    productByBrand?.data?.brand_products?.length > 0
                                ) ? (
                                    (priceWiseProductsResponse?.data?.products
                                        ? priceWiseProductsResponse?.data?.products
                                        : searchParams.get("under") &&
                                            priceWiseProductsResponse?.data?.budget_products &&
                                            priceWiseProductsResponse?.data?.budget_products?.length >
                                            0
                                            ? priceWiseProductsResponse?.data?.budget_products
                                            : priceWiseProductsResponse?.data?.$price_wise_product
                                                ? priceWiseProductsResponse?.data?.$price_wise_product
                                                : slug === "trending-mobiles"
                                                    ? trendingProducts?.data?.$trending_products
                                                    : productByBrand?.data?.brand_products
                                    ).map((item, index) => {
                                        return (
                                            <div className="col-sm-3 col-6 px-2">
                                                <div className="single-m-wrap">
                                                    <img
                                                        className="single-mob-img"
                                                        src={`https://softliee.com/softlee/public/storage/product/${item.image}`}
                                                        alt={item.name}
                                                        onClick={() => handleImgClick1(item.slug)}
                                                    />
                                                    <h3
                                                        className="single-mob-tit"
                                                        onClick={() => handleImgClick1(item.slug)}
                                                    >
                                                        {item.name}
                                                    </h3>
                                                    <div className="compair-btn-with-ico">
                                                        <h4>Compare</h4>
                                                        <AddIcon />
                                                    </div>

                                                    <div className="details-wrap">
                                                        <h4 className="details">
                                                            {item.ram}
                                                            {" / "} {item?.storage} | {item.battery}
                                                        </h4>
                                                    </div>

                                                    <div className="price-icon-wrap flex align-items-center justify-content-center">
                                                        <h3 className="single-mob-tit">
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
                                    <div className="w-100 d-flex justify-content-center align-items-center h-40vh text-danger fw-bolder">
                                        No Item Found!
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
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
                </>
            )}
        </>
    );
};
export default Filterbrand;