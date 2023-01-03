import Footer from "./small/footer";
import Header from "./small/header";
import { Link } from "react-router-dom";
import BlogSidebar from "./small/blogsidebar";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { IsMobileWidth, IsTabletWidth } from "./utils";
import SearchBar from "./small/searchbar";
import React, { useEffect, useState } from "react";
import { getBlogs } from "../redux/actions/app.actions";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
// import { Helmet } from "react-helmet";


const Ourblog = () => {
  const mobileWidth = IsMobileWidth();
  const tabletWidth = IsTabletWidth();
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const dispatch = useDispatch();
  const { blogs } = useSelector((selectSate) => selectSate.app);

  useEffect(() => {
    if (!blogs?.data && !blogs?.loading) {
      dispatch(getBlogs());
    }
  }, []);

  return (
    <>
      {/* <Helmet>
        <title>Gadgets - Mobile Phones And Tech Updates - Softliee.com</title>
        <meta
          name="description"
          content="Mobile Blog aims to focus upon latest news and seo friendly content related to technology, gadgets or Mobile phones."
        />
      </Helmet> */}
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
          <section className="advertiseus">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  {mobileWidth ? (
                    <section id="ad-plpl">
                      <div class="container py-3">
                        <div
                          style={{ padding: "30px 0", background: "#F8F8F9" }}
                          class="text-center"
                        >
                          Ad Placement
                        </div>
                      </div>
                    </section>
                  ) : (
                    <img
                      src="../../assets/images/blog/aaa.png"
                      alt=""
                      className="img-fluid my-5 "
                    />
                  )}
                </div>
              </div>
            </div>
          </section>
          {mobileWidth ? (
            <>
              {" "}
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
                                alt=""
                              />
                              <div className="right-side-info">
                                <h3 className="posts-title-m">{data?.title}</h3>
                                <Link
                                  to={`/details${data?.slug}`}
                                  className="readmore-btn"
                                >
                                  Read more
                                </Link>
                                {/* <div className="d-flex align-items-center">
                                  <h6 className="times-ago">{item.posted}</h6>
                                  <h6 className="times-ago commentss">
                                    {item.comments}
                                  </h6>
                                </div>{" "} */}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </section>
            </>
          ) : (
            <>
              <section className="blog-tit-section">
                <div className="container ">
                  <div className="row">
                    <div className="col-sm-12">
                      <h2 class="main-tit">Recent Posts</h2>
                    </div>
                  </div>
                </div>
              </section>
              <section className="blog-posts-sec">
                <div className="container">
                  <div className="row flex-row-reverse items-start ">
                    {!mobileWidth ? <BlogSidebar /> : null}
                    <div
                      className={clsx(
                        "col-sm-9 for-padding-right"
                      )}
                    >
                      {blogs?.data?.blogs &&
                        blogs?.data?.blogs.map((data, index) => (

                          <div className="blog-posts-wrapp ">
                            <div className="blog-card-design">
                              <div className="img-side">
                                <img
                                  className="blog-card-img"
                                  src={`https://softliee.com/softlee/public/storage/blogs/${data?.image}`}
                                  alt=""
                                />
                              </div>
                              <div className="text-side">
                                {/* <h6 className="blogging">Blogging</h6> */}
                                <h3 className="blog-card-tit">{data?.title}</h3>
                                <div
                                  className="expert-card-blog truncated-word"
                                  dangerouslySetInnerHTML={{
                                    __html: data?.description.substring(0, 200),
                                  }}
                                >
                                  {/* {mobileWidth
                                    ? "A lot of people lament how fate and tragedy has affected their future..."
                                    : "A lot of people lament how fate and tragedy has affected their future, mostly for the worst. But there are some exceptional individuals who,..."} */}
                                </div>
                                <Link
                                  to={`/details/${data?.slug}`}
                                  className="readmore-btn"
                                >
                                  Read more
                                </Link>
                              </div>
                            </div>
                          </div>

                        ))}
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}
          {mobileWidth && <BlogSidebar />}

          <Footer />
        </>
      )}
    </>
  );
};
export default Ourblog;
