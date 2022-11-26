<template>
  <q-page style="min-height: 0">
    <div>
      <div class="q-pa-xl">
        <q-carousel
          animated
          v-model="slide"
          arrows
          navigation
          transition-prev="slide-right"
          transition-next="slide-left"
          swipeable
          infinite
          :height="`${$q.screen.lt.sm ? '150px' : ''}`"
          style="background-color: #fafafa"
          :autoplay="2500"
        >
          <q-carousel-slide
            :name="1"
            img-src="https://cdn.quasar.dev/img/mountains.jpg"
          />
          <q-carousel-slide
            :name="2"
            img-src="https://cdn.quasar.dev/img/parallax1.jpg"
          />
          <q-carousel-slide
            :name="3"
            img-src="https://cdn.quasar.dev/img/parallax2.jpg"
          />
          <q-carousel-slide
            :name="4"
            img-src="https://cdn.quasar.dev/img/quasar.jpg"
          />
        </q-carousel>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      slide: ref(1),
    };
  },
};
</script>

<style lang="sass">
.q-carousel__slide
     border-radius: 25px
</style>
