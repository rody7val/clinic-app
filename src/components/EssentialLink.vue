<template>
  <q-item
    clickable
    tag="a"
    :to="link"
    :exact="exact"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
  <hr>      
</template>

<script>
//<q-badge
//  dense
//  rounded
//  :color="public ? 'primary' : 'secondary'"
//  :label="public ? 'public' : 'admin'"
///>
export default {
  props: {
    title: {
      type: String,
      required: true
    },

    exact: {
      type: Boolean,
      default: true
    },

    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    },

    public: {
      type: Boolean,
      default: false
    }
  }
}
</script>
