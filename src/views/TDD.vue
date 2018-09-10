<template>
  <div class="tdd container">
    <div>
      <span>This is a money example</span>
      <popper trigger="click" :options="{placement: 'top'}">
        <div class="popper">
          <money-example :dollar="5" :times="2" :franc="5" :rate="2"></money-example>
        </div>
        <button slot="reference" class="btn btn-primary">
          Money Example
        </button>
      </popper>
    </div>
  </div>
</template>

<script>
import Popper from 'vue-popperjs'
import MoneyExample from '@/components/tdd/MoneyExample.vue'

export default {
  data () {
    return {
      test: 1
    }
  },
  components: {
    MoneyExample,
    Popper
  }
}
</script>
