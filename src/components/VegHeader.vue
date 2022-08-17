<template>
  <div>
    <header class="header">
      <div class="header-top">
        <div class="mobile-header d-flex justify-content-between align-items-center d-xl-none">
          <!-- <div class="d-flex align-items-center">
                    <div class="all-catagory-option mobile-device">
                        <a class="bar-btn"><i class="fas fa-bars"></i>All Catagories</a>
                        <a class="close-btn"><i class="fas fa-times"></i>All Catagories</a>
                    </div>
                    <a href="index.html" class="logo"><img src="assets/images/logo.png" alt="logo"></a>
                </div> -->

          <div class="all-catagory-option mobile-device">
            <a class="bar-btn"><i class="fas fa-bars"></i><span class="ml-2 d-none d-md-inline">All Catagories</span></a>
            <a class="close-btn"><i class="fas fa-times"></i><span class="ml-2 d-none d-md-inline">All Catagories</span></a>
          </div>
          <a href="index.html" class="logo"><img src="../assets/images/logo.png" alt="logo" /></a>

          <!-- search select -->
          <div class="text-center mobile-search">
            <button type="button" data-toggle="modal" data-target="#search-select-id"><i class="fas fa-search"></i></button>
          </div>

          <!-- menubar -->
          <div>
            <button class="menu-bar" type="button" data-toggle="modal" data-target="#menu-id">Home<i class="fas fa-caret-down"></i></button>
          </div>
        </div>
        <div class="d-none d-xl-flex row align-items-center">
          <div class="col-5 col-md-2">
            <a href="index.html" class="logo"><img src="../assets/images/logo.png" alt="logo" /></a>
          </div>
          <div class="col-5 col-md-9 col-lg-5">
            <div class="select-search-option d-none d-md-flex">
              <form action="#" class="search-form">
                <input type="text" name="search" placeholder="Search for Products" />
                <button class="submit-btn"><i class="fas fa-search"></i></button>
              </form>
            </div>
          </div>
          <div class="col-2 col-md-1 col-lg-5">
            <ul class="site-action d-none d-lg-flex align-items-center justify-content-between ml-auto">
              <li class="site-phone">
                <a href=""><i class="fas fa-phone"></i> 000 000 000</a>
              </li>
              <li class="site-help">
                <a href="#"><i class="fas fa-question-circle"></i> Help & More</a>
              </li>
              <li class="wish-list">
                <a href="wishlist.html"><i class="fas fa-heart"></i> <span class="count">04</span></a>
              </li>
              <li class="my-account d-none">
                <a class="dropdown-toggle" href="#" role="button" id="myaccount" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-user mr-1"></i> My Account</a>
                <ul class="submenu dropdown-menu" aria-labelledby="myaccount">
                  <li><a href="profile.html">Profile</a></li>
                  <li><a href="#">Sign Out</a></li>
                </ul>
              </li>
              <li class="signin-option">
                <a onclick="OpenSignUpForm()" href="#"><i class="fas fa-user mr-2"></i>Sign In</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div class="header-bottom">
        <div class="row m-0 align-items-center">
          <div class="col-md-2 p-0 d-none d-xl-block">
            <div class="all-catagory-option">
              <a class="bar-btn"><i class="fas fa-bars"></i>All Catagories</a>
              <a class="close-btn"><i class="fas fa-times"></i>All Catagories</a>
            </div>
          </div>
          <div class="col-md-10">
            <div class="menu-area d-none d-xl-flex justify-content-between align-items-center">
              <ul class="menu d-xl-flex flex-wrap list-unstyled">
                <li class="item-has-children">
                  <a class="active" href="index.html">Home <i class="fas fa-angle-down"></i></a>
                  <ul class="submenu">
                    <li><a href="home-default.html">Home Default</a></li>
                    <li><a class="active" href="index.html">Home Sticky Sidebar</a></li>
                    <li><a href="home-search.html">Home Search</a></li>
                    <li><a href="home-slider.html">Home Slider</a></li>
                  </ul>
                </li>
                <li><a href="#">New Products</a></li>
                <li class="item-has-mega-menu">
                  <a href="#">Featured Products <i class="fas fa-angle-down"></i></a>
                  <div class="mega-menu-container">
                    <div class="row m-0">
                      <div class="col-lg-3">
                        <div class="ctagory-item">
                          <h6 class="title">Vegetables</h6>
                          <ul>
                            <li><a href="product-list.html">Artichoke.</a></li>
                            <li><a href="product-list.html">Aubergune(eggpiant)</a></li>
                            <li><a href="product-list.html">Asparagus</a></li>
                            <li><a href="product-list.html">Broccoflower(a hyrbid)</a></li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="ctagory-item">
                          <h6 class="title">Frouts</h6>
                          <ul>
                            <li><a href="product-list.html">Artichoke.</a></li>
                            <li><a href="product-list.html">Aubergune(eggpiant)</a></li>
                            <li><a href="product-list.html">Asparagus</a></li>
                            <li><a href="product-list.html">Broccoflower(a hyrbid)</a></li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="ctagory-item">
                          <h6 class="title">Salads</h6>
                          <ul>
                            <li><a href="product-list.html">Artichoke.</a></li>
                            <li><a href="product-list.html">Aubergune(eggpiant)</a></li>
                            <li><a href="product-list.html">Asparagus</a></li>
                            <li><a href="product-list.html">Broccoflower(a hyrbid)</a></li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="ctagory-item">
                          <h6 class="title">Health Care</h6>
                          <ul>
                            <li><a href="product-list.html">Artichoke.</a></li>
                            <li><a href="product-list.html">Aubergune(eggpiant)</a></li>
                            <li><a href="product-list.html">Asparagus</a></li>
                            <li><a href="product-list.html">Broccoflower(a hyrbid)</a></li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="ctagory-item">
                          <h6 class="title">Vegetables</h6>
                          <ul>
                            <li><a href="product-list.html">Artichoke.</a></li>
                            <li><a href="product-list.html">Aubergune(eggpiant)</a></li>
                            <li><a href="product-list.html">Asparagus</a></li>
                            <li><a href="product-list.html">Broccoflower(a hyrbid)</a></li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="ctagory-item">
                          <h6 class="title">Frouts</h6>
                          <ul>
                            <li><a href="product-list.html">Artichoke.</a></li>
                            <li><a href="product-list.html">Aubergune(eggpiant)</a></li>
                            <li><a href="product-list.html">Asparagus</a></li>
                            <li><a href="product-list.html">Broccoflower(a hyrbid)</a></li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="ctagory-item">
                          <h6 class="title">Salads</h6>
                          <ul>
                            <li><a href="product-list.html">Artichoke.</a></li>
                            <li><a href="product-list.html">Aubergune(eggpiant)</a></li>
                            <li><a href="product-list.html">Asparagus</a></li>
                            <li><a href="product-list.html">Broccoflower(a hyrbid)</a></li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="ctagory-item">
                          <h6 class="title">Health Care</h6>
                          <ul>
                            <li><a href="product-list.html">Artichoke.</a></li>
                            <li><a href="product-list.html">Aubergune(eggpiant)</a></li>
                            <li><a href="product-list.html">Asparagus</a></li>
                            <li><a href="product-list.html">Broccoflower(a hyrbid)</a></li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="ctagory-item">
                          <h6 class="title active">Fruits</h6>
                          <ul>
                            <li><a href="product-list.html">Artichoke.</a></li>
                            <li><a href="product-list.html">Aubergune(eggpiant)</a></li>
                            <li><a class="active" href="product-list.html">Asparagus</a></li>
                            <li><a href="product-list.html">Broccoflower(a hyrbid)</a></li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="ctagory-item">
                          <h6 class="title">Vegetables</h6>
                          <ul>
                            <li><a href="product-list.html">Artichoke.</a></li>
                            <li><a href="product-list.html">Aubergune(eggpiant)</a></li>
                            <li><a href="product-list.html">Asparagus</a></li>
                            <li><a href="product-list.html">Broccoflower(a hyrbid)</a></li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="ctagory-item">
                          <h6 class="title">Health Care</h6>
                          <ul>
                            <li><a href="product-list.html">Artichoke.</a></li>
                            <li><a href="product-list.html">Aubergune(eggpiant)</a></li>
                            <li><a href="product-list.html">Asparagus</a></li>
                            <li><a href="product-list.html">Broccoflower(a hyrbid)</a></li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="ctagory-item">
                          <h6 class="title">Fruits</h6>
                          <ul>
                            <li><a href="product-list.html">Artichoke.</a></li>
                            <li><a href="product-list.html">Aubergune(eggpiant)</a></li>
                            <li><a href="product-list.html">Asparagus</a></li>
                            <li><a href="product-list.html">Broccoflower(a hyrbid)</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="item-has-children">
                  <a href="index.html">Pages <i class="fas fa-angle-down"></i></a>
                  <ul class="submenu">
                    <li><a href="about.html">About</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="product-list.html">Product List</a></li>
                    <li><a href="product-leftsidebar.html">Product leftsidebar</a></li>
                    <li><a href="product-fullwidth.html">Product Fullwidth</a></li>
                    <li><a href="product-detail.html">Product Details</a></li>
                    <li><a href="checkout.html">Checkout</a></li>
                    <li><a href="user-dashbord.html">User Dashboard</a></li>
                    <li><a href="profile.html">Profile</a></li>
                    <li><a href="track-order.html">Track Order</a></li>
                  </ul>
                </li>
                <li><a href="#">Blog</a></li>
                <li><a href="contact.html">Contact Us</a></li>
              </ul>
              <ul class="menu-action d-none d-lg-block">
                <li class="cart-option">
                  <a onclick="cartopen()" href="#"
                    ><span class="cart-icon"><i class="fas fa-shopping-cart"></i><span class="count">3</span></span> <span class="cart-amount">$15.00</span></a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- header section end -->

    <div class="page-layout home-layout">
      <div class="catagory-sidebar-area">
        <div class="catagory-sidebar-area-inner">
          <div class="catagory-sidebar all-catagory-option">
            <ul class="catagory-submenu">
              <li>
                <a data-toggle="collapse" href="#catagory-widget1" role="button" aria-expanded="false" aria-controls="catagory-widget1">Vegetables<i class="fas fa-angle-down"></i></a>
                <ul class="catagory-submenu collapse show" id="catagory-widget1">
                  <li><a href="product-list.html">Artichoke.</a></li>
                  <li><a href="product-list.html">Aubergine (eggplant).</a></li>
                  <li><a href="product-list.html">Asparagus.</a></li>
                  <li><a href="product-list.html">Broccoflower (a hybrid).</a></li>
                  <li><a href="product-list.html">Broccoli (calabrese).</a></li>
                </ul>
              </li>
              <li>
                <a data-toggle="collapse" href="#catagory-widget2" role="button" aria-expanded="false" aria-controls="catagory-widget2">Fruits<i class="fas fa-angle-down"></i></a>
                <ul class="catagory-submenu collapse" id="catagory-widget2">
                  <li><a href="product-list.html">Artichoke.</a></li>
                  <li><a href="product-list.html">Aubergine (eggplant).</a></li>
                  <li><a href="product-list.html">Asparagus.</a></li>
                  <li><a href="product-list.html">Broccoflower (a hybrid).</a></li>
                  <li><a href="product-list.html">Broccoli (calabrese).</a></li>
                </ul>
              </li>
              <li>
                <a data-toggle="collapse" href="#catagory-widget3" role="button" aria-expanded="false" aria-controls="catagory-widget3">Salads<i class="fas fa-angle-down"></i></a>
                <ul class="catagory-submenu collapse" id="catagory-widget3">
                  <li><a href="product-list.html">Artichoke.</a></li>
                  <li><a href="product-list.html">Aubergine (eggplant).</a></li>
                  <li><a href="product-list.html">Asparagus.</a></li>
                  <li><a href="product-list.html">Broccoflower (a hybrid).</a></li>
                  <li><a href="product-list.html">Broccoli (calabrese).</a></li>
                </ul>
              </li>
              <li>
                <a data-toggle="collapse" href="#catagory-widget4" role="button" aria-expanded="false" aria-controls="catagory-widget4">Fish & seafood<i class="fas fa-angle-down"></i></a>
                <ul class="catagory-submenu collapse" id="catagory-widget4">
                  <li><a href="product-list.html">Artichoke.</a></li>
                  <li><a href="product-list.html">Aubergine (eggplant).</a></li>
                  <li><a href="product-list.html">Asparagus.</a></li>
                  <li><a href="product-list.html">Broccoflower (a hybrid).</a></li>
                  <li><a href="product-list.html">Broccoli (calabrese).</a></li>
                </ul>
              </li>
              <li>
                <a data-toggle="collapse" href="#catagory-widget5" role="button" aria-expanded="false" aria-controls="catagory-widget5">Fresh Meat<i class="fas fa-angle-down"></i></a>
                <ul class="catagory-submenu collapse" id="catagory-widget5">
                  <li><a href="product-list.html">Artichoke.</a></li>
                  <li><a href="product-list.html">Aubergine (eggplant).</a></li>
                  <li><a href="product-list.html">Asparagus.</a></li>
                  <li><a href="product-list.html">Broccoflower (a hybrid).</a></li>
                  <li><a href="product-list.html">Broccoli (calabrese).</a></li>
                </ul>
              </li>
              <li>
                <a data-toggle="collapse" href="#catagory-widget6" role="button" aria-expanded="false" aria-controls="catagory-widget6">Health Products<i class="fas fa-angle-down"></i></a>
                <ul class="catagory-submenu collapse" id="catagory-widget6">
                  <li><a href="product-list.html">Artichoke.</a></li>
                  <li><a href="product-list.html">Aubergine (eggplant).</a></li>
                  <li><a href="product-list.html">Asparagus.</a></li>
                  <li><a href="product-list.html">Broccoflower (a hybrid).</a></li>
                  <li><a href="product-list.html">Broccoli (calabrese).</a></li>
                </ul>
              </li>
              <li>
                <a data-toggle="collapse" href="#catagory-widget7" role="button" aria-expanded="false" aria-controls="catagory-widget7">Butter & Eggs<i class="fas fa-angle-down"></i></a>
                <ul class="catagory-submenu collapse" id="catagory-widget7">
                  <li><a href="product-list.html">Artichoke.</a></li>
                  <li><a href="product-list.html">Aubergine (eggplant).</a></li>
                  <li><a href="product-list.html">Asparagus.</a></li>
                  <li><a href="product-list.html">Broccoflower (a hybrid).</a></li>
                  <li><a href="product-list.html">Broccoli (calabrese).</a></li>
                </ul>
              </li>
              <li>
                <a data-toggle="collapse" href="#catagory-widget8" role="button" aria-expanded="false" aria-controls="catagory-widget8">Oils and Venegar<i class="fas fa-angle-down"></i></a>
                <ul class="catagory-submenu collapse" id="catagory-widget8">
                  <li><a href="product-list.html">Artichoke.</a></li>
                  <li><a href="product-list.html">Aubergine (eggplant).</a></li>
                  <li><a href="product-list.html">Asparagus.</a></li>
                  <li><a href="product-list.html">Broccoflower (a hybrid).</a></li>
                  <li><a href="product-list.html">Broccoli (calabrese).</a></li>
                </ul>
              </li>
              <li>
                <a data-toggle="collapse" href="#catagory-widget9" role="button" aria-expanded="false" aria-controls="catagory-widget9">Frozen Food<i class="fas fa-angle-down"></i></a>
                <ul class="catagory-submenu collapse" id="catagory-widget9">
                  <li><a href="product-list.html">Artichoke.</a></li>
                  <li><a href="product-list.html">Aubergine (eggplant).</a></li>
                  <li><a href="product-list.html">Asparagus.</a></li>
                  <li><a href="product-list.html">Broccoflower (a hybrid).</a></li>
                  <li><a href="product-list.html">Broccoli (calabrese).</a></li>
                </ul>
              </li>
              <li>
                <a data-toggle="collapse" href="#catagory-widget10" role="button" aria-expanded="false" aria-controls="catagory-widget10">Jam & Honey<i class="fas fa-angle-down"></i></a>
                <ul class="catagory-submenu collapse" id="catagory-widget10">
                  <li><a href="product-list.html">Artichoke.</a></li>
                  <li><a href="product-list.html">Aubergine (eggplant).</a></li>
                  <li><a href="product-list.html">Asparagus.</a></li>
                  <li><a href="product-list.html">Broccoflower (a hybrid).</a></li>
                  <li><a href="product-list.html">Broccoli (calabrese).</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
