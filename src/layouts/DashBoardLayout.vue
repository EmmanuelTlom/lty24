<template>
  <q-layout class="greyBack authLayout" view="lHh lpR fFf">
    <q-header reveal style="width: auto" class="header bg-white">
      <div class="row container justify-between no-wrap">
        <div style="gap: 3rem" class="left row no-wrap items-center">
          <div
            style="gap: 1rem"
            class="row q-ml-md right_ items-center no-wrap"
          >
            <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

            <!-- <div class="q-ml-md">
              <div class="search_inp">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Search" />
              </div>
            </div> -->
          </div>
        </div>

        <div style="gap: 1rem" class="row btns items-center">
          <q-btn :to="{ name: 'login' }" outline no-caps no-wrap>Login</q-btn>
          <q-btn :to="{ name: 'register' }" outline no-wrap no-caps
            >Sign Up</q-btn
          >
        </div>
      </div>
    </q-header>

    <q-drawer
      :width="240"
      v-model="leftDrawerOpen"
      show-if-above
      side="left"
      bordered
    >
      <!-- drawer content -->
      <q-scroll-area class="fit">
        <div class="logo row items-center">
          <h1 class="text-h4 text-weight-bold">
            <router-link class="text-black" :to="{ name: 'home' }">
              Lyt<span class="">24</span> <i class="fa-solid fa-lightbulb"></i
            ></router-link>
          </h1>
        </div>

        <q-list padding class="menu-list">
          <q-item :to="{ name: 'dashboard' }" clickable v-ripple>
            <q-item-section avatar>
              <i class="ri-dashboard-3-line"></i>
            </q-item-section>

            <q-item-section> Dashboard </q-item-section>
          </q-item>

          <q-item :to="{ name: 'buy.electricity' }" clickable v-ripple>
            <q-item-section avatar>
              <i class="ri-lightbulb-line"></i>
            </q-item-section>

            <q-item-section> Electricity </q-item-section>
          </q-item>

          <q-item :to="{ name: 'user.top' }" clickable v-ripple>
            <q-item-section avatar>
              <i class="ri-smartphone-line"></i>
            </q-item-section>

            <q-item-section> Top Up </q-item-section>
          </q-item>
          <!-- <q-item :to="{ name: 'buy.data' }" clickable v-ripple>
            <q-item-section avatar>
              <i class="ri-line-chart-line"></i>
            </q-item-section>

            <q-item-section> Data </q-item-section>
          </q-item> -->
          <q-item clickable :to="{ name: 'buy.tvsubscription' }" v-ripple>
            <q-item-section avatar>
              <i class="ri-tv-line"></i>
            </q-item-section>

            <q-item-section> TV Subscription </q-item-section>
          </q-item>
          <!-- <q-item clickable v-ripple>
            <q-item-section avatar>
              <i class="ri-refresh-line"></i>
            </q-item-section>

            <q-item-section> Referrals </q-item-section>
          </q-item> -->
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";

const leftDrawerOpen = ref(false);

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
</script>

<style lang="scss" scoped>
.q-header {
  color: #646464;

  & > div {
    .left {
      // flex: 2;
      div {
        width: 100%;
      }
    }
  }
}

.logo {
  padding: 1.8rem 2rem;
}

.review_small.text {
  font-weight: 700;
}

@media (min-width: 1000px) {
  .search_inp {
    width: 100%;
    min-width: 508px;
  }
}
</style>
