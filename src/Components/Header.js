import React from 'react'

function Header() {
    return (
        <div>
            <header class="site-header">
                <div class="container">
                    <div class="row align-items-center">

                        <div class="col-lg-3 col-md-5 col-7">
                            <p class="text-white mb-0">
                                <i class="bi-clock site-header-icon me-2"></i>
                                Mon-Fri 10:00-19:00
                            </p>
                        </div>

                        <div class="col-lg-2 col-md-3 col-5">
                            <p class="text-white mb-0">
                                <a href="tel: 240-480-9600" class="text-white">
                                    <i class="bi-telephone site-header-icon me-2"></i>
                                    081-3515-9897
                                </a>
                            </p>
                        </div>

                        <div class="col-lg-3 col-md-3 col-12 ms-auto">
                            <ul class="social-icon">
                                <li><a href="https://facebook.com/tooplate" class="social-icon-link bi-facebook"></a></li>

                                <li><a href="https://pinterest.com/tooplate" class="social-icon-link bi-pinterest"></a></li>

                                <li><a href="https://twitter.com/minthu" class="social-icon-link bi-twitter"></a></li>

                                <li><a href="https://www.youtube.com/tooplate" class="social-icon-link bi-youtube"></a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </header>

            <nav class="navbar navbar-expand-lg bg-white shadow-lg">
                <div class="container">
                    <a href="#" class="navbar-brand">Toms <span class="text-danger">Consulting</span></a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link click-scroll" href="#section_1"><small class="small-title"><strong
                                    class="text-warning">01</strong></small> Home</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link click-scroll" href="#section_2"><small class="small-title"><strong
                                    class="text-warning">02</strong></small> About</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link click-scroll" href="#section_3"><small class="small-title"><strong
                                    class="text-warning">03</strong></small> Services</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link click-scroll" href="#section_4"><small class="small-title"><strong
                                    class="text-warning">04</strong></small> Projects</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link click-scroll" href="#section_5"><small class="small-title"><strong
                                    class="text-warning">05</strong></small> Contact</a>
                            </li>
                        </ul>
                    </div>

                </div>

            </nav>



        </div>
    )
}

export default Header