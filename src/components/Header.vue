<script setup></script>
<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <img class="logo" src="../imgs/logo.svg" />
      <a class="navbar-brand" href="#">Конфигуратор ТЭП</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Конфигуратор</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Личный кабинет</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Главная</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">ЭПН</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">ЭП4</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">ЭП4(РН)</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">ЭП по ТУ-...-89</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">ВИМУ</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
<style scoped>
.logo {
  width: 90px;
  max-width: 100%;
}
nav {
  border-bottom: 1px solid #f5821f;
  background: white;
}
</style>
