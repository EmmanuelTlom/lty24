<template>
  <div class="convertPage">
    <div class="row q-mb-sm items-center justify-between">
      <q-btn @click="router.go(-1)" flat class="listheader" no-caps no-wrap>
        <i class="fa-solid q-mr-sm fa-arrow-left"></i> Back
      </q-btn>
      <q-btn class="listheader" flat no-caps no-wrap> Back to home </q-btn>
    </div>

    <div class="convertCard">
      <div class="div">
        <div class="bill">
          <div class="q-mt-md">
            <router-link
              class="text-black"
              :to="{
                name: 'buy.subDetails',
                query: {
                  bill: 'Ikeja Electric',
                },
              }"
            >
              <div class="bene_list row items-center justify-between">
                <div
                  style="gap: 0.5rem"
                  class="row q-py-sm items-center no-wrap"
                >
                  <img src="/images/ikelectric.svg" alt="" />
                  <div>
                    <h6 class="bene_name review_small q-mb-xs">
                      Ikeja Electric
                    </h6>
                  </div>
                </div>

                <q-btn flat no-caps no-wrap>
                  <i class="fa-solid fa-chevron-right"></i>
                </q-btn>
              </div>
            </router-link>

            <router-link
              class="text-black"
              :to="{
                name: 'buy.subDetails',
                query: {
                  bill: 'Abuja Electric',
                },
              }"
            >
              <div class="bene_list row items-center justify-between">
                <div
                  style="gap: 0.5rem"
                  class="row q-py-sm items-center no-wrap"
                >
                  <img src="/images/abujaelectric.svg" alt="" />
                  <div>
                    <h6 class="bene_name review_small q-mb-xs">
                      Abuja Electric
                    </h6>
                  </div>
                </div>

                <q-btn flat no-caps no-wrap>
                  <i class="fa-solid fa-chevron-right"></i>
                </q-btn>
              </div>
            </router-link>

            <router-link
              class="text-black"
              :to="{
                name: 'buy.subDetails',
                query: {
                  bill: 'Eko Electric',
                },
              }"
            >
              <div class="bene_list row items-center justify-between">
                <div
                  style="gap: 0.5rem"
                  class="row q-py-sm items-center no-wrap"
                >
                  <img src="/images/ekoelectric.svg" alt="" />
                  <div>
                    <h6 class="bene_name review_small q-mb-xs">Eko Electric</h6>
                  </div>
                </div>

                <q-btn flat no-caps no-wrap>
                  <i class="fa-solid fa-chevron-right"></i>
                </q-btn>
              </div>
            </router-link>

            <router-link
              class="text-black"
              :to="{
                name: 'buy.subDetails',
                query: {
                  bill: 'Ibadan Electric',
                },
              }"
            >
              <div class="bene_list row items-center justify-between">
                <div
                  style="gap: 0.5rem"
                  class="row q-py-sm items-center no-wrap"
                >
                  <img src="/images/ibadanelectric.svg" alt="" />
                  <div>
                    <h6 class="bene_name review_small q-mb-xs">
                      Ibadan Electric
                    </h6>
                  </div>
                </div>

                <q-btn flat no-caps no-wrap>
                  <i class="fa-solid fa-chevron-right"></i>
                </q-btn>
              </div>
            </router-link>

            <router-link
              class="text-black"
              :to="{
                name: 'buy.subDetails',
                query: {
                  bill: 'Kaduna Electric',
                },
              }"
            >
              <div class="bene_list row items-center justify-between">
                <div
                  style="gap: 0.5rem"
                  class="row q-py-sm items-center no-wrap"
                >
                  <img src="/images/kadunaelectric.svg" alt="" />
                  <div>
                    <h6 class="bene_name review_small q-mb-xs">
                      Kaduna Electric
                    </h6>
                  </div>
                </div>

                <q-btn flat no-caps no-wrap>
                  <i class="fa-solid fa-chevron-right"></i>
                </q-btn>
              </div>
            </router-link>

            <router-link
              class="text-black"
              :to="{
                name: 'buy.subDetails',
                query: {
                  bill: 'Kano Electric',
                },
              }"
            >
              <div class="bene_list row items-center justify-between">
                <div
                  style="gap: 0.5rem"
                  class="row q-py-sm items-center no-wrap"
                >
                  <img src="/images/kanoelectric.svg" alt="" />
                  <div>
                    <h6 class="bene_name review_small q-mb-xs">
                      Kano Electric
                    </h6>
                  </div>
                </div>

                <q-btn flat no-caps no-wrap>
                  <i class="fa-solid fa-chevron-right"></i>
                </q-btn>
              </div>
            </router-link>
            <router-link
              class="text-black"
              :to="{
                name: 'buy.subDetails',
                query: {
                  bill: 'Port Harcourt Electric',
                },
              }"
            >
              <div class="bene_list row items-center justify-between">
                <div
                  style="gap: 0.5rem"
                  class="row q-py-sm items-center no-wrap"
                >
                  <img src="/images/phelectric.svg" alt="" />
                  <div>
                    <h6 class="bene_name review_small q-mb-xs">
                      Port Harcourt Electric
                    </h6>
                  </div>
                </div>

                <q-btn flat no-caps no-wrap>
                  <i class="fa-solid fa-chevron-right"></i>
                </q-btn>
              </div>
            </router-link>
            <router-link
              class="text-black"
              :to="{
                name: 'buy.subDetails',
                query: {
                  bill: 'Jos Electric',
                },
              }"
            >
              <div class="bene_list row items-center justify-between">
                <div
                  style="gap: 0.5rem"
                  class="row q-py-sm items-center no-wrap"
                >
                  <img src="/images/joselectric.svg" alt="" />
                  <div>
                    <h6 class="bene_name review_small q-mb-xs">Jos Electric</h6>
                  </div>
                </div>

                <q-btn flat no-caps no-wrap>
                  <i class="fa-solid fa-chevron-right"></i>
                </q-btn>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

  <q-dialog v-model="fundAccModal">
    <q-card class="text-center convertmodalcard">
      <div class="img">
        <img src="../../assets/glo.svg" alt="" />
      </div>
      <p class="addfundtext2 q-mb-md text-black">
        You are about to fund <br />
        your account with N50
      </p>

      <div class="q-my-sm">
        <img
          style="width: 191.32px; height: 188.55px"
          src="/images/qr.svg"
          alt=""
        />
      </div>
      <p class="smalltext q-my-md">
        Transactions may take 5-10 mins to be <br />
        approved. Don’t panick, your cash will get to you <br />
        even if you close your browser
      </p>

      <div class="auth">
        <q-input filled v-model="code" label="USSD Code">
          <template v-slot:append>
            <q-btn flat no-wrap no-caps>
              <i class="fa-regular fa-copy"></i>
            </q-btn> </template
        ></q-input>
      </div>

      <div class="sharegift q-my-md">
        <div style="gap: 1rem" class="row items-center justify-between no-wrap">
          <div style="gap: 0.5rem" class="row items-center no-wrap">
            <img src="/images/purplebox.svg" alt="" />
            <p class="smallertext">
              Get N50 for each friend who signs up with your referral code
            </p>
          </div>

          <q-btn flat no-caps no-wrap> Share Code </q-btn>
        </div>
      </div>
      <q-btn
        @click="fundAccModal = false"
        class="closeBtn"
        flat
        no-caps
        no-wrap
      >
        <img src="/images/closeBtn.svg" alt="" />
      </q-btn>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

let routeData = useRoute();
let router = useRouter();
let fundAccModal = ref(false);
let code = ref("*324*50*37373747484#");

let data = ref({
  save_beneficiary: false,
  bank: "Fidelity Bank Plc",
  amount: "₦7,900.00",
  account_number: "90574893739",
});

let options = [
  "Zenith",
  "UBA",
  "Access",
  "Moniepoint",
  "Wema",
  "Fidelity Bank Plc",
];
</script>

<style lang="scss" scoped></style>
