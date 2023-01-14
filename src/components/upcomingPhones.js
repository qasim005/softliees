import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUpcomingProducts } from "../redux/actions/app.actions";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./small/header";
import Footer from "./small/footer";
import SearchBar from "./small/searchbar";
import { IsMobileWidth, IsTabletWidth, formatAmount } from "./utils";
import { Helmet } from "react-helmet";

export default function UpcomingPhones() {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const mobileWidth = IsMobileWidth();
  const tabletWidth = IsTabletWidth();
  const dispatch = useDispatch();
  const { upcomingProducts } = useSelector((selectSate) => selectSate.app);

  useEffect(() => {
    if (!upcomingProducts?.data && !upcomingProducts?.loading) {
      dispatch(getUpcomingProducts());
    }
  }, []);

  return (
    <div>


      {/* {isSearchBarOpen && mobileWidth ? (
        <>
          <SearchBar onGoBack={() => setIsSearchBarOpen(false)} />
        </>
      ) : (
        <>
          <Header
            hadleSarchBarOpen={() => setIsSearchBarOpen(true)}
            isSearchBarOpen={isSearchBarOpen}
          /> */}
      <div class="main-tit upcoming-phones">Upcoming Phone</div>
      <div class="spacer_custom_10"></div>
      {upcomingProducts?.data?.$upcoming_products?.length > 0 &&
        upcomingProducts?.data?.$upcoming_products.map((data) => (
          <div class="side_mobile_section">
            <div class="side_mobile_Col">
              <center>
                <img
                  className="side-mobile-sec-img"
                  src={`https://softliee.com/softlee/public/storage/product/${data?.image}`}
                  height="88px"
                />
              </center>
            </div>
            <div class="side_mobile_Col">
              <div class="side_col_title">{data?.name}</div>
              <div class="side_col_rupee">RS {data?.orignal_price}</div>
              <Link class="view_more_link" to={`/product/${data?.slug}`}>View More</Link>
            </div>
          </div>
        ))}
      {/* <Footer />
        </>
      )} */}
    </div>
  );
}
