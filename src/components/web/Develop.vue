<template>
  <div class="row">
    <div class="col-md-8 col-sm-8 col-xs-12 mb-5">
      <q-badge rounded color="secondary" label="Public" />
      <h1 class="text-h4">
        Página web
      </h1>
      <p>
        Boceto de componentes.
      </p>
      <ul class="q-ml-sm q-pl-sm">
        <li>
          <p><b>INFO: </b> Información institucional textual.</p>
        </li>
        <li>
          <p><b>ESTADO: </b> Botón de acceso al sistema // texto de bienvenida.</p>
        </li>
        <li>
          <p><b>MEDIA: </b> Información institucional multimedia (carrusell de imagenes por ej.).</p>
        </li>
        <li>
          <p><b>CONTACTO: </b>Ubicación espacial multimedia y datos de contacto (google maps).</p>
        </li>
      </ul>
    </div>
    <div class="col-md-4 col-sm-4 col-xs-12 order-1">
      <q-img
        class="col-5"
        src="~assets/webpage.jpeg"
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
