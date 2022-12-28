<template>
  <div>
    <span v-for="item in arr" :key="item">{{ item }}</span>
  </div>
</template>

<script>
export default {
  name: 'MyAppDate',

  data() {
    return {
      arr: [1, 2, 3],
      person: {
        name: 'sf',
        age: '22',
      },
    }
  },

  mounted() {},

  methods: {
    test() {
      const name = '1234'
      const cons = '123'
      console.log(name, cons)
    },
  },
}
</script>

<style lang="scss" scoped></style>
