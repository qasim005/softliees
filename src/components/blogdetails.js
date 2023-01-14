import Header from "./small/header";
import Footer from "./small/footer";
import { Icon } from "@iconify/react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate, useParams } from "react-router-dom";
import BlogSidebar from "./small/blogsidebar";
import { IsMobileWidth, IsTabletWidth } from "./utils";
import { useEffect, useState } from "react";
import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { getSingleBlog } from "../redux/actions/app.actions";

const Blogdetails = () => {



  const tabletWidth = IsTabletWidth();
  const mobileWidth = IsMobileWidth();
  const mylocation = window.location.pathname.split("/")

  // const dispatch = useDispatch();
  // const { slug } = useParams();
  // const { singleBlog } = useSelector((selectSate) => selectSate.app);

  // useEffect(() => {
  //   dispatch(getSingleBlog(slug));
  // }, []);

  let navigate = useNavigate();
  // const handleImgClick = () => {
  //   console.log("inside");
  //   navigate("/mobiles", { replace: true });
  // };


  useEffect(() => {
    console.log(mylocation[2]);

    axios.get(`https://softliee.com/softlee/public/api/blog/${mylocation[2]}`).then((res) => {
      console.log(res);

    }).catch((err) => {
      console.log(err);
    })
  }, [])

  return (
    <>
      <Header />

      <section className="advertiseus">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div class="bread_crumb_link blog-detail">
                <a href="" class="bread_crumb_link">
                  Home
                </a>{" "}
                <ChevronRightIcon />
                <a href="" class="bread_crumb_link">
                  Oppo
                </a>{" "}
                <ChevronRightIcon />
                <a href="" class="bread_crumb_link">
                  Oppo A5
                </a>{" "}
                <ChevronRightIcon />
              </div>
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
                  className="img-fluid mb-5 mt-3 "
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-9 blog-details-left">
              <div className="col-sm-12">
                <img
                  className="img-fluid about-us-img"
                  src={`https://softliee.com/softlee/public/storage/blogs/`}
                  alt=""
                />
              </div>

              <h3 className="main-tit my-3">
                Titlte
              </h3>
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
                  className="img-fluid mb-5 mt-3 "
                />
              )}

              <p
                dangerouslySetInnerHTML={{
                  __html: "test"
                }}
              ></p>

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
                  className="img-fluid mb-5 mt-3 "
                />
              )}
              {/* <div className="quote-section">
                <div className="row">
                  <div className="col-sm-2">
                    <div className="quote-wrapper">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        class="quotesvg iconify iconify--clarity"
                        width="1em"
                        height="1em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 36 36"
                      >
                        <path
                          fill="#fff"
                          d="M11.86 16.55a4.31 4.31 0 0 0-2.11.56a14.44 14.44 0 0 1 4.36-6a1.1 1.1 0 0 0-1.4-1.7c-4 3.25-5.78 7.75-5.78 10.54A5.08 5.08 0 0 0 10 24.58a4.4 4.4 0 0 0 1.88.44a4.24 4.24 0 1 0 0-8.47Z"
                          class="clr-i-outline clr-i-outline-path-1"
                        ></path>
                        <path
                          fill="#fff"
                          d="M23 16.55a4.29 4.29 0 0 0-2.11.56a14.5 14.5 0 0 1 4.35-6a1.1 1.1 0 1 0-1.39-1.7c-4 3.25-5.78 7.75-5.78 10.54a5.08 5.08 0 0 0 3 4.61A4.37 4.37 0 0 0 23 25a4.24 4.24 0 1 0 0-8.47Z"
                          class="clr-i-outline clr-i-outline-path-2"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="col-sm-10">
                    <p className="quote-tit">
                      Due to extensive flooding, most of the pathways of
                      underground cables have been submerged, as relief workers
                      or locals were trying to divert floodwater by digging
                      trenches on roads and footpaths. The ministry has directed
                      PTCL to declare an emergency so that repair work could be
                      initiated when any such incident is reported in the
                      system, while PTA is constantly monitoring the quality of
                      service.
                    </p>
                  </div>
                </div>
              </div>

              <p className="pt-3">
                PTCL’s network cables have a total capacity of 6.5 terabytes,
                but only 70% of it is used so that traffic can be shifted to
                other cables in case of emergencies.
              </p> */}

              <div className="playstoresection p-1 mb-5">
                <a
                  href="https://play.google.com/store/apps/details?id=com.mobilestore.softliee&hl"
                  className="link-play"
                >
                  <div className="d-flex justify-content-between p-3 align-items-center">
                    <div>
                      <div className="d-flex justify-content-center align-items-center">
                        <img
                          width="40"
                          src="../../assets/images/blogdetails/playstore.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div>
                      <p className="quote-tit text-center">
                        {!mobileWidth
                          ? "Get the Sofliee App now & scroll through your favourite content faster!"
                          : "Download from play store"}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              {/* author bio */}
              {mobileWidth ? (
                <div className="author-bio">
                  <div className="row">
                    <div
                      className={
                        tabletWidth || mobileWidth
                          ? "col-sm-12 mt-2"
                          : "col-sm-6"
                      }
                    >
                      <div className="image-tit-wrap">
                        <img
                          className="profile"
                          src="../../assets/images/blogdetails/profile.png"
                          alt=" Profile Image"
                        />
                        <div>
                          <p className="quote-tits">Nolan Workman</p>

                          <div className="published-dates">
                            Published Aug 25, 2022
                          </div>
                          <div className="published-times">12:08 pm</div>

                          <div
                            className={
                              tabletWidth || mobileWidth
                                ? "col-sm-12 align-items-center mt-1"
                                : "col-sm-6"
                            }
                          >
                            <div
                              className={
                                tabletWidth || mobileWidth
                                  ? "col-sm-12 mb-3 all-wrappers"
                                  : "all-wrappers"
                              }
                            >
                              <div className="social-items-wraps">
                                <img
                                  className="blog-social-items"
                                  src="../../assets/images/blogdetails/fb.png"
                                  alt=""
                                />
                                <img
                                  className="blog-social-items"
                                  src="../../assets/images/blogdetails/yt.png"
                                  alt=""
                                />
                                <img
                                  className="blog-social-items"
                                  src="../../assets/images/blogdetails/in.png"
                                  alt=""
                                />
                                <img
                                  className="blog-social-items"
                                  src="../../assets/images/blogdetails/pi.png"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className={
                        tabletWidth || mobileWidth
                          ? "align-items-center d-flex justify-content-between gap-2 mt-4"
                          : "shareviews"
                      }
                    >
                      <div className="colsss">
                        <img
                          className="share-iconss"
                          src="../../assets/images/blogdetails/share.png"
                          alt=""
                        />
                        <span>12 </span>
                      </div>
                      <div className="colsss">
                        <img
                          className="share-iconss"
                          src="../../assets/images/blogdetails/eye.png"
                          alt=""
                        />
                        <span>4.4k</span>
                      </div>
                      <div className="colsss">
                        <img
                          className="share-iconss"
                          src="../../assets/images/blogdetails/message.png"
                          alt=""
                        />
                        <span>4</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="author-bio">
                  <div className="row">
                    <div
                      className={
                        tabletWidth || mobileWidth
                          ? "col-sm-12 mt-2"
                          : "col-sm-6"
                      }
                    >
                      <div className="image-tit-wrap">
                        <img
                          src="../../assets/images/blogdetails/profile.png"
                          alt=" Profile Image"
                        />
                        <div>
                          <p className="quote-tit">Nolan Workman</p>

                          <div className="published-date">
                            Published Aug 25, 2022
                          </div>
                          <div className="published-time">12:08 pm</div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={
                        tabletWidth || mobileWidth
                          ? "col-sm-12 align-items-center mt-3 "
                          : "col-sm-6"
                      }
                    >
                      <div
                        className={
                          tabletWidth || mobileWidth
                            ? "col-sm-12 align-items-center mb-3 all-wrapper"
                            : "all-wrapper"
                        }
                      >
                        <div className="social-items-wrap">
                          <img
                            className="blog-social-item"
                            src="../../assets/images/blogdetails/fb.png"
                            alt=""
                          />
                          <img
                            className="blog-social-item"
                            src="../../assets/images/blogdetails/yt.png"
                            alt=""
                          />
                          <img
                            className="blog-social-item"
                            src="../../assets/images/blogdetails/in.png"
                            alt=""
                          />
                          <img
                            className="blog-social-item"
                            src="../../assets/images/blogdetails/pi.png"
                            alt=""
                          />
                        </div>

                        <div
                          className={
                            tabletWidth || mobileWidth
                              ? "align-items-center d-flex gap-2"
                              : "shareviews"
                          }
                        >
                          <div className="colss">
                            <img
                              className="share-icons"
                              src="../../assets/images/blogdetails/share.png"
                              alt=""
                            />
                            <span>12 Shares</span>
                          </div>
                          <div className="colss">
                            <img
                              className="share-icons"
                              src="../../assets/images/blogdetails/eye.png"
                              alt=""
                            />
                            <span>4.4k Views</span>
                          </div>
                          <div className="colss">
                            <img
                              className="share-icons"
                              src="../../assets/images/blogdetails/message.png"
                              alt=""
                            />
                            <span>4 Comments</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* comments here */}
              {mobileWidth ? (
                <section id="users-comments">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-12">
                        <h3 className="main-tit users-cc-tit">
                          {" "}
                          Oppo A3s Opinions and reviews
                        </h3>

                        <div className="d-flex align-items-bottom">
                          <img
                            className="comment-av"
                            src="../../assets/images/avatar.png"
                            alt=""
                          />
                          <input
                            className="comment-input "
                            type="text"
                            placeholder="Write a review..."
                          />
                        </div>
                        <div className="d-flex align-items-center justify-content-end">
                          <button className="comment-btn">Post Review</button>
                        </div>
                        <div className="comment-wrapper">
                          <div
                            className={
                              tabletWidth || mobileWidth
                                ? "align-items-start justify-content-between"
                                : "d-flex align-items-start justify-content-between"
                            }
                          >
                            <div
                              className={
                                tabletWidth || mobileWidth
                                  ? "align-items-center"
                                  : "d-flex align-items-center"
                              }
                            >
                              <img
                                className="comment-av-reals"
                                src="../../assets/images/av1.png"
                                alt=""
                              />
                              <div className="comment-prof-info">
                                <h3 className="prof-tits">Ahsan Khan</h3>
                                <h6 className="daysago">3 days ago </h6>

                                <div className="d-flex">
                                  <p className="comment-desc">
                                    Exchange with Infinix Hot 11s Media tak
                                    Helio G88 Pubg master??
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="wrapper-rep-like-dis">
                              <button className="reply-btn">Reply</button>
                              <div className="like-btn-count">
                                <Icon
                                  className="like-ico"
                                  icon="ant-design:like-filled"
                                />
                                <h6 className="like-ico-count">12</h6>
                              </div>
                              <div className="like-btn-count">
                                <Icon
                                  className="dislike-ico"
                                  icon="ant-design:like-filled"
                                />
                                <h6>0</h6>
                              </div>
                            </div>
                          </div>

                          <div className="forborborderbottom"></div>
                        </div>
                        <div className="comment-wrapper replay">
                          <div
                            className={
                              tabletWidth || mobileWidth
                                ? "align-items-start justify-content-between"
                                : "d-flex align-items-start justify-content-between"
                            }
                          >
                            <div
                              className={
                                tabletWidth || mobileWidth
                                  ? "align-items-center"
                                  : "d-flex align-items-center"
                              }
                            >
                              <img
                                className="comment-av-real"
                                src="../../assets/images/av1.png"
                                alt=""
                              />
                              <div className="comment-prof-info">
                                <h3 className="prof-tit">Ahsan Khan</h3>
                                <h6 className="daysago">3 days ago </h6>

                                <div className="d-flex">
                                  <p className="comment-desc">
                                    Exchange with Infinix Hot 11s Media tak
                                    Helio G88 Pubg master??
                                  </p>
                                </div>
                              </div>
                            </div>

                            <button className="reply-btn">Reply</button>
                            {/* <div className="wrapper-rep-like-dis">
                            <button className="reply-btn">Reply</button>
                            <div className="like-btn-count">
                              <Icon className="like-ico" icon="ant-design:like-filled" />
                              <h6 className="like-ico-count">12</h6>
                            </div>
                            <div className="like-btn-count">
                              <Icon className="dislike-ico" icon="ant-design:like-filled" />
                              <h6>0</h6>
                            </div>
                          </div> */}
                          </div>

                          <div className="forborborderbottom"></div>
                        </div>
                        <div className="comment-wrapper">
                          <div
                            className={
                              tabletWidth || mobileWidth
                                ? "align-items-start justify-content-between"
                                : "d-flex align-items-start justify-content-between"
                            }
                          >
                            <div
                              className={
                                tabletWidth || mobileWidth
                                  ? "align-items-center"
                                  : "d-flex align-items-center"
                              }
                            >
                              <img
                                className="comment-av-real"
                                src="../../assets/images/av1.png"
                                alt=""
                              />
                              <div className="comment-prof-info">
                                <h3 className="prof-tit">Ahsan Khan</h3>
                                <h6 className="daysago">3 days ago </h6>

                                <p className="comment-desc">
                                  Exchange with Infinix Hot 11s Media tak Helio
                                  G88 Pubg master??
                                </p>
                              </div>
                            </div>
                            <div className="wrapper-rep-like-dis">
                              <button className="reply-btn">Reply</button>
                              <div className="like-btn-count">
                                <Icon
                                  className="like-ico"
                                  icon="ant-design:like-filled"
                                />
                                <h6 className="like-ico-count">12</h6>
                              </div>
                              <div className="like-btn-count">
                                <Icon
                                  className="dislike-ico"
                                  icon="ant-design:like-filled"
                                />
                                <h6>0</h6>
                              </div>
                            </div>
                          </div>

                          <div className="forborborderbottom"></div>
                        </div>
                        <div className="comment-wrapper">
                          <div
                            className={
                              tabletWidth || mobileWidth
                                ? "align-items-start justify-content-between"
                                : "d-flex align-items-start justify-content-between"
                            }
                          >
                            <div
                              className={
                                tabletWidth || mobileWidth
                                  ? "align-items-center"
                                  : "d-flex align-items-center"
                              }
                            >
                              <img
                                className="comment-av-real"
                                src="../../assets/images/av1.png"
                                alt=""
                              />
                              <div className="comment-prof-info">
                                <h3 className="prof-tit">Ahsan Khan</h3>
                                <h6 className="daysago">3 days ago </h6>

                                <p className="comment-desc">
                                  Exchange with Infinix Hot 11s Media tak Helio
                                  G88 Pubg master??
                                </p>
                              </div>
                            </div>
                            <div className="wrapper-rep-like-dis">
                              <button className="reply-btn">Reply</button>
                              <div className="like-btn-count">
                                <Icon
                                  className="like-ico"
                                  icon="ant-design:like-filled"
                                />
                                <h6 className="like-ico-count">12</h6>
                              </div>
                              <div className="like-btn-count">
                                <Icon
                                  className="dislike-ico"
                                  icon="ant-design:like-filled"
                                />
                                <h6>0</h6>
                              </div>
                            </div>
                          </div>

                          <div className="forborborderbottom"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              ) : (
                <section id="users-comments">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-12">
                        <h3 className="main-tit users-cc-tit">
                          {" "}
                          Oppo A3s Opinions and reviews
                        </h3>

                        <div className="d-flex align-items-bottom">
                          <img
                            className="comment-av"
                            src="../../assets/images/avatar.png"
                            alt=""
                          />
                          <input
                            className="comment-input "
                            type="text"
                            placeholder="Write a review..."
                          />
                        </div>
                        <div className="d-flex align-items-center justify-content-end">
                          <button className="comment-btn">Post Review</button>
                        </div>
                        <div className="comment-wrapper">
                          <div
                            className={
                              tabletWidth || mobileWidth
                                ? "align-items-start justify-content-between"
                                : "d-flex align-items-start justify-content-between"
                            }
                          >
                            <div
                              className={
                                tabletWidth || mobileWidth
                                  ? "align-items-center"
                                  : "d-flex align-items-center"
                              }
                            >
                              <img
                                className="comment-av-real"
                                src="../../assets/images/av1.png"
                                alt=""
                              />
                              <div className="comment-prof-info">
                                <h3 className="prof-tit">Ahsan Khan</h3>
                                <h6 className="daysago">3 days ago </h6>

                                <div className="d-flex">
                                  <p className="comment-desc">
                                    Exchange with Infinix Hot 11s Media tak
                                    Helio G88 Pubg master??
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="wrapper-rep-like-dis">
                              <button className="reply-btn">Reply</button>
                              <div className="like-btn-count">
                                <Icon
                                  className="like-ico"
                                  icon="ant-design:like-filled"
                                />
                                <h6 className="like-ico-count">12</h6>
                              </div>
                              <div className="like-btn-count">
                                <Icon
                                  className="dislike-ico"
                                  icon="ant-design:like-filled"
                                />
                                <h6>0</h6>
                              </div>
                            </div>
                          </div>

                          <div className="forborborderbottom"></div>
                        </div>
                        <div className="comment-wrapper replay">
                          <div
                            className={
                              tabletWidth || mobileWidth
                                ? "align-items-start justify-content-between"
                                : "d-flex align-items-start justify-content-between"
                            }
                          >
                            <div
                              className={
                                tabletWidth || mobileWidth
                                  ? "align-items-center"
                                  : "d-flex align-items-center"
                              }
                            >
                              <img
                                className="comment-av-real"
                                src="../../assets/images/av1.png"
                                alt=""
                              />
                              <div className="comment-prof-info">
                                <h3 className="prof-tit">Ahsan Khan</h3>
                                <h6 className="daysago">3 days ago </h6>

                                <div className="d-flex">
                                  <p className="comment-desc">
                                    Exchange with Infinix Hot 11s Media tak
                                    Helio G88 Pubg master??
                                  </p>
                                </div>
                              </div>
                            </div>

                            <button className="reply-btn">Reply</button>
                            {/* <div className="wrapper-rep-like-dis">
                            <button className="reply-btn">Reply</button>
                            <div className="like-btn-count">
                              <Icon className="like-ico" icon="ant-design:like-filled" />
                              <h6 className="like-ico-count">12</h6>
                            </div>
                            <div className="like-btn-count">
                              <Icon className="dislike-ico" icon="ant-design:like-filled" />
                              <h6>0</h6>
                            </div>
                          </div> */}
                          </div>

                          <div className="forborborderbottom"></div>
                        </div>
                        <div className="comment-wrapper">
                          <div
                            className={
                              tabletWidth || mobileWidth
                                ? "align-items-start justify-content-between"
                                : "d-flex align-items-start justify-content-between"
                            }
                          >
                            <div
                              className={
                                tabletWidth || mobileWidth
                                  ? "align-items-center"
                                  : "d-flex align-items-center"
                              }
                            >
                              <img
                                className="comment-av-real"
                                src="../../assets/images/av1.png"
                                alt=""
                              />
                              <div className="comment-prof-info">
                                <h3 className="prof-tit">Ahsan Khan</h3>
                                <h6 className="daysago">3 days ago </h6>

                                <p className="comment-desc">
                                  Exchange with Infinix Hot 11s Media tak Helio
                                  G88 Pubg master??
                                </p>
                              </div>
                            </div>
                            <div className="wrapper-rep-like-dis">
                              <button className="reply-btn">Reply</button>
                              <div className="like-btn-count">
                                <Icon
                                  className="like-ico"
                                  icon="ant-design:like-filled"
                                />
                                <h6 className="like-ico-count">12</h6>
                              </div>
                              <div className="like-btn-count">
                                <Icon
                                  className="dislike-ico"
                                  icon="ant-design:like-filled"
                                />
                                <h6>0</h6>
                              </div>
                            </div>
                          </div>

                          <div className="forborborderbottom"></div>
                        </div>
                        <div className="comment-wrapper">
                          <div
                            className={
                              tabletWidth || mobileWidth
                                ? "align-items-start justify-content-between"
                                : "d-flex align-items-start justify-content-between"
                            }
                          >
                            <div
                              className={
                                tabletWidth || mobileWidth
                                  ? "align-items-center"
                                  : "d-flex align-items-center"
                              }
                            >
                              <img
                                className="comment-av-real"
                                src="../../assets/images/av1.png"
                                alt=""
                              />
                              <div className="comment-prof-info">
                                <h3 className="prof-tit">Ahsan Khan</h3>
                                <h6 className="daysago">3 days ago </h6>

                                <p className="comment-desc">
                                  Exchange with Infinix Hot 11s Media tak Helio
                                  G88 Pubg master??
                                </p>
                              </div>
                            </div>
                            <div className="wrapper-rep-like-dis">
                              <button className="reply-btn">Reply</button>
                              <div className="like-btn-count">
                                <Icon
                                  className="like-ico"
                                  icon="ant-design:like-filled"
                                />
                                <h6 className="like-ico-count">12</h6>
                              </div>
                              <div className="like-btn-count">
                                <Icon
                                  className="dislike-ico"
                                  icon="ant-design:like-filled"
                                />
                                <h6>0</h6>
                              </div>
                            </div>
                          </div>

                          <div className="forborborderbottom"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              )}
            </div>

            <BlogSidebar />
          </div>
        </div>
      </section>



      <Footer />
    </>
  );
};
export default Blogdetails;
