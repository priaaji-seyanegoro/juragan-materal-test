<template>
  <q-dialog v-model="dialog" :position="position" maximized persistent>
    <q-card>
      <q-card-section class="row items-center q-pb-none">
        <div
          :class="`${
            titleDrawer === 'Most People Find :' ? 'text' : 'text-h6'
          }`"
        >
          {{ titleDrawer }}
        </div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>
      <q-card-section class="items-center no-wrap">
        <template :key="index" v-for="(field, index) in datas">
          <q-item clickable v-ripple v-close-popup @click="setFormData(field)">
            <q-item-section v-if="isUseIcon" avatar>
              <q-icon name="place" />
            </q-item-section>

            <q-item-section>
              <strong>{{ field.label }}</strong>
            </q-item-section>
          </q-item>
          <q-separator />
        </template>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  props: {
    datas: { type: Array, default: () => [] },
    isUseIcon: { type: Boolean, default: true },
    titleDrawer: { type: String, default: "Most People Find :" },
    typeDrawer: { type: String, default: "" },
  },
  setup(props) {
    const store = useStore();
    const dialog = ref(false);
    const position = ref("top");
    const open = (pos) => {
      position.value = pos;
      dialog.value = true;
    };

    const setFormData = (payload) => {
      if (props.typeDrawer === "location")
        store.commit("realEstate/setLocation", payload);
      if (props.typeDrawer === "type")
        store.commit("realEstate/setType", payload);
      if (props.typeDrawer === "status")
        store.commit("realEstate/setStatus", payload);
    };

    return {
      dialog,
      position,
      open,
      setFormData,
    };
  },
};
</script>
