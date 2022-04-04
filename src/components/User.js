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
                                    <img src="assets/images/1.png" data-src="page-error-404.html" alt=""
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
                                    <img src="assets/images/1.png" data-src="page-error-404.html" alt=""
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
                                    <img src="assets/images/1.png" data-src="page-error-404.html" alt=""
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
                
            </div>
           
        </div>
    </div>
</div>
</div>
    </div>
        ;
};

export default User;