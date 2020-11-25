<template>
  <div class="sample">
    {{ str }}
    <button @click="changeText">test</button>
  </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Sample',
  computed: {
    ...mapState({
      str: state => state.sample.str
    }),
  },
  methods: {
    ...mapMutations('sample', [
      'changeText'
    ])
  }
}
</script>

<style scoped></style>
