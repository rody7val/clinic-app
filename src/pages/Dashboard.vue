<template>
  <q-splitter
    v-model="splitterModel"
    horizontal
  >
    <template v-slot:before>
    <q-tabs
      v-model="tab"
      inline-label
      align="left"
      dense
      class="bg-primary text-white shadow-2"
    >
      <q-tab name="preview" icon="visibility" label="vista previa" />
      <q-tab name="develop" icon="code" label="Desarrollo" />
    </q-tabs>
    </template>
    <template v-slot:after>
      <q-tab-panels
        v-model="tab"
        animated
        swipeable
        transition-prev="jump-up"
        transition-next="jump-up"
      >
        <q-tab-panel name="develop">
          <Develop />
        </q-tab-panel>
        <q-tab-panel name="preview">
          <Preview />
        </q-tab-panel>
      </q-tab-panels>
    </template>
  </q-splitter>

</template>

<script>
import { ref } from 'vue'
import Develop from '../components/dash/Develop.vue'
import Preview from '../components/dash/Preview.vue'

export default {
  components: { Develop, Preview },
  setup () {
    return {
      splitterModel: ref(50), // start at 50%
      tab: ref('preview')
    }
  }
}
</script>
