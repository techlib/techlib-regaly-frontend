<template>
  <simulation/>
</template>

<script>
import Simulation from '@/components/Simulation'

import store from '@/stores/SimulationStore'

export default {
  data() {
    return {
      store: store,
    }
  },
  mounted: function() {
    store.dispatch('initClear')
  },
  components: {
    Simulation,
  },
}
</script>
