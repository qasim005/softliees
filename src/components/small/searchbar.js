import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getSearchProduct } from "../../redux/actions/app.actions";

const SearchBar = (props) => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [isSearchDialogOpen, setIsSearchDialogOpen] = useState(false);
  const [search, setSearch] = useState();
  const { searchProduct } = useSelector((selectSate) => selectSate.app);

  const handleBlurForSearchDialog = () => {
    setIsSearchDialogOpen(false);
  };
  const handleSearch = () => {
    setIsSearchDialogOpen(true);
    dispatch(getSearchProduct({ search: search }));
  };

  const handleImgClick = (slug) => {
    navigate(`/product/${slug}`, { replace: true });
  };

  return (
    <>
      <div className="small-notification-header d-flex justify-content-between align-items-center text-white">
        <img
          className="me-2"
          src="../../assets/images/icons/goback-white.png"
          alt=""
          onClick={props.onGoBack}
        />
        <input
          onFocus={() => setIsSearchDialogOpen(true)}
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text"
          placeholder="Search your Phone.."
          className=" search-mobile"
          onClick={handleSearch}
        />
        <Link to="/login">
          <img src="../../../assets/images/icons/account-mob.png" alt="" />
        </Link>
      </div>
      <div className="p-2">
        <div className="notify-upper align-items-center mt-2">
          <h3 className="notification-tit">Recent Search</h3>
          <h3 className="notification-tit overview_details_title">
            See More <ChevronRightIcon className="btn-chev" />
          </h3>
        </div>
        {searchProduct?.data?.search_Product &&
          searchProduct?.data?.search_Product.map((item, index) => (
            <div className="d-flex justify-content-between align-items-center p-2-5 align-items-center">
              <div className="d-flex align-items-center">
                <img
                  width="60px"
                  height="80px"
                  src={`https://softliee.com/softlee/public/storage/product/${item.image}`}
                  onClick={() => handleImgClick(item.slug)}
                />
                <div
                  className="ps-4 fw-bold"
                  onClick={() => handleImgClick(item.slug)}
                >
                  {" "}
                  {item.name}
                </div>
              </div>
              <div>
                <IconButton>
                  <Close style={{ fontSize: "20px" }} />
                </IconButton>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
export default SearchBar;
