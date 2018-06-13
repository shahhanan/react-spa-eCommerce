import React, { Component } from "react";
class BgImage extends Component {
  render(props) {
    return (
      <div
        className="divimage dzsparallaxer--target w-100 g-bg-pos-top-center"
        style={{ backgroundImage: `url(${this.props.imageUrl})` }}
      />
    );
  }
}

function IconsNav(props) {
  return (
    <div className=" u-header--static u-shadow-v19">
      <div className="u-header__section g-brd-bottom g-brd-gray-light-v4 g-bg-custom g-transition-0_3">
        <div className="container">
          <div className="row justify-content-between align-items-center g-mx-0--lg">
            <div className="col-auto g-hidden-sm-down">
              <ul className="list-inline g-py-14 mb-0">
                <li className="list-inline-item">
                  <a
                    className="g-color-white-opacity-0_8 g-color-primary--hover g-pa-3 "
                    href="https://facebook.com/spa-prototype"
                  >
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="g-color-white-opacity-0_8 g-color-primary--hover g-pa-3"
                    href="#"
                  >
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="g-color-white-opacity-0_8 g-color-primary--hover g-pa-3"
                    href="#"
                  >
                    <i className="fa fa-tumblr" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="g-color-white-opacity-0_8 g-color-primary--hover g-pa-3"
                    href="#"
                  >
                    <i className="fa fa-pinterest-p" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="g-color-white-opacity-0_8 g-color-primary--hover g-pa-3"
                    href="#"
                  >
                    <i className="fa fa-google" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-auto g-hidden-xs-down g-color-white-opacity-0_6 g-font-weight-400 g-pl-15 g-pl-0--sm g-py-14">
              <i className="fa fa-mobile fa-1.5x" aria-hidden="true" />
              &nbsp; 8 800 1234 4321
            </div>
            <div className="col-auto g-pos-rel g-py-14">
              <ul className="list-inline g-overflow-hidden g-pt-1 mb-0">
                <li className="list-inline-item">
                  <a
                    id="currency-dropdown-invoker-2"
                    className="g-color-white-opacity-0_6 g-color-primary--hover g-font-weight-400 g-text-underline--none--hover"
                    href="#"
                  >
                    <i className="g-ml-20 mr-2 fa fa-euro" />
                    Euro
                  </a>
                  <ul
                    id="currency-dropdown-2"
                    className="list-unstyled u-shadow-v29 g-pos-abs g-left-0 g-bg-white g-width-160 g-pb-5 g-mt-19 g-z-index-2 u-dropdown--css-animation u-dropdown--hidden"
                  >
                    <li>
                      <a
                        className="d-block g-color-black g-color-primary--hover g-text-underline--none--hover g-font-weight-400 g-py-5 g-px-20"
                        href="#"
                      >
                        <i className="mr-2 fa fa-euro" />
                        Euro
                      </a>
                    </li>
                    <li>
                      <a
                        className="d-block g-color-black g-color-primary--hover g-text-underline--none--hover g-font-weight-400 g-py-5 g-px-20"
                        href="#"
                      >
                        <i className="mr-2 fa fa-dollar" />
                        US Dollars
                      </a>
                    </li>
                    <li>
                      <a
                        className="d-block g-color-black g-color-primary--hover g-text-underline--none--hover g-font-weight-400 g-py-5 g-px-20"
                        href="#"
                      >
                        <i className="mr-2 fa fa-gbp" />
                        GBP
                      </a>
                    </li>
                    <li>
                      <a
                        className="d-block g-color-black g-color-primary--hover g-text-underline--none--hover g-font-weight-400 g-py-5 g-px-20"
                        href="#"
                      >
                        <i className="mr-2 fa fa-yen" />
                        Yen
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="list-inline-item g-color-white-opacity-0_3 g-mx-4">
                  |
                </li>

                <li className="list-inline-item">
                  <a
                    id="languages-dropdown-invoker-2"
                    className="g-color-white-opacity-0_6 g-color-primary--hover g-font-weight-400 g-text-underline--none--hover"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="11"
                      width="27"
                      viewBox="0 0 640 480"
                    >
                      <defs>
                        <clipPath id="a">
                          <path d="M-85.333 0h682.67v512h-682.67z" />
                        </clipPath>
                      </defs>
                      <g
                        clipPath="url(#a)"
                        transform="translate(80) scale(.94)"
                      >
                        <g strokeWidth="1pt">
                          <path fill="#006" d="M-256 0H768.02v512.01H-256z" />
                          <path
                            d="M-256 0v57.244l909.535 454.768H768.02V454.77L-141.515 0H-256zM768.02 0v57.243L-141.515 512.01H-256v-57.243L653.535 0H768.02z"
                            fill="#fff"
                          />
                          <path
                            d="M170.675 0v512.01h170.67V0h-170.67zM-256 170.67v170.67H768.02V170.67H-256z"
                            fill="#fff"
                          />
                          <path
                            d="M-256 204.804v102.402H768.02V204.804H-256zM204.81 0v512.01h102.4V0h-102.4zM-256 512.01L85.34 341.34h76.324l-341.34 170.67H-256zM-256 0L85.34 170.67H9.016L-256 38.164V0zm606.356 170.67L691.696 0h76.324L426.68 170.67h-76.324zM768.02 512.01L426.68 341.34h76.324L768.02 473.848v38.162z"
                            fill="#c00"
                          />
                        </g>
                      </g>
                    </svg>
                    English
                  </a>
                  <ul
                    id="languages-dropdown-2"
                    className="list-unstyled u-shadow-v29 g-pos-abs g-bg-white g-width-160 g-pb-5 g-mt-19 g-z-index-2 u-dropdown--css-animation u-dropdown--hidden"
                  >
                    <li>
                      <a
                        className="d-block g-color-black g-color-primary--hover g-text-underline--none--hover g-font-weight-400 g-py-5 g-px-20"
                        href="#"
                      >
                        <svg
                          className="mr-1 g-ml-minus-10"
                          xmlns="http://www.w3.org/2000/svg"
                          height="11"
                          width="27"
                          viewBox="0 0 640 480"
                        >
                          <defs>
                            <clipPath id="a">
                              <path
                                fillOpacity=".67"
                                d="M-85.333 0h682.67v512h-682.67z"
                              />
                            </clipPath>
                          </defs>
                          <g
                            clipPath="url(#a)"
                            transform="translate(80) scale(.94)"
                          >
                            <g strokeWidth="1pt">
                              <path
                                fill="#006"
                                d="M-256 0H768.02v512.01H-256z"
                              />
                              <path
                                d="M-256 0v57.244l909.535 454.768H768.02V454.77L-141.515 0H-256zM768.02 0v57.243L-141.515 512.01H-256v-57.243L653.535 0H768.02z"
                                fill="#fff"
                              />
                              <path
                                d="M170.675 0v512.01h170.67V0h-170.67zM-256 170.67v170.67H768.02V170.67H-256z"
                                fill="#fff"
                              />
                              <path
                                d="M-256 204.804v102.402H768.02V204.804H-256zM204.81 0v512.01h102.4V0h-102.4zM-256 512.01L85.34 341.34h76.324l-341.34 170.67H-256zM-256 0L85.34 170.67H9.016L-256 38.164V0zm606.356 170.67L691.696 0h76.324L426.68 170.67h-76.324zM768.02 512.01L426.68 341.34h76.324L768.02 473.848v38.162z"
                                fill="#c00"
                              />
                            </g>
                          </g>
                        </svg>
                        English
                      </a>
                    </li>
                    <li>
                      <a
                        className="d-block g-color-black g-color-primary--hover g-text-underline--none--hover g-font-weight-400 g-py-5 g-px-20"
                        href="#"
                      >
                        <svg
                          className="mr-1 g-ml-minus-10"
                          xmlns="http://www.w3.org/2000/svg"
                          height="11"
                          width="27"
                          viewBox="0 0 640 480"
                        >
                          <g strokeWidth="1pt" fillRule="evenodd">
                            <path fill="#fff" d="M0 0h640v480H0z" />
                            <path fill="#00267f" d="M0 0h213.33v480H0z" />
                            <path
                              fill="#f31830"
                              d="M426.67 0H640v480H426.67z"
                            />
                          </g>
                        </svg>
                        Spanish
                      </a>
                    </li>
                    <li>
                      <a
                        className="d-block g-color-black g-color-primary--hover g-text-underline--none--hover g-font-weight-400 g-py-5 g-px-20"
                        href="#"
                      >
                        <svg
                          className="mr-1 g-ml-minus-10"
                          xmlns="http://www.w3.org/2000/svg"
                          height="11"
                          width="27"
                          viewBox="0 0 640 480"
                        >
                          <g fillRule="evenodd" strokeWidth="1pt">
                            <path fill="#fff" d="M0 0h640v480H0z" />
                            <path fill="#0039a6" d="M0 160.003h640V480H0z" />
                            <path fill="#d52b1e" d="M0 319.997h640V480H0z" />
                          </g>
                        </svg>
                        Russian
                      </a>
                    </li>
                    <li>
                      <a
                        className="d-block g-color-black g-color-primary--hover g-text-underline--none--hover g-font-weight-400 g-py-5 g-px-20"
                        href="#"
                      >
                        <svg
                          className="mr-1 g-ml-minus-10"
                          xmlns="http://www.w3.org/2000/svg"
                          height="11"
                          width="27"
                          viewBox="0 0 640 480"
                        >
                          <path fill="#ffce00" d="M0 320h640v160.002H0z" />
                          <path d="M0 0h640v160H0z" />
                          <path fill="#d00" d="M0 160h640v160H0z" />
                        </svg>
                        German
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col-auto g-pos-rel g-py-14">
              <ul className="list-inline g-overflow-hidden g-pt-1 g-mx-minus-4 mb-0">
                <li className="list-inline-item g-mx-4">
                  <a
                    className="g-color-white-opacity-0_6 g-color-primary--hover g-font-weight-400 g-text-underline--none--hover"
                    href="#stores"
                  >
                    Our Stores
                  </a>
                </li>

                <li className="list-inline-item g-color-white-opacity-0_3 g-mx-4">
                  |
                </li>
                <li className="list-inline-item g-mx-4">
                  <a
                    className="g-color-white-opacity-0_6 g-color-primary--hover g-font-weight-400 g-text-underline--none--hover"
                    href="#help"
                  >
                    Help
                  </a>
                </li>

                <li className="list-inline-item g-color-white-opacity-0_3 g-mx-4">
                  |
                </li>

                <li className="list-inline-item">
                  <a
                    id="account-dropdown-invoker-2"
                    className="g-color-white-opacity-0_6 g-color-primary--hover g-font-weight-400 g-text-underline--none--hover"
                    href="#account"
                  >
                    Account
                  </a>
                  <ul
                    id="account-dropdown-2"
                    className="list-unstyled u-shadow-v29 g-pos-abs g-bg-white g-width-160 g-pb-5 g-mt-19 g-z-index-2 u-dropdown--css-animation u-dropdown--hidden"
                  >
                    <li>
                      <a
                        className="d-block g-color-black g-color-primary--hover g-text-underline--none--hover g-font-weight-400 g-py-5 g-px-20"
                        href="#"
                      >
                        Login
                      </a>
                    </li>
                    <li>
                      <a
                        className="d-block g-color-black g-color-primary--hover g-text-underline--none--hover g-font-weight-400 g-py-5 g-px-20"
                        href="#"
                      />
                      Signup
                    </li>
                    <li>
                      <a
                        className="d-block g-color-black g-color-primary--hover g-text-underline--none--hover g-font-weight-400 g-py-5 g-px-20"
                        href="#"
                      />
                      Wishlist
                    </li>
                    <li>
                      <a
                        className="d-block g-color-black g-color-primary--hover g-text-underline--none--hover g-font-weight-400 g-py-5 g-px-20"
                        href="#"
                      />
                      Your Orders
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function MenuNav(props) {
  return (
    <div className="u-header__section u-header__section--light g-bg-custom g-transition-0_3 g-py-10">
      <nav className="js-mega-menu navbar navbar-expand-lg hs-menu-initialized hs-menu-horizontal">
        <div className="container">
          <a className="navbar-brand" href="#root">
            <img src="./assets/images/mulesoft.png" alt="" />
            {/* logo of the website here */}
          </a>

          <div
            id="navBar"
            className="collapse navbar-collapse align-items-center flex-sm-row g-pt-15 g-pt-0--lg"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item hs-has-sub-menu g-mx-10--lg g-mx-15--xl">
                <a
                  id="nav-link--home"
                  className="nav-link text-uppercase g-color-primary--hover g-px-5 g-py-20"
                  href="#"
                >
                  Home
                </a>
              </li>

              <li className="nav-item hs-has-sub-menu g-mx-10--lg g-mx-15--xl">
                <a
                  id="nav-link--pages"
                  className="nav-link text-uppercase g-color-primary--hover g-px-5 g-py-20"
                  href="#"
                >
                  Pages
                </a>
              </li>

              <li className="hs-has-mega-menu nav-item g-mx-10--lg g-mx-15--xl">
                <a
                  id="mega-menu-label-3"
                  className="nav-link text-uppercase g-color-primary--hover g-px-5 g-py-20"
                  href="#"
                >
                  Categories
                  <i className="hs-icon hs-icon-arrow-bottom g-font-size-11 g-ml-7" />
                </a>
              </li>

              <li className="hs-has-mega-menu nav-item g-ml-10--lg g-ml-15--xl">
                <a
                  id="mega-menu-label-5"
                  className="nav-link text-uppercase g-color-primary--hover g-px-5 g-py-20"
                  href="#"
                >
                  New Arrivals
                  <i className="hs-icon hs-icon-arrow-bottom g-font-size-11 g-ml-7" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
function ImageDiv(props) {
  return (
    <section
      className="dzsparallaxer auto-init height-is-based-on-content use-loading mode-scroll loaded dzsprx-readyall"
      data-options="{direction: &quot;fromtop&quot;, animation_duration: 25, direction: &quot;reverse&quot;}"
    >
      <BgImage imageUrl="'./assets/images/l3.jpg'" />

      <div className="containert g-color-white g-pt-100 g-pb-40">
        <div className="g-mb-50">
          <h3 className="g-color-white g-font-size-50 g-font-size-50--md g-line-height-1_2 mb-0 pp126">
            some content here.
          </h3>
          <p className="g-color-white  g-font-weight-600 g-font-size-20 text-uppercase pp126">
           some more content here
          </p>
        </div>
      </div>
    </section>
  );
}
class Header extends Component {
  render() {
    return (
      <div>
        <IconsNav />
        <MenuNav />
        <ImageDiv />
      </div>
    );
  }
}

export default Header;
