<template>
  <div>
    <a class="position-absolute" href="javascript:void(0)" onclick="cartopen()">
        <div id="sitebar-drawar" class="sitebar-drawar">
            <div class="cart-count d-flex align-items-center">
                <i class="fas fa-shopping-basket"></i>
                <span>3 Item</span>
            </div>
            <div class="total-price">$15.00</div>
        </div>
    </a>

     <!-- admin Modal -->
     <div class="modal fade" id="useradmin1" tabindex="-1" aria-labelledby="useradmin1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="header-top-action-dropdown">
                        <ul>
                            <li class="signin-option"><a onclick="OpenSignUpForm()" href="#" data-dismiss="modal"><i class="fas fa-user mr-2"></i>Sign In</a></li>
                            <li class="site-phone"><a href=""><i class="fas fa-phone"></i> 000 000 000</a></li>
                            <li class="site-help"><a href="#"><i class="fas fa-question-circle"></i> Help & More</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

     <!--siteinfo Modal -->
     <div class="modal fade" id="siteinfo1" tabindex="-1" aria-labelledby="siteinfo1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="header-top-action-dropdown">
                        <ul>
                            <li class="site-phone"><a href=""><i class="fas fa-phone"></i> 000 000 000</a></li>
                            <li class="site-help"><a href="#"><i class="fas fa-question-circle"></i> Help & More</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

     <!--search Modal -->
     <div class="modal fade" id="search-select-id" tabindex="-1" aria-labelledby="search-select-id" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="select-search-option">
                        <div class="flux-custom-select">
                            <select>
                              <option value="0">Select Catagory</option>
                              <option value="1">Vegetables</option>
                              <option value="2">Fruits</option>
                              <option value="3">Salads</option>
                              <option value="4">Fish & Seafood</option>
                              <option value="5">Fresh Meat</option>
                              <option value="6">Health Product</option>
                              <option value="7">Butter & Eggs</option>
                              <option value="8">Oils & Venegar</option>
                              <option value="9">Frozen Food</option>
                              <option value="10">Jam & Honey</option>
                            </select>
                        </div>
                        <form action="#" class="search-form">
                            <input type="text" name="search" placeholder="Search for Products">
                            <button class="submit-btn"><i class="fas fa-search"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>


     <!-- menu modal -->
     <div class="modal fade" id="menu-id" tabindex="-1" aria-labelledby="menu-id" aria-hidden="true">
        <div class="modal-dialog  modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body">
                    <ul class="menu d-xl-flex flex-wrap pl-0 list-unstyled">
                        <li class="item-has-children"><a class="active" data-toggle="collapse" href="#mainmenuid1" role="button" aria-expanded="false" aria-controls="catagory-widget1"><span>Home</span> <i class="fas fa-angle-down"></i></a>
                            <ul class="submenu collapse" id="mainmenuid1">
                                <li><a href="home-default.html">Home Default</a></li>
                                <li><a class="active" href="index.html">Home Sticky Sidebar</a></li>
                                <li><a href="home-search.html">Home Search</a></li>
                                <li><a href="home-slider.html">Home Slider</a></li>
                            </ul>
                        </li>
                        <li><a href="#">New Products</a></li>
                        <li><a data-toggle="collapse" href="#megamenu-main" role="button" aria-expanded="false" aria-controls="catagory-widget1"><span>Featured Products</span> <i class="fas fa-angle-down"></i></a>
                            <ul class=" collapse" id="megamenu-main">
                                <li><a data-toggle="collapse" href="#megamenu-main01" role="button" aria-expanded="false" aria-controls="megamenu-main01"><span>Vegetables</span> <i class="fas fa-angle-down"></i></a>
                                    <ul class="submenu collapse" id="megamenu-main01">
                                        <li><a href="product-list.html">Artichoke.</a></li>
                                        <li><a href="product-list.html">Aubergune(eggpiant)</a></li>
                                        <li><a href="product-list.html">Asparagus</a></li>
                                        <li><a href="product-list.html">Broccoflower(a hyrbid)</a></li>
                                    </ul>
                                </li>
                                <li><a data-toggle="collapse" href="#megamenu-main02" role="button" aria-expanded="false" aria-controls="megamenu-main02"><span>Fruits</span> <i class="fas fa-angle-down"></i></a>
                                    <ul class="submenu collapse" id="megamenu-main02">
                                        <li><a href="product-list.html">Artichoke.</a></li>
                                        <li><a href="product-list.html">Aubergune(eggpiant)</a></li>
                                        <li><a href="product-list.html">Asparagus</a></li>
                                        <li><a href="product-list.html">Broccoflower(a hyrbid)</a></li>
                                    </ul>
                                </li>
                                <li><a data-toggle="collapse" href="#megamenu-main03" role="button" aria-expanded="false" aria-controls="megamenu-main03"><span>Salads</span> <i class="fas fa-angle-down"></i></a>
                                    <ul class="submenu collapse" id="megamenu-main03">
                                        <li><a href="product-list.html">Artichoke.</a></li>
                                        <li><a href="product-list.html">Aubergune(eggpiant)</a></li>
                                        <li><a href="product-list.html">Asparagus</a></li>
                                        <li><a href="product-list.html">Broccoflower(a hyrbid)</a></li>
                                    </ul>
                                </li>
                                <li><a data-toggle="collapse" href="#megamenu-main04" role="button" aria-expanded="false" aria-controls="megamenu-main04"><span>Health Care</span> <i class="fas fa-angle-down"></i></a>
                                    <ul class="submenu collapse" id="megamenu-main04">
                                        <li><a href="product-list.html">Artichoke.</a></li>
                                        <li><a href="product-list.html">Aubergune(eggpiant)</a></li>
                                        <li><a href="product-list.html">Asparagus</a></li>
                                        <li><a href="product-list.html">Broccoflower(a hyrbid)</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li class="item-has-children"><a data-toggle="collapse" href="#mainmenuid2" role="button" aria-expanded="false" aria-controls="catagory-widget1"><span>Pages</span> <i class="fas fa-angle-down"></i></a>
                            <ul class="submenu collapse" id="mainmenuid2">
                                <li><a href="about.html">About</a></li>
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
                </div>
            </div>
        </div>
    </div>

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
                <a href="index.html" class="logo"><img src="../assets/images/logo.png" alt="logo"></a>

                <!-- search select -->
                <div class="text-center mobile-search">
                    <button type="button" data-toggle="modal" data-target="#search-select-id"><i class="fas fa-search"></i></button>
                </div>

                <!-- menubar -->
                <div>
                    <button class="menu-bar" type="button" data-toggle="modal" data-target="#menu-id">
                        Home<i class="fas fa-caret-down"></i>
                    </button>
                </div>

            </div>
            <div class="d-none d-xl-flex row align-items-center">
                <div class="col-5 col-md-2">
                    <a href="index.html" class="logo"><img src="assets/images/logo.png" alt="logo"></a>
                </div>
                <div class="col-5 col-md-9 col-lg-5">
                   
                    <div class="select-search-option d-none d-md-flex">
                        <div class="flux-custom-select">
                            <select>
                              <option value="0">Select Catagory</option>
                              <option value="1">Vegetables</option>
                              <option value="2">Fruits</option>
                              <option value="3">Salads</option>
                              <option value="4">Fish & Seafood</option>
                              <option value="5">Fresh Meat</option>
                              <option value="6">Health Product</option>
                              <option value="7">Butter & Eggs</option>
                              <option value="8">Oils & Venegar</option>
                              <option value="9">Frozen Food</option>
                              <option value="10">Jam & Honey</option>
                            </select>
                        </div>
                        <form action="#" class="search-form">
                            <input type="text" name="search" placeholder="Search for Products">
                            <button class="submit-btn"><i class="fas fa-search"></i></button>
                        </form>
                    </div>
                </div>
                <div class="col-2 col-md-1 col-lg-5">
                    <ul class="site-action d-none d-lg-flex align-items-center justify-content-between  ml-auto">
                        <li class="site-phone"><a href=""><i class="fas fa-phone"></i> 000 000 000</a></li>
                        <li class="site-help"><a href="#"><i class="fas fa-question-circle"></i> Help & More</a></li>
                        <li class="wish-list"><a href="wishlist.html"><i class="fas fa-heart"></i> <span class="count">04</span></a></li>
                        <li class="my-account d-none"><a class="dropdown-toggle" href="#" role="button" id="myaccount" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-user mr-1"></i> My Account</a>
                            <ul class="submenu dropdown-menu" aria-labelledby="myaccount">
                                <li><a href="profile.html">Profile</a></li>
                                <li><a href="#">Sign Out</a></li>
                            </ul>
                        </li>
                        <li class="signin-option"><a onclick="OpenSignUpForm()" href="#"><i class="fas fa-user mr-2"></i>Sign In</a></li>
                    </ul>
                </div>

            </div>
        </div>
        <hr>
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
                            <li class="item-has-children"><a class="active" href="index.html">Home <i class="fas fa-angle-down"></i></a>
                                <ul class="submenu">
                                    <li><a href="home-default.html">Home Default</a></li>
                                    <li><a class="active" href="index.html">Home Sticky Sidebar</a></li>
                                    <li><a href="home-search.html">Home Search</a></li>
                                    <li><a href="home-slider.html">Home Slider</a></li>
                                </ul>
                            </li>
                            <li><a href="#">New Products</a></li>
                            <li class="item-has-mega-menu"><a href="#">Featured Products <i class="fas fa-angle-down"></i></a>
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
                            <li class="item-has-children"><a href="index.html">Pages <i class="fas fa-angle-down"></i></a>
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
                            <li class="cart-option"><a onclick="cartopen()" href="#"><span class="cart-icon"><i class="fas fa-shopping-cart"></i><span class="count">3</span></span> <span class="cart-amount">$15.00</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- header section end -->
  </div>
</template>

<script>
  export default {
  
  }
</script>

