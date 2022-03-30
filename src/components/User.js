import { Outlet, Link } from "react-router-dom";

export const User = () => {
    return <div><div className="header border-bottom">
        <div className="header-content">
            <nav className="navbar navbar-expand">
                <div className="collapse navbar-collapse justify-content-between">
                    <div className="header-left">
                        <div className="dashboard_bar">User</div>
                    </div>
                </div>
            </nav>
        </div>
    </div>

    <div class="content-body">

<div class="container-fluid">
    <div class="d-flex justify-content-between align-items-center flex-wrap">
        <div class="input-group contacts-search mb-4">
            <input type="text" class="form-control" placeholder="Search here..." />
            <span class="input-group-text"><a href="javascript:void(0)"><i
                        class="flaticon-381-search-2"></i></a></span>
        </div>
        <div class="mb-4">
            
            <Link className="btn btn-primary btn-rounded fs-18" to="/Adduser">Add New User</Link>
        </div>
    </div>
    <div class="row">
        <div class="col-xl-12">
            <div class="row">
                <div class="col-xl-3 col-xxl-4 col-lg-4 col-md-6 col-sm-6 items">
                    <div class="card contact-bx item-content">
                        <div class="card-body user-profile pb-0">
                            <div class="d-flex align-items-center">
                                <div class="image-bx">
                                    <img src="assets/images/1.png" data-src="page-error-404.html" alt=""
                                        class="rounded-circle" />
                                    <span class="active"></span>
                                </div>
                                <div class="ms-3 text-start">
                                    <h4 class="fs-18 font-w600">Lincoln Donin </h4>
                                    
                                    <span class="text-primary d-block">Kleon Studios </span>
                                </div>
                            </div>
                            <div class="user-meta-info">
                                <ul>
                                    <li><a href="javascript:void(0);"><i
                                                class="fas fa-phone-alt"></i></a>+12 345 6789 0 </li>
                                    <li><a href="javascript:void(0);"><i
                                                class="far fa-comment-alt"></i></a><a
                                            href="../cdn-cgi/l/email-protection.html" class="__cf_email__"
                                            data-cfemail="690500070a0605070d060700072904080005470a0604">[email&#160;protected]
                                        </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-xxl-4 col-lg-4 col-md-6 col-sm-6 items">
                    <div class="card contact-bx item-content">
                        <div class="card-body user-profile pb-0">
                            <div class="d-flex align-items-center">
                                <div class="image-bx">
                                    <img src="assets/images/1.png" data-src="page-error-404.html" alt=""
                                        class="rounded-circle" />
                                    <span class="active"></span>
                                </div>
                                <div class="ms-3 text-start">
                                    <h4 class="fs-18 font-w600">Cristofer Siphron </h4>
                                    <span class="mb-2 d-block">@lincolndonin </span>
                                    <span class="text-primary d-block">Kleon Studios </span>
                                </div>
                            </div>
                            <div class="user-meta-info">
                                <ul>
                                    <li><a href="javascript:void(0);"><i
                                                class="fas fa-phone-alt"></i></a>+12 345 6789 0 </li>
                                    <li><a href="javascript:void(0);"><i
                                                class="far fa-comment-alt"></i></a><a
                                            href="../cdn-cgi/l/email-protection.html" class="__cf_email__"
                                            data-cfemail="482421262b2724262c272621260825292124662b2725">[email&#160;protected]
                                        </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-xxl-4 col-lg-4 col-md-6 col-sm-6 items">
                    <div class="card contact-bx item-content">
                        <div class="card-body user-profile pb-0">
                            <div class="d-flex align-items-center">
                                <div class="image-bx">
                                    <img src="images/pic3.jpg" data-src="page-error-404.html" alt=""
                                        class="rounded-circle" />
                                    <span class="active"></span>
                                </div>
                                <div class="ms-3 text-start">
                                    <h4 class="fs-18 font-w600">Marilyn Ekstrom </h4>
                                    <span class="mb-2 d-block">@lincolndonin </span>
                                    <span class="text-primary d-block">Kleon Studios </span>
                                </div>
                            </div>
                            <div class="user-meta-info">
                                <ul>
                                    <li><a href="javascript:void(0);"><i
                                                class="fas fa-phone-alt"></i></a>+12 345 6789 0 </li>
                                    <li><a href="javascript:void(0);"><i
                                                class="far fa-comment-alt"></i></a><a
                                            href="../cdn-cgi/l/email-protection.html" class="__cf_email__"
                                            data-cfemail="4a262324292526242e252423240a272b232664292527">[email&#160;protected]
                                        </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-xxl-4 col-lg-4 col-md-6 col-sm-6 items">
                    <div class="card contact-bx item-content">
                        <div class="card-body user-profile pb-0">
                            <div class="d-flex align-items-center">
                                <div class="image-bx">
                                    <img src="images/pic4.jpg" data-src="page-error-404.html" alt=""
                                        class="rounded-circle" />
                                    <span class="active"></span>
                                </div>
                                <div class="ms-3 text-start">
                                    <h4 class="fs-18 font-w600">Charlie Gouse </h4>
                                    <span class="mb-2 d-block">@lincolndonin </span>
                                    <span class="text-primary d-block">Kleon Studios </span>
                                </div>
                            </div>
                            <div class="user-meta-info">
                                <ul>
                                    <li><a href="javascript:void(0);"><i
                                                class="fas fa-phone-alt"></i></a>+12 345 6789 0 </li>
                                    <li><a href="javascript:void(0);"><i
                                                class="far fa-comment-alt"></i></a><a
                                            href="../cdn-cgi/l/email-protection.html" class="__cf_email__"
                                            data-cfemail="64080d0a070b080a000b0a0d0a2409050d084a070b09">[email&#160;protected]
                                        </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-xxl-4 col-lg-4 col-md-6 col-sm-6 items">
                    <div class="card contact-bx item-content">
                        <div class="card-body user-profile pb-0">
                            <div class="d-flex align-items-center">
                                <div class="image-bx">
                                    <img src="images/pic4.jpg" data-src="page-error-404.html" alt=""
                                        class="rounded-circle" />
                                    <span class="active"></span>
                                </div>
                                <div class="ms-3 text-start">
                                    <h4 class="fs-18 font-w600">Charlie Gouse </h4>
                                    <span class="mb-2 d-block">@lincolndonin </span>
                                    <span class="text-primary d-block">Kleon Studios </span>
                                </div>
                            </div>
                            <div class="user-meta-info">
                                <ul>
                                    <li><a href="javascript:void(0);"><i
                                                class="fas fa-phone-alt"></i></a>+12 345 6789 0 </li>
                                    <li><a href="javascript:void(0);"><i
                                                class="far fa-comment-alt"></i></a><a
                                            href="../cdn-cgi/l/email-protection.html" class="__cf_email__"
                                            data-cfemail="a6cacfc8c5c9cac8c2c9c8cfc8e6cbc7cfca88c5c9cb">[email&#160;protected]
                                        </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-xxl-4 col-lg-4 col-md-6 col-sm-6 items">
                    <div class="card contact-bx item-content">
                        <div class="card-body user-profile pb-0">
                            <div class="d-flex align-items-center">
                                <div class="image-bx">
                                    <img src="images/pic3.jpg" data-src="page-error-404.html" alt=""
                                        class="rounded-circle" />
                                    <span class="active"></span>
                                </div>
                                <div class="ms-3 text-start">
                                    <h4 class="fs-18 font-w600">Marilyn Ekstrom </h4>
                                    <span class="mb-2 d-block">@lincolndonin </span>
                                    <span class="text-primary d-block">Kleon Studios </span>
                                </div>
                            </div>
                            <div class="user-meta-info">
                                <ul>
                                    <li><a href="javascript:void(0);"><i
                                                class="fas fa-phone-alt"></i></a>+12 345 6789 0 </li>
                                    <li><a href="javascript:void(0);"><i
                                                class="far fa-comment-alt"></i></a><a
                                            href="../cdn-cgi/l/email-protection.html" class="__cf_email__"
                                            data-cfemail="117d787f727e7d7f757e7f787f517c70787d3f727e7c">[email&#160;protected]
                                        </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-xxl-4 col-lg-4 col-md-6 col-sm-6 items">
                    <div class="card contact-bx item-content">
                        <div class="card-body user-profile pb-0">
                            <div class="d-flex align-items-center">
                                <div class="image-bx">
                                    <img src="images/pic1.jpg" data-src="page-error-404.html" alt=""
                                        class="rounded-circle" />
                                    <span class="active"></span>
                                </div>
                                <div class="ms-3 text-start">
                                    <h4 class="fs-18 font-w600">Lincoln Donin </h4>
                                    <span class="mb-2 d-block">@lincolndonin </span>
                                    <span class="text-primary d-block">Kleon Studios </span>
                                </div>
                            </div>
                            <div class="user-meta-info">
                                <ul>
                                    <li><a href="javascript:void(0);"><i
                                                class="fas fa-phone-alt"></i></a>+12 345 6789 0 </li>
                                    <li><a href="javascript:void(0);"><i
                                                class="far fa-comment-alt"></i></a><a
                                            href="../cdn-cgi/l/email-protection.html" class="__cf_email__"
                                            data-cfemail="086461666b6764666c676661664865696164266b6765">[email&#160;protected]
                                        </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-xxl-4 col-lg-4 col-md-6 col-sm-6 items">
                    <div class="card contact-bx item-content">
                        <div class="card-body user-profile pb-0">
                            <div class="d-flex align-items-center">
                                <div class="image-bx">
                                    <img src="images/pic2.jpg" data-src="page-error-404.html" alt=""
                                        class="rounded-circle" />
                                    <span class="active"></span>
                                </div>
                                <div class="ms-3 text-start">
                                    <h4 class="fs-18 font-w600">Cristofer Siphron </h4>
                                    <span class="mb-2 d-block">@lincolndonin </span>
                                    <span class="text-primary d-block">Kleon Studios </span>
                                </div>
                            </div>
                            <div class="user-meta-info">
                                <ul>
                                    <li><a href="javascript:void(0);"><i
                                                class="fas fa-phone-alt"></i></a>+12 345 6789 0 </li>
                                    <li><a href="javascript:void(0);"><i
                                                class="far fa-comment-alt"></i></a><a
                                            href="../cdn-cgi/l/email-protection.html" class="__cf_email__"
                                            data-cfemail="a8c4c1c6cbc7c4c6ccc7c6c1c6e8c5c9c1c486cbc7c5">[email&#160;protected]
                                        </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-xxl-4 col-lg-4 col-md-6 col-sm-6 items">
                    <div class="card contact-bx item-content">
                        <div class="card-body user-profile pb-0">
                            <div class="d-flex align-items-center">
                                <div class="image-bx">
                                    <img src="images/pic1.jpg" data-src="page-error-404.html" alt=""
                                        class="rounded-circle" />
                                    <span class="active"></span>
                                </div>
                                <div class="ms-3 text-start">
                                    <h4 class="fs-18 font-w600">Lincoln Donin </h4>
                                    <span class="mb-2 d-block">@lincolndonin </span>
                                    <span class="text-primary d-block">Kleon Studios </span>
                                </div>
                            </div>
                            <div class="user-meta-info">
                                <ul>
                                    <li><a href="javascript:void(0);"><i
                                                class="fas fa-phone-alt"></i></a>+12 345 6789 0 </li>
                                    <li><a href="javascript:void(0);"><i
                                                class="far fa-comment-alt"></i></a><a
                                            href="../cdn-cgi/l/email-protection.html" class="__cf_email__"
                                            data-cfemail="4c2025222f23202228232225220c212d2520622f2321">[email&#160;protected]
                                        </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-xxl-4 col-lg-4 col-md-6 col-sm-6 items">
                    <div class="card contact-bx item-content">
                        <div class="card-body user-profile pb-0">
                            <div class="d-flex align-items-center">
                                <div class="image-bx">
                                    <img src="images/pic2.jpg" data-src="page-error-404.html" alt=""
                                        class="rounded-circle" />
                                    <span class="active"></span>
                                </div>
                                <div class="ms-3 text-start">
                                    <h4 class="fs-18 font-w600">Cristofer Siphron </h4>
                                    <span class="mb-2 d-block">@lincolndonin </span>
                                    <span class="text-primary d-block">Kleon Studios </span>
                                </div>
                            </div>
                            <div class="user-meta-info">
                                <ul>
                                    <li><a href="javascript:void(0);"><i
                                                class="fas fa-phone-alt"></i></a>+12 345 6789 0 </li>
                                    <li><a href="javascript:void(0);"><i
                                                class="far fa-comment-alt"></i></a><a
                                            href="../cdn-cgi/l/email-protection.html" class="__cf_email__"
                                            data-cfemail="7f1316111c1013111b101116113f121e1613511c1012">[email&#160;protected]
                                        </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-xxl-4 col-lg-4 col-md-6 col-sm-6 items">
                    <div class="card contact-bx item-content">
                        <div class="card-body user-profile pb-0">
                            <div class="d-flex align-items-center">
                                <div class="image-bx">
                                    <img src="images/pic3.jpg" data-src="page-error-404.html" alt=""
                                        class="rounded-circle" />
                                    <span class="active"></span>
                                </div>
                                <div class="ms-3 text-start">
                                    <h4 class="fs-18 font-w600">Marilyn Ekstrom </h4>
                                    <span class="mb-2 d-block">@lincolndonin </span>
                                    <span class="text-primary d-block">Kleon Studios </span>
                                </div>
                            </div>
                            <div class="user-meta-info">
                                <ul>
                                    <li><a href="javascript:void(0);"><i
                                                class="fas fa-phone-alt"></i></a>+12 345 6789 0 </li>
                                    <li><a href="javascript:void(0);"><i
                                                class="far fa-comment-alt"></i></a><a
                                            href="../cdn-cgi/l/email-protection.html" class="__cf_email__"
                                            data-cfemail="deb2b7b0bdb1b2b0bab1b0b7b09eb3bfb7b2f0bdb1b3">[email&#160;protected]
                                        </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-xxl-4 col-lg-4 col-md-6 col-sm-6 items">
                    <div class="card contact-bx item-content">
                        <div class="card-body user-profile pb-0">
                            <div class="d-flex align-items-center">
                                <div class="image-bx">
                                    <img src="images/pic4.jpg" data-src="page-error-404.html" alt=""
                                        class="rounded-circle" />
                                    <span class="active"></span>
                                </div>
                                <div class="ms-3 text-start">
                                    <h4 class="fs-18 font-w600">Charlie Gouse </h4>
                                    <span class="mb-2 d-block">@lincolndonin </span>
                                    <span class="text-primary d-block">Kleon Studios </span>
                                </div>
                            </div>
                            <div class="user-meta-info">
                                <ul>
                                    <li><a href="javascript:void(0);"><i
                                                class="fas fa-phone-alt"></i></a>+12 345 6789 0 </li>
                                    <li><a href="javascript:void(0);"><i
                                                class="far fa-comment-alt"></i></a><a
                                            href="../cdn-cgi/l/email-protection.html" class="__cf_email__"
                                            data-cfemail="e78b8e8984888b898388898e89a78a868e8bc984888a">[email&#160;protected]
                                        </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    </div>
</div>
</div>
    </div>
        ;
};

export default User;