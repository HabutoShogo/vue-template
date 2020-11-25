<template>
  <div class="sample">
    {{ str }}
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'Sample',
  computed: {
    ...mapState({
      str: state => state.sample.str
    }),
  }
}
</script>

<style scoped></style>
