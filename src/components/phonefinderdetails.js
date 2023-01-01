import React, { useState, useEffect } from "react";
import Footer from "./small/footer";
import Header from "./small/header";
import { useLocation, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import { IsMobileWidth, selectThemeColors, formatAmount } from "./utils";

const PhoneFinderDetails = () => {
    let localSelectedCurrency = localStorage.getItem("selectedCurrency");

    const [Users, setUsers] = useState([]);
    const location = useLocation()
    // console.log(location.pathname.split("/"));
    const path = location.pathname.split("/");
    // console.log("filterMobilesResponse", location.state);

    const { filters, brands, filterMobilesResponse, advertisement, currency } = useSelector(
        (selectSate) => selectSate.app
    );

    const navigate = useNavigate();

    const handleImgClick1 = (slug) => {
        navigate(`/product/${slug}`, { replace: true });
    };


    // const getUser = async () => {

    //     try {
    //         await fetch(
    //             `https://softliee.com/softlee/public/api/ram_products/${path[2]}`
    //         ).then(async (response) => {
    //             await response.json().then((res) => {
    //                 console.log(res.ram_product);
    //                 setUsers(res.ram_product);
    //             });
    //         });
    //         //   setLoading(false);
    //     } catch (error) {
    //         alert("api get faile");
    //     }
    // };

    // useEffect(() => {
    //     getUser();
    // }, []);

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

    useEffect(() => {
        // console.log(filterMobilesResponse);
        window.scrollTo(0, 0)
    }, []);

    return (
        <div>
            <section className="ram-filter">
                <Header />
                <div className="container ram-filter-content">
                    <div className="row">
                        <div className="section-head-ram">
                            <h1>Filtered Mobile</h1>
                        </div>
                        <div className="container mt-2 mb-4">
                            <div className="row px-2">
                                {filterMobilesResponse?.loading ? (
                                    <div className="w-100 d-flex justify-content-center align-items-center h-40vh">
                                        <CircularProgress />
                                    </div>
                                ) : filterMobilesResponse?.data?.products &&
                                    filterMobilesResponse?.data?.products?.length !== 0 ? (
                                    (filterMobilesResponse?.data?.products).map((item, index) => {
                                        return (
                                            <div className="col-sm-3 col-6 px-2">
                                                <div className="single-m-wrap">
                                                    <img
                                                        className="single-mob-img"
                                                        src={`https://softliee.com/softlee/public/storage/product/${item.image}`}
                                                        alt=""
                                                        onClick={() => handleImgClick1(item.slug)}
                                                    />
                                                    <h3
                                                        className="single-mob-tit"
                                                        onClick={() => handleImgClick1(item.slug)}
                                                    >
                                                        {item.name}
                                                    </h3>
                                                    {/* <div className="compair-btn-with-ico">
                        <h4>Compare</h4>
                        <AddIcon />
                      </div> */}

                                                    {/* <div className="details-wrap">
                          <h4 className="details">
                            {item.ram}
                            {" / "} {item?.storage} | {item.battery}
                          </h4>
                        </div> */}

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
                                    <div className="w-100 d-flex justify-content-center text-red-600 align-items-center h-40vh">
                                        No Date Found!
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                </div>

                <Footer />
            </section>
        </div>
    );
};

export default PhoneFinderDetails;
