import React, { useState, useEffect } from "react";
import Footer from "./small/footer";
import Header from "./small/header";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";


const RamFilter = () => {
  const [Users, setUsers] = useState([]);
  const location = useLocation()
  // console.log(location.pathname.split("/"));
  const path = location.pathname.split("/");
  const navigate = useNavigate()


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
    navigate(`/product/${slug}`, { replace: true });
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
        <div className="container ram-filter-content">
          <div className="row">
            <div className="section-head-ram">
              <h1>Ram Mobile</h1>
            </div>

            {Users.length > 0 && Users ? (
              Users.map((items, index) => {

                return (
                  <div className="col-md-3 col-12 bg-sm-danger px-2">
                    <div className="single-m-wrap">
                      <img
                        className="single-mob-img"
                        //   src="\assets\images\mobiles\image1.png"
                        src={`https://softliee.com/softlee/public/storage/product/${items.image}`}
                        alt={items.alt_imag}
                        onClick={() => handleImgClick1(items.slug)}
                      />
                      <h3 className="single-mob-tit">{items.name}</h3>

                      <Link
                        to={`/compare-mobile-phone/${items?.slug}/change_product`}
                        className="compair-btn-with-ico"
                      >
                        <h4>Compare</h4>
                        <AddIcon />
                      </Link>

                      <div className="mt-3 details-wrap">
                        <h4 className=" p-1 details">
                          {items.ram_storage1} GB | {items.battery}
                        </h4>
                      </div>
                      <div className="flex align-items-center justify-content-center price-icon-wrap">
                        <h3 className="single-mob-tit">
                          $ {items.orignal_price}
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

        <Footer />
      </section>
    </div>
  );
};

export default RamFilter;
