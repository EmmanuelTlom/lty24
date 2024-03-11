<template>
  <div class="container">
    <section>
      <div class="dash_grid">
        <div class="left">
          <div class="top">
            <div class="">
              <div>
                <!-- <p class="dashsmalltext">
                  Main Balance <i class="fa-solid fa-eye"></i>
                </p> -->

                <h4 class="dashtext">
                  Welcome, what are you
                  <span class="text-primary">purchasing today?</span>
                </h4>
              </div>
              <!-- <div>
                <q-btn flat no-wrap no-caps class="addBtn addfundtext">
                  Add Fund <i class="fa-solid fa-plus"></i>
                </q-btn>
              </div> -->
            </div>
          </div>
          <div class="variations">
            <div class="column items-center justify-center text-center">
              <router-link class="text-black" to="">
                <img
                  style="width: 32px; height: 32px"
                  src="/images/convert.svg"
                  alt=""
                />
                <h6 class="dashsmalltext">Electicity</h6>
              </router-link>
            </div>
            <div class="column items-center justify-center text-center">
              <router-link class="text-black" to="">
                <img
                  style="width: 32px; height: 32px"
                  src="/images/paperplane.svg"
                  alt=""
                />
                <h6 class="dashsmalltext">Transfer</h6>
              </router-link>
            </div>
            <div class="column items-center justify-center text-center">
              <router-link class="text-black" to="">
                <img
                  style="width: 32px; height: 32px"
                  src="/images/keypad.svg"
                  alt=""
                />
                <h6 class="dashsmalltext">Top up airtime</h6>
              </router-link>
            </div>
            <div class="column items-center justify-center text-center">
              <router-link class="text-black" to="">
                <img
                  style="width: 32px; height: 32px"
                  src="/images/receipt.svg"
                  alt=""
                />
                <h6 class="dashsmalltext">Utility</h6>
              </router-link>
            </div>
          </div>

          <div class="convert">
            <div>
              <h4 class="convertH4">Pay bills with ease</h4>
              <p class="convertp">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
                velit, nihil porro vero voluptate.
              </p>
              <q-btn flat no-caps no-wrap class="addfundtext watchvideo">
                Watch Video
              </q-btn>
            </div>
            <!-- <div>
              <img src="/images/acc.png" alt="" />
            </div> -->
          </div>
          <div class="easily">
            <div>
              <h4 class="convertH4">Refer and Earn</h4>
              <p class="convertp">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
                minima quae quos consequuntur placeat! Maxime.
              </p>
            </div>
            <div>
              <img src="/images/box.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="right">
          <img src="/images/hero.jpg" alt="" />
        </div>
      </div>
    </section>

    <q-dialog v-model="verifyEmailDialog">
      <q-card
        style="max-width: 547px; gap: 3rem"
        class="column verifyDialogCard no-wrap text-center justify-center items-center"
      >
        <div class="top_modal">
          <img
            style="width: 132px; height: 138px"
            src="/images/verifyemail.svg"
            alt=""
          />
          <h5 class="verifyMainText q-my-md">
            Verify your <br />
            email address
          </h5>

          <p class="review_small text-center">
            You're almost there! We sent an email to (Users email address) Just
            click on the link in that email to complete your signup.
          </p>
          <p class="review_small text-center q-mt-md">
            If you don't see it, you may need to check your spam folder.
          </p>
        </div>
        <div class="row verifyBtn justify-center">
          <q-btn no-wrap no-caps flat class="text-white bg-secondary">
            Verify your email address
          </q-btn>
        </div>

        <q-btn
          @click="verifyEmailDialog = false"
          class="closeBtn"
          flat
          no-caps
          no-wrap
        >
          <img src="/images/closeBtn.svg" alt="" />
        </q-btn>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import TransactionItemVue from "src/components/TransactionItem.vue";
import { ref } from "vue";
let noRecord = ref(false);
let verifyEmailDialog = ref(false);

let recordArr = ref([
  {
    img: "/images/item1.svg",
    name: "Emeka Kingsley",
    time: "03:35 PM",
    amount: "₦2,342,049",
    type: "credit",
  },
  {
    img: "/images/zenith.svg",
    name: "Sandra Okoro",
    time: "03:35 PM",
    amount: "₦2,342,049",
    type: "debit",
  },
  {
    img: "/images/ekdc.svg",
    name: "EKDC Prepaid",
    time: "03:35 PM",
    amount: "₦42,000",
    type: "credit",
  },
]);
</script>

<style lang="scss" scoped></style>
