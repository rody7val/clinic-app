<template>
  <q-badge rounded color="primary" label="Admin" />
  <h1 class="text-h3">
    Control de stock
  </h1>
  <div class="row">
    <div class="col-md-8 col-sm-8 col-xs-12 mb-5">
      <h1 class="text-h4">
        Ciclo de vida
      </h1>
      <p>
        El ciclo de vida de ésta funcionalidad finaliza con una compra. Dejando detrás registro del proveedor.
      </p>
    </div>
    <div class="col-md-4 col-sm-4 col-xs-12">
      <q-img
        class="col-5"
        src="~assets/cs.jpeg"
      />
    </div>
  </div>
        <div class="row">
          <div class="col-md-8 col-sm-8 col-xs-12 mb-5">
            <h1 class="text-h4">
              Casos de usos
            </h1>
            <p>
              A continuación un listado de los campos requeridos para cada caso.
            </p>
            <h2 class="text-h6">
              Crear Producto
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
                  PRECIO
                  <q-badge rounded color="red-3" label="requerido" />
                </p>
              </li>
              <li>
                <p>
                  CANTIDAD
                  <q-badge rounded color="red-3" label="requerido" />
                </p>
              </li>
              <li>
                <p>
                  IMAGEN
                  <q-badge rounded color="green-4" label="opcional" />
                </p>
              </li>
              <li>
                <p>
                  VENCIMIENTO
                  <q-badge rounded color="red-3" label="requerido" />
                </p>
              </li>
            </ul>
            <h2 class="text-h6">
              Crear Proveedor
            </h2>
            <ul class="q-ml-sm q-pl-sm">
              <li>
                <p>
                  RAZON SOCIAL
                  <q-badge rounded color="red-3" label="requerido" />
                </p>
              </li>
              <li>
                <p>
                  TELEFONO
                  <q-badge rounded color="red-3" label="requerido" />
                </p>
              </li>
              <li>
                <p>
                  CUIT
                  <q-badge rounded color="red-3" label="requerido" />
                </p>
              </li>
              <li>
                <p>
                  EMAIL
                  <q-badge rounded color="green-4" label="opcional" />
                </p>
              </li>
              <li>
                <p>
                  DIRECCIÓN
                  <q-badge rounded color="green-4" label="opcional" />
                </p>
              </li>
            </ul>
            <h2 class="text-h6">
              Crear Movimiento (compra)
            </h2>
            <ul class="q-ml-sm q-pl-sm">
              <li>
                FECHA
                <q-badge rounded color="red-3" label="requerido" />
                <q-badge rounded color="blue-3" label="automatico" />
              </li>
              <li>
                TIPO: compra
                <q-badge rounded color="red-3" label="requerido" />
                <q-badge rounded color="blue-3" label="automatico" />
              </li>
              <li>
                ITEMS: Carga un arreglo de cada productos o servicio comprado al proveedor. Seria como el carrito de compras que describe el precio y cantidad de cada uno.
                <q-badge rounded color="red-3" label="requerido" />
              </li>
            </ul>
          </div>

          <div class="col-md-4 col-sm-4 col-xs-12">
            <q-img
              class="col-5"
              src="~assets/stock.jpeg"
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
