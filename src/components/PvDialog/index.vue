<template>
  <el-dialog
    class="dialog-wrap"
    v-on="$listeners"
    v-bind="$attrs"
    :title="title"
    :width="width"
    :show-close="true"
    :top="top"
    :modal-append-to-body="false"
    :append-to-body="appendToBody"
    :close-on-click-modal="isClickModal"
    @close="cancel"
  >
    <slot></slot>
    <span v-if="isFooter" slot="footer" class="dialog-footer">
      <el-button v-if="btnAuthObj.cancel" class="cancel-btn" type="info" @click="cancel">{{ btnTextObj.cancel }}</el-button>
      <el-button v-if="btnAuthObj.continueAdd" class="submit-btn" type="primary" :disabled="continueAddDisabled" @click="continueAdd">{{ btnTextObj.continueAdd }}</el-button>
      <el-button v-if="btnAuthObj.submit" :disabled="isSubmitBtnDisabled" :loading="btnLoading" class="submit-btn" type="primary" @click="submitSave">{{ btnTextObj.submit }}</el-button>
      <el-button v-if="btnAuthObj.del" class="cancel-btn" type="info" @click="handleDel">{{ btnTextObj.del }}</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'Dialog',
  components: {
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: ''
    },
    top: {
      type: String,
      default: '15vh'
    },
    btnText: {
      type: Object,
      default: () => {}
    },
    btnAuth: {
      type: Object,
      default: () => {}
    },
    isFooter: {
      type: Boolean,
      default: true
    },
    continueAddDisabled: {
      type: Boolean,
      default: false
    },
    isClickModal: {
      type: Boolean,
      default: true
    },
    isSubmitBtnDisabled: {
      type: Boolean,
      default: false
    },
    btnLoading: {
      type: Boolean,
      default: false
    },
    appendToBody: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  computed: {
    btnAuthObj () {
      return Object.assign({
        del: false,
        cancel: true,
        continueAdd: false,
        submit: true
      }, this.btnAuth)
    },
    btnTextObj () {
      return Object.assign(
        {
          del: '删除',
          cancel: '取消',
          continueAdd: '继续添加',
          submit: '保存'
        },
        this.btnText
      )
    }
  },
  watch: {},
  methods: {
    handleDel () {
      this.$emit('update: visible', false)
      this.$emit('handleDel')
    },
    submitSave () {
      this.$emit('submitSave')
    },
    cancel () {
      this.$emit('update: visible', false)
      this.$emit('cancel')
    },
    continueAdd () {
      this.$emit('continueAdd')
    }

  }
}
</script>

<style lang="scss" scoped>
.dialog-footer {
  .cancel-btn {
    width: 72px;
    height: 36px;
    padding: 12px 24px;
    // background: $operateBtnBack;
    font-size: 13px;
  }
  .submit-btn {
    width: 108px;
    height: 36px;
    padding: 12px 44px;
    // background: $btnColor;
    font-size: 13px;
  }
}

::v-deep .dialog-wrap {
  .el-dialog {
    border-radius: 4px;
  }
  .el-dialog__body {
    padding: 16px 16px 18px;
  }
}
.del-content {
  .iconar-alert {
    color: #f1b44c;
    font-size: 20px;
    line-height: 20px;
    vertical-align: middle;
    padding-right: 12px;
  }

  span {
    line-height: 20px;
    font-size: 13px;
  }
}
</style>
