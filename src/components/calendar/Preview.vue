<template>
  <div class="q-pa-md">
    <div class="q-gutter-sm">
      <q-badge color="teal">
        Turno: {{ model }}
      </q-badge>
      <q-badge color="primary" text-color="white" class="q-ma-md">
        Formato: YYYY-MM-DD HH:mm
      </q-badge>
    </div>

    <div class="q-gutter-md row items-start">
      <q-date v-model="model" mask="YYYY-MM-DD HH:mm" color="primary" />
      <q-time v-model="model" mask="YYYY-MM-DD HH:mm" color="primary" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      model: ref('2021-02-22 21:02')
    }
  }
}
</script>
