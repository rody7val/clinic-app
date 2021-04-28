<template>
  <q-page class="q-pa-md q-gutter-sm">
    <q-card class="q-pa-sm" flat bordered >
      <q-card-section>
        <div class="row">
          <div class="col-md-8 col-sm-8 col-xs-12 order-2 order-sm-1 mb-5">
            <h1 class="text-h5">
              Página web
              <br>
              <q-badge rounded color="secondary" label="Public" />
            </h1>

            <p class="text-weight-light">
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

          <div class="col-md-4 col-sm-4 col-xs-12 order-1 order-sm-2">
            <q-img
              class="col-5"
              src="~assets/webpage.jpeg"
            />
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
  
export default {
	setup() {
		//const router = useRouter()
    const goToDash = () => {
    	//console.log("web p")
      //router.push({ path: `/dash` })
    }

		onMounted(goToDash)
	}
}
</script>
