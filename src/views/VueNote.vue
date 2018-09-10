<template>
  <div class="vue-note">
    <h1>This is an vue note page</h1>
    <render :level="1">
      Render h1 tag test
    </render>
    <render :level="2">
      Render h2 tag test
    </render>
  </div>
</template>

<script>
import Render from '@/components/Render.vue'

export default {
  data () {
    return {
      level: 1
    }
  },
  components: {
    Render
  }
}
</script>
