import { Adsense } from "@ctrl/react-adsense";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Footer from "./small/footer";
import Header from "./small/header";
import { IsMobileWidth, IsTabletWidth } from "./utils";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";


const SearchResultPage = () => {
    const { searchProduct } = useSelector((selectSate) => selectSate.app);
    const tabletWidth = IsTabletWidth();
    const mobileWidth = IsMobileWidth();
    const navigate = useNavigate()
    const handleImgClick = (slug) => {
        navigate(`/${slug}`, { replace: true });
    };


    return (
        <>
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
                        <h1>Search Results</h1>
                    </div>
                </div>
                <div className="row px-2">
                    {searchProduct ? (
                        searchProduct?.data?.search_Product &&
                        searchProduct?.data?.search_Product.map((items, index) => {

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
                                            onClick={() => handleImgClick(items.slug)}
                                        />
                                        <h3
                                            className={clsx(
                                                "",
                                                mobileWidth && "single-mob-tits",
                                                !mobileWidth && "single-mob-tit"
                                            )} onClick={() => handleImgClick(items.slug)}>{items.name}</h3>

                                        <Link
                                            to={`/compare-mobile-phone/${items?.slug}/change_product`}
                                            className="compair-btn-with-ico"
                                        >
                                            <h4>Compare</h4>
                                            <AddIcon />
                                        </Link>


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
                                                style={{ marginTop: "7px" }}
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
    )
}
export default SearchResultPage