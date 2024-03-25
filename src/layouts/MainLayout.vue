<template>
  <q-layout view="lHh Lpr lFf" class="greyBack">
    <header class="header">
      <div class="container">
        <div class="row justify-between">
          <div style="gap: 3rem" class="left row no-wrap items-center">
            <div class="logo row items-center">
              <h1 class="text-h4 text-weight-bold">
                Lyt<span class="">24</span>
                <i class="fa-solid fa-lightbulb"></i>
              </h1>
            </div>

            <ul style="gap: 1.5rem" class="row items-center no-wrap">
              <li>
                <router-link class="review_small bold" to="">
                  Blog
                </router-link>
              </li>
              <li>
                <router-link class="review_small bold" to="">
                  Vouchers
                </router-link>
              </li>
              <li>
                <router-link class="review_small bold" to="">
                  Referrals
                </router-link>
              </li>
              <li>
                <router-link class="review_small bold" to="">
                  Help
                </router-link>
              </li>
            </ul>
          </div>

          <div style="gap: 1rem" class="row btns items-center">
            <q-btn :to="{ name: 'login' }" outline no-caps no-wrap>Login</q-btn>
            <q-btn :to="{ name: 'register' }" outline no-wrap no-caps
              >Sign Up</q-btn
            >
          </div>

          <div class="toggle_btn">
            <q-btn flat>
              <i class="fa-solid fa-bars"></i>
            </q-btn>
          </div>
        </div>
      </div>
    </header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup></script>
