<template>
  <q-layout view="lHh Lpr lFf" style="background-color: #fafafa">
    <q-header class="bg-white q-px-md">
      <q-toolbar>
        <q-toolbar-title class="text-black fontsize-10 text-weight-bold">
          REAL ESTATE FINDER
        </q-toolbar-title>

        <q-btn flat round color="grey-9" icon="notifications_active" />
        <q-btn flat round color="grey-9" icon="favorite" />
      </q-toolbar>
    </q-header>

    <q-footer class="bg-white text-center q-pa-md" bordered>
      <div class="row justify-content-between">
        <div class="col">
          <q-btn
            class="bg-grey-8"
            round
            color="white"
            icon="search"
            size="13px"
          />
          <br />
          <label class="text-grey-8">Search</label>
        </div>

        <div class="col">
          <q-btn
            class="bg-grey-8"
            round
            color="white"
            icon="forum"
            size="13px"
          />
          <br />
          <label class="text-grey-8">Chat</label>
        </div>

        <div class="col">
          <q-btn
            class="bg-grey-8"
            round
            color="white"
            icon="view_list"
            size="13px"
          />
          <br />
          <label class="text-grey-8">Category</label>
        </div>

        <div class="col">
          <q-btn
            class="bg-grey-8"
            round
            color="white"
            icon="history"
            size="13px"
          />
          <br />
          <label class="text-grey-8">History</label>
        </div>

        <div class="col">
          <q-btn
            class="bg-grey-8"
            round
            color="white"
            icon="person"
            size="13px"
          />
          <br />
          <label class="text-grey-8">Profile</label>
        </div>
      </div>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  setup() {
    return {};
  },
});
</script>

<style lang="sass">
.q-toolbar__title
  font-size: 19px
</style>
