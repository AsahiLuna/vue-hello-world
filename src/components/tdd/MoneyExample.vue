<template>
  <div class="money-example">
    <h1>Dollar multiple times: {{ multiple }}</h1>
    <h1>Dollar plus fanc's dollar result: {{ addDifferentCurrencies }}</h1>
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
