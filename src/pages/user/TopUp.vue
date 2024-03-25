<template>
  <div class="convertPage">
    <div class="row q-mb-sm items-center justify-between">
      <q-btn @click="router.go(-1)" flat class="listheader" no-caps no-wrap>
        <i class="fa-solid q-mr-sm fa-arrow-left"></i> Back
      </q-btn>
      <q-btn
        :to="{ name: 'user.dashboard' }"
        class="listheader"
        flat
        no-caps
        no-wrap
      >
        Back to home
      </q-btn>
    </div>

    <div class="convertCard">
      <h4 class="convertMain q-mb-md">Top Up</h4>

      <div class="switchBtns">
        <q-btn
          @click="setKind('airtime')"
          flat
          no-wrap
          no-caps
          :class="kind === 'airtime' ? 'active' : ''"
          >Airtime</q-btn
        >
        <q-btn
          :class="kind === 'data' ? 'active' : ''"
          @click="setKind('data')"
          flat
          no-wrap
          no-caps
          >Data</q-btn
        >
      </div>
      <div class="airtime_networks">
        <router-link
          :to="{
            query: {
              network: 'glo',
            },
          }"
        >
          <img
            :class="routeData.query.network === 'glo' ? 'active' : ''"
            src="../../assets/glo.svg"
            alt=""
          />
        </router-link>
        <router-link
          :to="{
            query: {
              network: 'mtn',
            },
          }"
        >
          <img
            :class="routeData.query.network === 'mtn' ? 'active' : ''"
            src="../../assets/mtn.svg"
            alt=""
          />
        </router-link>
        <router-link
          :to="{
            query: {
              network: 'airtel',
            },
          }"
        >
          <img
            :class="routeData.query.network === 'airtel' ? 'active' : ''"
            src="../../assets/air.svg"
            alt=""
          />
        </router-link>
        <router-link
          :to="{
            query: {
              network: '9mobile',
            },
          }"
        >
          <img
            :class="routeData.query.network === '9mobile' ? 'active' : ''"
            src="../../assets/9mobile.svg"
            alt=""
          />
        </router-link>
      </div>

      <div class="div">
        <div class="auth">
          <form>
            <q-input
              class="review_small bold q-mt-sm"
              filled
              v-model="data.email"
              label="Email"
            />
            <q-input
              class="review_small bold q-mt-sm"
              filled
              v-model="data.amount"
              label="Amount"
            />
            <q-input
              class="last q-mt-sm"
              filled
              v-model="data.phone"
              label="Phone Number"
            />

            <!-- <q-select
              class="q-mt-sm"
              filled
              v-model="data.balance"
              :options="balanceOptions"
              label="Select Bank"
            /> -->

            <div class="row btn_g justify-center">
              <q-btn
                :class="routeData.query.network ? 'bg-secondary' : ''"
                flat
                no-wrap
                @click="fundAccModal = true"
                no-caps
              >
                Buy {{ kind }}
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
            Complete Transaction
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
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

let routeData = useRoute();
let router = useRouter();
let fundAccModal = ref(false);
let bindRef = ref("");
let kind = ref("airtime");
let data = ref({
  amount: "₦1,000",
  phone: "070574893739",
  balance: "Main Balance",
});
let balanceOptions = ["Main Balance", "Sub Balance"];

const setKind = (kindArg) => {
  console.log(kindArg);
  kind.value = kindArg;
  routeData.query.kind = kindArg;
  console.log(routeData.query);
};

const handleOnComplete = (value) => {
  // console.log("OTP completed: ", value);
};

const handleOnChange = (value) => {
  // console.log("OTP changed: ", value);
};

onMounted(() => {
  if (routeData.query.kind) {
    kind.value = routeData.query.kind;
  }
});
</script>

<style lang="scss" scoped></style>
