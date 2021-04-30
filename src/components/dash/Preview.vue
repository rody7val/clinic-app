<template>
  <div class="q-pa-md">
    <div class="q-gutter-md row">
      <q-select
        filled
        v-model="model"
        use-input
        input-debounce="0"
        label="Buscar paciente"
        :options="options"
        @filter="filterFn"
        style="width: 250px"
        behavior="menu"
      >
        <template v-slot:no-option>
          <q-item>
            <q-item-section class="text-grey">
              No results
            </q-item-section>
          </q-item>
        </template>
      </q-select>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'

const stringOptions = [
  'Carl Gustav Jung', 'Lysander Spooner', 'Julian Assange'
]

export default {
  setup () {
    const options = ref(stringOptions)

    return {
      model: ref(null),
      //stringOptions,
      options,

      filterFn (val, update) {
        if (val === '') {
          update(() => {
            options.value = stringOptions
          })
          return
        }

        update(() => {
          const needle = val.toLowerCase()
          options.value = stringOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
        })
      }
    }
  }
}
</script>