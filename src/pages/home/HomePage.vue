<template>
  <q-page>
    <br /><br /><br />
    <carousel-component />

    <!-- @submit.prevent="onSubmit" -->
    <q-form
      autocorrect="off"
      autocapitalize="off"
      autocomplete="off"
      spellcheck="false"
      class="q-mb-xl"
    >
      <div class="text-center col q-mx-xl">
        <q-input
          :model-value="getForm.location.label"
          bottom-slots
          label="Pick Location"
          dense
          @click="
            openFormDrawer(
              'bottom',
              listLocations,
              true,
              'Most People Find :',
              'location'
            )
          "
        >
          <template v-slot:prepend>
            <q-icon name="place" />
          </template>
        </q-input>
        <q-input
          :model-value="getForm.type.label"
          bottom-slots
          label="Type Of Property"
          dense
          @click="
            openFormDrawer(
              'bottom',
              listTypeProperty,
              false,
              'Type Of Property',
              'type'
            )
          "
        >
          <template v-slot:prepend>
            <q-icon name="home" />
          </template>
        </q-input>
        <q-input
          :model-value="getForm.status.label"
          bottom-slots
          label="Status"
          dense
          @click="
            openFormDrawer('bottom', listStatus, false, 'Status', 'status')
          "
        >
          <template v-slot:prepend>
            <q-icon name="done" />
          </template>
        </q-input>

        <q-btn
          class="full-width"
          :disable="isDisableSearch"
          rounded
          color="grey-9"
          label="Find"
          @click="openListDrawer('bottom')"
        />
      </div>
    </q-form>
    <br /><br /><br />
    <drawer-form-component
      :titleDrawer="pickTitle"
      :isUseIcon="useIcon"
      :datas="dataDrawer"
      :typeDrawer="type"
      ref="drawerForm"
    />

    <drawer-list-component ref="drawerList" />
  </q-page>
</template>

<script>
import { useStore } from "vuex";
import { ref, computed, defineAsyncComponent } from "vue";

export default {
  components: {
    CarouselComponent: defineAsyncComponent(() =>
      import("./CarouselComponent.vue")
    ),
    DrawerFormComponent: defineAsyncComponent(() =>
      import("./DrawerFormComponent.vue")
    ),
    DrawerListComponent: defineAsyncComponent(() =>
      import("./DrawerListComponent.vue")
    ),
  },
  setup() {
    const store = useStore();
    const dialog = ref(false);
    const position = ref("top");
    const drawerForm = ref("");
    const drawerList = ref("");
    const dataDrawer = ref([]);
    const useIcon = ref(false);
    const listLocations = [
      {
        value: "jkt_utara",
        label: "Jakarta Utara",
      },
      {
        value: "jkt_selatan",
        label: "Jakarta Selatan",
      },
      {
        value: "jkt_barat",
        label: "Jakarta Barat",
      },
      {
        value: "jkt_pusat",
        label: "Jakarta Pusat",
      },
      {
        value: "bekasi",
        label: "Bekasi",
      },
    ];
    const type = ref("");
    const pickTitle = ref("");
    const location = ref("");
    const getForm = computed(() => store.getters["realEstate/getForm"]);
    const isDisableSearch = computed(
      () => store.getters["realEstate/isDisableSearch"]
    );

    const listTypeProperty = [
      {
        value: "house",
        label: "House",
      },
      {
        value: "town_house",
        label: "Town House",
      },
    ];
    const listStatus = [
      {
        value: "rent",
        label: "Rent",
      },
      {
        value: "buy",
        label: "Buy",
      },
    ];
    const openFormDrawer = (pos, datas, icon, titleDrawer, typeDrawer) => {
      pickTitle.value = titleDrawer;
      type.value = typeDrawer;
      dataDrawer.value = datas;
      useIcon.value = icon;
      drawerForm.value.open(pos);
    };

    const openListDrawer = (pos) => {
      drawerList.value.open(pos);
    };

    return {
      dialog,
      position,
      openFormDrawer,
      drawerList,
      listLocations,
      drawerForm,
      dataDrawer,
      listTypeProperty,
      listStatus,
      useIcon,
      type,
      pickTitle,
      getForm,
      location,
      openListDrawer,
      isDisableSearch,
    };
  },
};
</script>
