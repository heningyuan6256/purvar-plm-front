
<template>
<div>
    {{ baseUrl }}
    {{ item }}
</div>
</template>

<script>
import { getList } from '@/api/test'
export default {
  data () {
    return {
      item: ''
    }
  },
  created () {
    this.getTableList()
  },
  methods: {
    getTableList () {
      getList().then(res => {
        this.item = res.list[0]
      })
    }
  }
}
</script>

<style scoped>

</style>
