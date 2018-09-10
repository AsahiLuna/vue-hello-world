<template>
  <div class="money-example">
    <div>Dollar multiple times: {{ multiple }}</div>
    <div>Dollar plus fanc's dollar result: {{ addDifferentCurrencies }}</div>
  </div>
</template>

<script>
export default {
  name: 'MoneyExample',
  props: {
    times: {
      type: Number,
      default: 1
    },
    dollar: {
      type: Number,
      default: 0
    },
    franc: {
      type: Number,
      default: 0
    },
    rate: {
      type: Number,
      default: 1
    }
  },
  computed: {
    multiple () {
      return this.dollar * this.times
    },
    addDifferentCurrencies () {
      return Number(this.dollar) + Number(this.franc * this.rate)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
