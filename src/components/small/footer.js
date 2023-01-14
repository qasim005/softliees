import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { IsMobileWidth, IsTabletWidth } from '../utils';

const Footer = () => {
    const mobileWidth = IsMobileWidth()
    const tabletWidth = IsTabletWidth()
    return (
        <>   {tabletWidth
            ?
            <footer className={mobileWidth ? 'pb-5 mb-4' : ""}>
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <img className='logo-img' src="../../assets/images/softliee.png" alt='logo' />
                                <p className='bottom-para'>
                                    Softliee is an online mobile phone web where you can discover latest and updated mobile prices in Pakistan.
                                    Softliee team tries to share proper features and specifications along with mobile prices in Pakistan.
                                </p>
                            </div>
                            <div className="col-sm-8">
                                <div className="footer-links-wrap">
                                    <div id="f-first" className="firs-col-fl">
                                        <h3 className="footer-tit">
                                            softliee
                                        </h3>
                                        <ul className="footer-nav">
                                            <li className="single-nav-li">
                                                <a href="/blog" className="single-nav-a"><ChevronRightIcon className="footer-chevron-right" /> Our Blog</a>
                                            </li>
                                            <li className="single-nav-li">
                                                <a href="/contact" className="single-nav-a"><ChevronRightIcon className="footer-chevron-right" /> Contact Us</a>
                                            </li>
                                            <li className="single-nav-li">
                                                <a href="/advertise" className="single-nav-a"><ChevronRightIcon className="footer-chevron-right" /> Advertise with us</a>
                                            </li>
                                            <li className="single-nav-li">
                                                <a href="/privacypolicy" className="single-nav-a"><ChevronRightIcon className="footer-chevron-right" /> Privacy Policy</a>
                                            </li>
                                            <li className="single-nav-li">
                                                <a href="/termsandconditions" className="single-nav-a"><ChevronRightIcon className="footer-chevron-right" /> Terms & Conditions</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div id="second-col-ft" className="second-col-fl">
                                        <h3 className="footer-tit">
                                            Top Brands
                                        </h3>
                                        <div className="flex justify-content-around">
                                            <ul className="footer-nav for-padd-right">
                                                <li className="single-nav-li">
                                                    <a href="#" className="single-nav-a"><ChevronRightIcon className="footer-chevron-right" />Apple</a>
                                                </li>
                                                <li className="single-nav-li">
                                                    <a href="#" className="single-nav-a"><ChevronRightIcon className="footer-chevron-right" />Samsung</a>
                                                </li>
                                                <li className="single-nav-li">
                                                    <a href="#" className="single-nav-a"><ChevronRightIcon className="footer-chevron-right" />Huawei</a>
                                                </li>
                                                <li className="single-nav-li">
                                                    <a href="#" className="single-nav-a"><ChevronRightIcon className="footer-chevron-right" />Oppo</a>
                                                </li>
                                                <li className="single-nav-li">
                                                    <a href="#" className="single-nav-a"><ChevronRightIcon className="footer-chevron-right" /> Realme</a>
                                                </li>
                                            </ul>
                                            <ul className="footer-nav">
                                                <li className="single-nav-li">
                                                    <a href="#" className="single-nav-a"><ChevronRightIcon className="footer-chevron-right" />Infinix</a>
                                                </li>
                                                <li className="single-nav-li">
                                                    <a href="#" className="single-nav-a"><ChevronRightIcon className="footer-chevron-right" />Honor</a>
                                                </li>
                                                <li className="single-nav-li">
                                                    <a href="#" className="single-nav-a"><ChevronRightIcon className="footer-chevron-right" /> Honor</a>
                                                </li>
                                                <li className="single-nav-li">
                                                    <a href="#" className="single-nav-a"><ChevronRightIcon className="footer-chevron-right" /> Techno</a>
                                                </li>
                                                <li className="single-nav-li">
                                                    <a href="#" className="single-nav-a"><ChevronRightIcon className="footer-chevron-right" />Vivo</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="third-col-fl">
                                        <h3 className="footer-tit">
                                            Sections
                                        </h3>
                                        <ul className="footer-nav">
                                            <li className="single-nav-li">
                                                <a href="#" className="single-nav-a"><ChevronRightIcon className="footer-chevron-right" /> Trending Mobiles</a>
                                            </li>
                                            <li className="single-nav-li">
                                                <a href="#" className="single-nav-a"><ChevronRightIcon className="footer-chevron-right" /> Upcoming Mobiles</a>
                                            </li>
                                            <li className="single-nav-li">
                                                <a href="#" className="single-nav-a"><ChevronRightIcon className="footer-chevron-right" /> Compare Mobile</a>
                                            </li>
                                            <li className="single-nav-li">
                                                <a href="#" className="single-nav-a"><ChevronRightIcon className="footer-chevron-right" /> Find Phone</a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <h3 className="footer-tit donwload-app">
                                    Download App
                                </h3>
                                <a href="https://play.google.com/store/apps/details?id=com.mobilestore.softliee&hl" target="_blank">  <img className='playstore-img' src="../../assets/images/icons/playstore.png" alt='logo' /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="forborder-top">

                            <div className="row align-items-center">


                                <div className="col-sm-6">
                                    <p className='foot-bottom-txt'>Softliee Pakistan © 2023 All Rights Reserved <span style={{ color: '#EE2835' }}>Softliee.com</span></p>
                                </div>
                                <div className="col-sm-6">
                                    <div className="footer-icons-wrapp">

                                        <div className="foot-icons">
                                            <a href="https://www.facebook.com/softliee/" target="_blank"> <FacebookRoundedIcon /></a>
                                            <a href="https://www.youtube.com/channel/UCui5-jNud8arKsWsbt3WqeQ" target="_blank">  <YouTubeIcon /></a>
                                            <a href="https://pk.linkedin.com/showcase/softliee" target="_blank">  <LinkedInIcon /></a>
                                            <a href="https://www.pinterest.com/softliee/" target="_blank"> <PinterestIcon /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </footer>

            :

            <footer className={mobileWidth ? 'pb-5 mb-4' : ""}>
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-3">
                                <img className='logo-img' src="../../assets/images/softliee.png" alt='logo' />
                                <p className='bottom-para'>
                                    Softliee is an online mobile phone web where you can discover latest and updated mobile prices in Pakistan.
                                    Softliee team tries to share proper features and specifications along with mobile prices in Pakistan.
                                </p>
                            </div>
                            <div className="col-sm-7">
                                <div className="footer-links-wrap">
                                    <div id="f-first" className="firs-col-fl">
                                        <h3 className="footer-tit">
                                            softliee
                                        </h3>
                                        <ul className="footer-nav">
                                            <li className="single-nav-li">
                                                <a href="/blog" className="single-nav-a"><ChevronRightIcon className="footer-chevron-right" /> Our Blog</a>
                                            </li>
                                            <li className="single-nav-li">
                                                <a href="/contact" className="single-nav-a"><ChevronRightIcon className="footer-chevron-right" /> Contact Us</a>
                                            </li>
                                            <li className="single-nav-li">
                                                <a href="/advertise" className="single-nav-a"><ChevronRightIcon className="footer-chevron-right" /> Advertise with us</a>
                                            </li>
                                            <li className="single-nav-li">
                                                <a href="/privacypolicy" className="single-nav-a"><ChevronRightIcon className="footer-chevron-right" /> Privacy Policy</a>
                                            </li>
                                            <li className="single-nav-li">
                                                <a href="/termsandconditions" className="single-nav-a"><ChevronRightIcon className="footer-chevron-right" /> Terms & Conditions</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div id="second-col-ft" className="second-col-fl">
                                        <h3 className="footer-tit">
                                            Top Brands
                                        </h3>
                                        <div className="flex justify-content-around">
                                            <ul className="footer-nav for-padd-right">
                                                <li className="single-nav-li">
                                                    <a href="#" className="single-nav-a"><ChevronRightIcon className="footer-chevron-right" />Apple</a>
                                                </li>
                                                <li className="single-nav-li">
                                                    <a href="#" className="single-nav-a"><ChevronRightIcon className="footer-chevron-right" />Samsung</a>
                                                </li>
                                                <li className="single-nav-li">
                                                    <a href="#" className="single-nav-a"><ChevronRightIcon className="footer-chevron-right" />Huawei</a>
                                                </li>
                                                <li className="single-nav-li">
                                                    <a href="#" className="single-nav-a"><ChevronRightIcon className="footer-chevron-right" />Oppo</a>
                                                </li>
                                                <li className="single-nav-li">
                                                    <a href="#" className="single-nav-a"><ChevronRightIcon className="footer-chevron-right" /> Realme</a>
                                                </li>
                                            </ul>
                                            <ul className="footer-nav">
                                                <li className="single-nav-li">
                                                    <a href="#" className="single-nav-a"><ChevronRightIcon className="footer-chevron-right" />Infinix</a>
                                                </li>
                                                <li className="single-nav-li">
                                                    <a href="#" className="single-nav-a"><ChevronRightIcon className="footer-chevron-right" />Honor</a>
                                                </li>
                                                <li className="single-nav-li">
                                                    <a href="#" className="single-nav-a"><ChevronRightIcon className="footer-chevron-right" /> Honor</a>
                                                </li>
                                                <li className="single-nav-li">
                                                    <a href="#" className="single-nav-a"><ChevronRightIcon className="footer-chevron-right" /> Techno</a>
                                                </li>
                                                <li className="single-nav-li">
                                                    <a href="#" className="single-nav-a"><ChevronRightIcon className="footer-chevron-right" />Vivo</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="third-col-fl">
                                        <h3 className="footer-tit">
                                            Sections
                                        </h3>
                                        <ul className="footer-nav">
                                            <li className="single-nav-li">
                                                <a href="/new-mobile/trending-mobiles" className="single-nav-a"><ChevronRightIcon className="footer-chevron-right" /> Trending Mobiles</a>
                                            </li>
                                            <li className="single-nav-li">
                                                <a href="/upcomingphones" className="single-nav-a"><ChevronRightIcon className="footer-chevron-right" /> Upcoming Mobiles</a>
                                            </li>
                                            <li className="single-nav-li">
                                                <a href="/compare-mobile-phone" className="single-nav-a"><ChevronRightIcon className="footer-chevron-right" /> Compare Mobile</a>
                                            </li>
                                            <li className="single-nav-li">
                                                <a href="/phonefinder" className="single-nav-a"><ChevronRightIcon className="footer-chevron-right" /> Find Phone</a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <h3 className="footer-tit donwload-app">
                                    Download App
                                </h3>
                                <a href="https://play.google.com/store/apps/details/?id=com.mobilestore.softliee&hl" target="_blank">  <img className='playstore-img' src="../../assets/images/icons/playstore.png" alt='logo' /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="forborder-top">

                            <div className="row align-items-center">


                                <div className="col-sm-6">
                                    <p className='foot-bottom-txt'>Softliee Pakistan © 2023 All Rights Reserved <span style={{ color: '#EE2835' }}>Softliee.com</span></p>
                                </div>
                                <div className="col-sm-6">
                                    <div className="footer-icons-wrapp">

                                        <div className="foot-icons">
                                            <a href="https://www.facebook.com/softliee/" target="_blank"> <FacebookRoundedIcon /></a>
                                            <a href="https://www.youtube.com/channel/UCui5-jNud8arKsWsbt3WqeQ" target="_blank">  <YouTubeIcon /></a>
                                            <a href="https://pk.linkedin.com/showcase/softliee" target="_blank">  <LinkedInIcon /></a>
                                            <a href="https://www.pinterest.com/softliee/" target="_blank"> <PinterestIcon /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </footer>}
        </>
    )
}
export default Footer