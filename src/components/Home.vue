<script setup>

</script>

<template>
    <div class="main2">
        <!-- Navbar -->
        <div class="px-5 navbar d-flex justify-content-around align-items-center text-center">
            <!-- Navbar Logo -->
            <div class="navbar-item nav-logo">
                <a class="nav-link text-uppercase text-decoration-none" href="/">
                    <!-- <h1 class="display-4">EVK</h1> -->
                    <img src="../assets/img/EVK.png" class="" alt=""
                        style="height:10vh; width:auto; border-radius:50px;">
                </a>
            </div>
            <!-- Navbar List -->
            <div class="nav-list">
                <ul class="nav text-decoration-none align-items-center">
                    <li class="navbar-item">
                        <router-link class="nav-link text-decoration-none text-uppercase text-light fs-6 fw-bold"
                            to="/worx">works</router-link>
                    </li>
                    <li class="navbar-item">
                        <router-link class="nav-link text-decoration-none text-uppercase text-light fs-6 fw-bold"
                            to="/services">services</router-link>
                    </li>
                    <li class="navbar-item">
                        <router-link class="nav-link text-decoration-none text-uppercase text-light fs-6 fw-bold"
                            to="/agency">agency</router-link>

                    </li>
                    <li class="navbar-item">
                        <router-link class="nav-link text-decoration-none text-uppercase text-light fs-6 fw-bold"
                            to="/team">team</router-link>
                    </li>
                    <li class="navbar-item">
                        <router-link class="nav-link text-decoration-none text-uppercase text-light fs-6 fw-bold"
                            to="/jobs">jobs</router-link>
                    </li>
                    <li class="navbar-item">
                        <router-link class="" to="/contact">
                            <button class="text-light fs-6 fw-bold text-uppercase btn rounded-5 mx-2 py-1 px-3"
                                style="background-color:#ff2c00;">contact</button>
                        </router-link>
                    </li>
                    <li class="navbar-item ps-2">
                        <router-link class="text-decoration-none text-uppercase fs-6 fw-bold" style="color:#ff2c00;"
                            to="/en">en
                        </router-link>
                        <router-link class="text-decoration-none text-uppercase text-secondary fs-6 fw-bold" to="/de"> |
                            de</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <!-- Without Container -->
        <div class="view">
            <!-- Router View -->
            <router-view></router-view>
        </div>
    </div>
</template>

<style>
.navbar {
    font-family: var(--ff);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
    backdrop-filter: blur(5px);
    border-bottom: 1px solid black;
    box-shadow: 10px white;
}

.btn {
    font-family: var(--ff);
    letter-spacing: 1px;
}

ul,
li,
a {
    list-style-type: none;
    text-decoration: none;
    padding: 0;
    color: white;
}

.navbar {}

.main2 {
    letter-spacing: 1px;
}

.view {
    font-family: var(--ff);
}

/* img {
    opacity: 0.4;
    left: 0;
    top: 0;
    width: 100%;
    height: auto;
} */
</style>