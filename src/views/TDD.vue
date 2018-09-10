<template>
  <div class="tdd">
    <h1>This is an TDD(Test Driven Development) page</h1>
    <money-example dollar="5" times="2" franc="5" rate="2"></money-example>
  </div>
</template>

<script>
import MoneyExample from '@/components/tdd/MoneyExample.vue'
export default {
  data () {
  },
  components: {
    MoneyExample
  }
}
</script>
