<template>
  <q-dialog v-model="dialog" :position="position" maximized persistent>
    <q-card>
      <q-card-section class="items-center no-wrap">
        <q-header class="bg-white q-mb-xl">
          <q-card-section class="row items-center q-pb-none">
            <div class="col-12">
              <q-input
                filled
                bottom-slots
                :label="`Search`"
                maxlength="12"
                dense
              >
                <template v-slot:before>
                  <q-btn
                    class="q-mr-sm"
                    color="grey-4"
                    text-color="grey-8"
                    icon="arrow_back"
                    dense
                    v-close-popup
                  />
                </template>
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
            </div>
          </q-card-section>
        </q-header>
        <q-separator />

        <div class="text q-mt-md text-grey-8">
          1321 Homes found at Jakarta Selatan
        </div>

        <q-card-section
          :key="index"
          v-for="(field, index) in listDetail"
          class="items-center no-wrap"
        >
          <q-carousel
            animated
            v-model="slide"
            arrows
            navigation
            transition-prev="slide-right"
            transition-next="slide-left"
            swipeable
            infinite
            :height="`${$q.screen.lt.sm ? '250px' : ''}`"
            style="background-color: #fafafa"
          >
            <q-carousel-slide
              :key="index"
              v-for="(field, index) in field.img"
              style="border-radius: 0px"
              :name="index"
              :img-src="field"
            />
          </q-carousel>
          <div class="text-caption text-grey q-mt-sm">
            2 Rooms 1 Bath room 250M2
          </div>
          <div class="text-subtitle1">
            {{ field.name }}
          </div>
          <div class="text-caption text-grey">Rp. 800 Juta</div>
        </q-card-section>
      </q-card-section>
      <br />
      <br />
      <br />
      <q-footer class="bg-white text-center q-pa-md q-mt-lg" bordered>
        <div class="row justify-content-between">
          <div class="col">
            <q-btn flat text-color="grey-8" icon="filter_alt" label="" />
          </div>
          <div class="col">
            <q-btn flat text-color="grey-8" icon="tune" label="Sort" />
          </div>
        </div>
      </q-footer>
    </q-card>
  </q-dialog>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";

export default {
  props: {},
  setup(/*props*/) {
    const store = useStore();
    const dialog = ref(false);
    const position = ref("top");
    const listDetail = computed(
      () => store.getters["realEstate/getListOfData"]
    );
    const open = (pos) => {
      position.value = pos;
      dialog.value = true;
    };

    return {
      dialog,
      position,
      open,
      slide: ref(1),
      listDetail,
    };
  },
};
</script>
<style lang="sass"></style>
