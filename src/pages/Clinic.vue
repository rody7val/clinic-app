<template>
  <q-page class="q-pa-md q-gutter-sm">
    <q-card class="q-pa-sm" flat bordered >
      <q-card-section>
        <div class="row">
          <div class="col-md-8 col-sm-8 col-xs-12 order-2 order-sm-1 mb-5">
            <h1 class="text-h5">
              Historia clínica
              <br>
              <q-badge rounded color="primary" label="Admin" />
            </h1>

            <p class="text-weight-light">
              Casos de uso del sistema. A continuación un listado de los campos requeridos para cada uno.
            </p>

            <h2 class="text-h6">
              Crear Paciente
            </h2>
            <ul class="q-ml-sm q-pl-sm">
              <li>
                <p>
                	NOMBRE
                	<q-badge rounded color="red-3" label="requerido" />
                </p>
              </li>
              <li>
                <p>
                	TELEFONO
                	<q-badge rounded color="red-3" label="requerido" />
                </p>
              </li>
            </ul>

            <h2 class="text-h6">
              Crear Tratamiento
            </h2>
            <ul class="q-ml-sm q-pl-sm">
              <li>
                <p>
                	DESCRIPCION_CLINICA: Detalle médico.
                	<q-badge rounded color="red-3" label="requerido" />
                </p>
              </li>
              <li>
                <p>
                	OBSERVACION_PACIENTE: Aclaraciones del paciente.
                	<q-badge rounded color="green-4" label="opcional" />
                </p>
              </li>
              <li>
                <p>
                	IMAGENES: Carga de imagenes al album del paciente.
                	<q-badge rounded color="green-4" label="opcional" />
                </p>
              </li>
              <li>
                <p>
                	FECHA
                <q-badge rounded color="red-3" label="requerido" />
                <q-badge rounded color="blue-3" label="automatico" />
                </p>
              </li>
            </ul>

            <h2 class="text-h6">
              Crear Movimiento (venta)
            </h2>
            <ul class="q-ml-sm q-pl-sm">
              <li>
                FECHA
                <q-badge rounded color="red-3" label="requerido" />
                <q-badge rounded color="blue-3" label="automatico" />
              </li>
              <li>
                TIPO: venta
                <q-badge rounded color="red-3" label="requerido" />
                <q-badge rounded color="blue-3" label="automatico" />
              </li>
              <li>
                TIPO_2: (servicio y/o producto)
                <q-badge rounded color="red-3" label="requerido" />
              </li>
              <li>
                ITEMS: Carga un arreglo de cada productos o servicio vendido al paciente. Seria como el carrito de compras que describe el precio y cantidad de cada uno.
                <q-badge rounded color="red-3" label="requerido" />
              </li>
            </ul>
          </div>

          <div class="col-md-4 col-sm-4 col-xs-12 order-1 order-sm-2">
            <q-img
              class="col-5"
              src="~assets/clinic.jpeg"
            />
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageClinic'
})
</script>
