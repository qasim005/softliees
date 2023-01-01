import { NotificationsNone, Upcoming } from "@mui/icons-material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { IsMobileWidth, IsTabletWidth } from "../utils";
import PopularMobiles from "./popularmobiles";
import UpcomingPhones from "../upcomingPhones";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMaxCountBlog } from "../../redux/actions/app.actions";

const BlogSidebar = () => {
  const mobileWidth = IsMobileWidth();
  const tabletWidth = IsTabletWidth();
  const dispatch = useDispatch();
  const { maxCountBlog } = useSelector((selectSate) => selectSate.app);

  useEffect(() => {
    if (!maxCountBlog?.data && !maxCountBlog?.loading) {
      dispatch(getMaxCountBlog());
    }
    console.log(maxCountBlog);
  }, []);

  return (
    <>
      {tabletWidth ? (
        <div className="col-sm-3 ps-0 blog-sidebar">
          <div className="w-100 d-flex justify-content-center">
            <img
              src="../../assets/images/blog/ss.png"
              alt=""
              className="img-fluid for-margin-blog-ad"
            />
          </div>

          <div className="d-flex align-item-center justify-content-between">
            <h3 className="main-tit">Tech News</h3>
            <button className="seemoreebss" href="#">
              See More
            </button>
          </div>
          {maxCountBlog?.data?.blogs &&
            maxCountBlog?.data?.blogs.map((data) => (
              <div class="side_mobile_section side">
                <div class="side_mobile_Col">
                  <center>
                    <img
                      class="tech-news-img img-fluid"
                      src={`https://softliee.com/softlee/public/storage/blogs/${data?.image}`}
                      height="88px"
                    />
                  </center>
                </div>
                <div class="side_mobile_Col">
                  <div class="side_col_titles">{data?.title}</div>
                </div>
              </div>
            ))}

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
            <div className="w-100 d-flex justify-content-center">
              <img
                src="../../assets/images/blog/ss.png"
                alt=""
                className="img-fluid for-margin-blog-ad ad-between"
              />
            </div>
          )}
          {mobileWidth && <PopularMobiles title="More Mobiles" fourItems />}

          {mobileWidth ? (
            <>
              <div class="main-tit browsebyb-tit mt-5">Browse By Budget</div>
              <div class="tags_Sections budget mb-5">
                <div class="btn tags budget-range">Under 15,000</div>
                <div class="btn tags budget-range">Under 25,000</div>
                <div class="btn tags budget-range">Under 35,000</div>
                <div class="btn tags budget-range">Under 45,000</div>
                <div class="btn tags budget-range">Under 65,000</div>
                <div class="btn tags budget-range">Under 85,000</div>
                <div class="btn tags budget-range">Under 115,000</div>
              </div>
            </>
          ) : (
            <>
              <div class="main-tit browsebyb-tit mt-5">Browse By Budget</div>
              <div class="tags_Section budget mb-5">
                <div class="btn tags budget-range">Under 15,000</div>
                <div class="btn tags budget-range">Under 25,000</div>
                <div class="btn tags budget-range">Under 35,000</div>
                <div class="btn tags budget-range">Under 45,000</div>
                <div class="btn tags budget-range">Under 65,000</div>
                <div class="btn tags budget-range">Under 85,000</div>
                <div class="btn tags budget-range">Under 115,000</div>
              </div>
            </>
          )}
          <div className="w-100 d-flex justify-content-center">
            <img
              src="../../assets/images/blog/ss.png"
              alt=""
              className="img-fluid last-ad-blog"
            />
          </div>
        </div>
      ) : (
        <div className="col-sm-3 ps-0 blog-sidebar">
          <div className="w-100 d-flex justify-content-center">
            <img
              src="../../assets/images/blog/ss.png"
              alt=""
              className="img-fluid for-margin-blog-ad"
            />
          </div>

          <div className="d-flex align-item-center justify-content-between">
            <h3 className="main-tit">Tech New</h3>
            <button className="seemoreeb" href="#">
              See More <ChevronRightIcon className="btn-chev" />
            </button>
          </div>
          {maxCountBlog?.data?.blogs &&
            maxCountBlog?.data?.blogs.map((data, index) => {
              if (index < 5) {
                return (
                  <>
                    <div class="side_mobile_section side">
                      <div class="side_mobile_Col">
                        <center>
                          <img
                            class="tech-news-img img-fluid"
                            src={`https://softliee.com/softlee/public/storage/blogs/${data?.image}`}
                          />
                        </center>
                      </div>
                      <div class="side_mobile_Col">
                        <div class="side_col_title">{data?.title}</div>
                      </div>
                    </div>
                  </>
                );
              }
            })}

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
            <div className="w-100 d-flex justify-content-center">
              <img
                src="../../assets/images/blog/ss.png"
                alt=""
                className="img-fluid for-margin-blog-ad ad-between"
              />
            </div>
          )}

          <>
            <UpcomingPhones />
          </>
          {/* )} */}

          {mobileWidth ? (
            <>
              <div class="main-tit browsebyb-tit mt-5">Browse By Budget</div>
              <div class="tags_Sections budget mb-5">
                <div class="btn tags budget-range">Under 15,000</div>
                <div class="btn tags budget-range">Under 25,000</div>
                <div class="btn tags budget-range">Under 35,000</div>
                <div class="btn tags budget-range">Under 45,000</div>
                <div class="btn tags budget-range">Under 65,000</div>
                <div class="btn tags budget-range">Under 85,000</div>
                <div class="btn tags budget-range">Under 115,000</div>
              </div>
            </>
          ) : (
            <>
              <div class="main-tit browsebyb-tit mt-5">Browse By Budget</div>
              <div class="tags_Section budget mb-5">
                <div class="btn tags budget-range">Under 15,000</div>
                <div class="btn tags budget-range">Under 25,000</div>
                <div class="btn tags budget-range">Under 35,000</div>
                <div class="btn tags budget-range">Under 45,000</div>
                <div class="btn tags budget-range">Under 65,000</div>
                <div class="btn tags budget-range">Under 85,000</div>
                <div class="btn tags budget-range">Under 115,000</div>
              </div>
            </>
          )}
          <div className="w-100 d-flex justify-content-center">
            <img
              src="../../assets/images/blog/ss.png"
              alt=""
              className="img-fluid last-ad-blog"
            />
          </div>
        </div>
      )}
    </>
  );
};
export default BlogSidebar;
