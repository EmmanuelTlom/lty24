<template>
  <div class="container">
    <section>
      <div class="dash_grid">
        <div class="left">
          <div class="top">
            <div class="row justify-between item-center">
              <div>
                <p class="dashsmalltext">
                  Main Balance <i class="fa-solid fa-eye"></i>
                </p>

                <h4 class="dashtext">
                  <span> ₦34,040.00</span>
                  <i class="fa-solid fa-chevron-right"></i>
                </h4>
              </div>
              <div>
                <q-btn flat no-wrap no-caps class="addBtn addfundtext">
                  Add Fund <i class="fa-solid fa-plus"></i>
                </q-btn>
              </div>
            </div>
          </div>
          <div class="variations">
            <div class="column items-center justify-center text-center">
              <router-link class="text-black" :to="{ name: 'user.convert' }">
                <img
                  style="width: 32px; height: 32px"
                  src="/images/convert.svg"
                  alt=""
                />
                <h6 class="dashsmalltext">Convert</h6>
              </router-link>
            </div>
            <div class="column items-center justify-center text-center">
              <router-link class="text-black" :to="{ name: 'user.bank' }">
                <img
                  style="width: 32px; height: 32px"
                  src="/images/paperplane.svg"
                  alt=""
                />
                <h6 class="dashsmalltext">Transfer</h6>
              </router-link>
            </div>
            <div class="column items-center justify-center text-center">
              <router-link class="text-black" :to="{ name: 'user.top' }">
                <img
                  style="width: 32px; height: 32px"
                  src="/images/keypad.svg"
                  alt=""
                />
                <h6 class="dashsmalltext">Top up</h6>
              </router-link>
            </div>
            <div class="column items-center justify-center text-center">
              <router-link
                class="text-black"
                :to="{ name: 'user.utilitybills' }"
              >
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
              <h4 class="convertH4">
                Learn how to convert your airtime to cash
              </h4>
              <p class="convertp">
                We will show you how to convert your airtime to cash in three
                easy steps.
              </p>
              <q-btn flat no-caps no-wrap class="addfundtext watchvideo">
                Watch Video
              </q-btn>
            </div>
            <div>
              <img src="/images/acc.png" alt="" />
            </div>
          </div>
          <div class="easily">
            <div>
              <h4 class="convertH4">Earn with Easify</h4>
              <p class="convertp">
                Your contact needs to complete a few steps before your can earn
                your reward.
              </p>
            </div>
            <div>
              <img src="/images/box.png" alt="" />
            </div>
          </div>
        </div>
        <div class="right">
          <div class="row items-center justify-between">
            <h6 class="headText">Transaction</h6>

            <q-btn-dropdown flat no-wrap no-caps label="Last 28days">
              <q-list>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Last 6 Months</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Last 3 months</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Last Week</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
          <div class="moneyinout">
            <div class="moneyin">
              <p style="gap: 0.5rem" class="row q-mb-sm items-center no-wrap">
                <img src="/images/moneyin.svg" alt="" /> Money In
              </p>
              <h4 class="dashtext">0.00</h4>
            </div>
            <div class="moneyout">
              <p style="gap: 0.5rem" class="row q-mb-sm items-center no-wrap">
                <img src="/images/moneyout.svg" alt="" /> Money Out
              </p>
              <h4 class="dashtext">0.00</h4>
            </div>
          </div>
          <div>
            <div v-if="noRecord" class="no_record">
              <img src="/images/records.svg" alt="" />
              <h6 class="review_small bold">No record found</h6>

              <p class="transactsmall">All recent transaction appears here</p>
            </div>
            <div v-else>
              <q-list
                padding
                class="rounded-borders transactionList"
                style="max-width: 100%"
              >
                <q-item-label class="listheader" header
                  >24 Sept 2021, MONDAY</q-item-label
                >
                <div v-for="(record, index) in recordArr" :key="index">
                  <TransactionItemVue :record="record" />
                </div>
              </q-list>
              <q-list
                padding
                class="rounded-borders transactionList"
                style="max-width: 100%"
              >
                <q-item-label class="listheader" header
                  >24 Sept 2021, MONDAY</q-item-label
                >
                <div v-for="(record, index) in recordArr" :key="index">
                  <TransactionItemVue :record="record" />
                </div>
                <div class="row justify-center more_btn">
                  <q-btn class="listheader" flat no-caps no-wrap>
                    View More
                  </q-btn>
                </div>
              </q-list>
            </div>
          </div>
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
            src="/images/mail.png"
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
let verifyEmailDialog = ref(true);

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
