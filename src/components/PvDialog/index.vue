<template>
  <div>
    <vxe-modal
    v-on="$listeners"
    v-bind="$attrs"
    resize
    show-zoom
    :destroy-on-close="true"
    min-width="460"
    min-height="320"
    :show-footer="footer"
    show-title-overflow
    >
    <template v-slot:footer>
      <el-button type="info" @click="cancel">{{ cancelText }}</el-button>
      <el-button type="primary" @click="confirm">{{ confirmText }}</el-button>
    </template>
    </vxe-modal>
  </div>
</template>

<script>
export default {
  name: 'pv-dialog',
  props: {
    footer: {
      type: Boolean,
      default: false
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    confirmText: {
      type: String,
      default: '确定'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    cancel () {
      this.$emit('update:value', false)
    },
    confirm () {

    }
  }
}
</script>

<style lang="scss" scoped>
/deep/ .vxe-modal--wrapper .vxe-modal--footer{
  border-top: 1px solid #eff2f7;
}
/deep/ .el-button--info{
  padding: 8px 15px;
}
/deep/ .el-button--primary{
  padding: 8px 20px;
}
</style>
