<script>
export default {
  name: 'render',
  render: function (createElement) {
    return createElement(
      'h' + this.level, {
        'class': 'h' + this.level
      },
      this.$slots.default
    )
  },
  props: {
    level: {
      type: Number,
      required: true
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
