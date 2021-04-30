<template>
  <div class="row">
    <div class="col-md-8 col-sm-8 col-xs-12 mb-5">
      <q-badge rounded color="primary" label="Admin" />
      <h1 class="text-h5">
        Panel de control
      </h1>
      <p>
        Boceto de componentes.
      </p>
      <ul class="q-ml-sm q-pl-sm">
        <li>
          <p><b>BUSCADOR DE PACIENTES</b></p>
        </li>
        <li>
          <p><b>BUSCADOR DE PRODUCTOS</b></p>
        </li>
        <li>
          <p><b>INFORMES DE PACIENTES</b></p>
        </li>
        <li>
          <p><b>INFORMES DE PRODUCTOS</b></p>
        </li>
      </ul>
    </div>
    <div class="col-md-4 col-sm-4 col-xs-12">
      <q-img
        class="col-5"
        src="~assets/dash.jpeg"
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
