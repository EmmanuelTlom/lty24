<template>
  <div class="convertPage">
    <div class="row q-mb-sm items-center justify-between">
      <q-btn @click="router.go(-1)" flat class="listheader" no-caps no-wrap>
        <i class="fa-solid q-mr-sm fa-arrow-left"></i> Back
      </q-btn>
      <q-btn class="listheader" flat no-caps no-wrap> Back to home </q-btn>
    </div>

    <div class="convertCard">
      <h4 class="convertMain q-mb-md">DSTV Subscription</h4>
      <div class="package_sub">
        <div class="column">
          <img src="/images/dstv.svg" alt="" />
          <p class="text-center q-my-sm smalltext">
            Compact Plus: Okoro Kingsley
          </p>
        </div>
      </div>
      <div class="div">
        <div class="auth">
          <form>
            <q-select
              filled
              class="last"
              v-model="data.provider"
              :options="options"
              label="Select Provider"
            />
            <q-select
              filled
              v-model="data.plan"
              :options="planOptions"
              label="Select Package"
            />

            <q-input
              class="review_small bold"
              filled
              v-model="data.amount"
              label="Amount"
            />
            <q-input filled v-model="data.iuc_number" label="IUC Number" />

            <!-- <q-select
              filled
              class="last"
              v-model="data.balance"
              :options="balanceOptions"
              label="Select Spend Wallet"
            /> -->

            <div class="row btn_g justify-center">
              <q-btn flat no-wrap @click="fundAccModal = true" no-caps>
                Continue
              </q-btn>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <q-dialog v-model="fundAccModal">
    <q-card class="text-center convertmodalcard">
      <h4 class="dashtext">Enter Transaction Pin</h4>
      <p class="review_small text-weight-medium q-mb-md">
        Approve transaction with your passcode
      </p>
      <div class="btn_g">
        <div class="auth">
          <div
            class="justify-center otp_wrap"
            style="display: flex; flex-direction: row; gap: 0.5rem"
          >
            <v-otp-input
              ref="otpInput"
              v-model:value="bindRef"
              input-classes="otp-input"
              separator=" "
              :num-inputs="4"
              :should-auto-focus="true"
              input-type="letter-numeric"
              :conditionalClass="['one', 'two', 'three', 'four']"
              :placeholder="['', '', '', '']"
              @on-change="handleOnChange"
              @on-complete="handleOnComplete"
            />
          </div>
        </div>
        <div class="row btn_g justify-center">
          <q-btn flat no-wrap @click="fundAccModal = true" no-caps>
            Send Money
          </q-btn>
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
  package: "DSTV",
  amount: "₦7,900.00",
  iuc_number: "90574893739",
});

let options = ["DSTV", "GOTv", "Startimes"];
let planOptions = [
  "Dstv Premium French - (₦47,200)",
  "Gotv Live annual - (₦10,200)",
  "Gotv Supa - (₦7,300)",
  "Basic Dish Monthly - (₦3,200)",
];
let balanceOptions = ["Main Balance", "Sub Balance"];
const bindRef = ref("");

const handleOnComplete = (value) => {
  // console.log("OTP completed: ", value);
  code.value = value;
};

const handleOnChange = (value) => {
  // console.log("OTP changed: ", value);
};
</script>

<style lang="scss" scoped>
.dashtext,
.review_small {
  text-align: center;
}
</style>
