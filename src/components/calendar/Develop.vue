<template>
  <q-badge rounded color="primary" label="Admin" />
  <h1 class="text-h3">
    Registrar venta
  </h1>
  <div class="row">
    <div class="col-md-8 col-sm-8 col-xs-12 mb-5">
      <h1 class="text-h4">
        Ciclo de vida
      </h1>
      <p>
        El ciclo de vida de ésta funcionalidad finaliza generando un turno (con previo registro de sucursal).
      </p>
    </div>
    <div class="col-md-4 col-sm-4 col-xs-12">
      <q-img
        class="col-5"
        src="~assets/at.jpeg"
      />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
    }
  }
}
</script>
