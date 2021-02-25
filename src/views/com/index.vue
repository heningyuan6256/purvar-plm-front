
<template>
<div>
    <!-- {{ baseUrl }}
    {{ item }} -->
    <el-form v-model="form" size="mini" label-width="150px">
    <pv-form
    :forms="form"
    :form-config="formConfig"
    >
    </pv-form>
    </el-form>
</div>
</template>

<script>
import PvForm from '@/components/PvForm'
import { getList } from '@/api/test'
export default {
  components: {
    PvForm
  },
  data () {
    return {
      form: {},
      formConfig: [
        { name: 'name', label: '节点名称：', type: 'text', width: '400px', disabled: false },
        { name: 'unicode', label: 'Unicode：', type: 'text', width: '400px', disabled: false },
        { name: 'baseObjectsName', label: '适用变更对象：', type: 'date', props: {dateCondition: '1'}, width: '400px', disabled: false },
        { name: 'ppObjects', label: '匹配实施对象：', type: 'text', width: '400px', disabled: true },
        { name: 'baseConditionId', label: '审批条件：', rules: [{ required: true, trigger: 'blur', message: '请选择' }], width: '400px', type: 'select', data: [] },
        { name: 'baseConditionIdObject', label: '审批条件对象：', width: '400px', type: 'text', disabled: 'disabled' },
        { name: 'notificationRole', label: '抄送通知角色：', type: 'select', width: '400px', multiple: true, collapseTags: false, data: [] },
        { name: 'notificationUser', label: '抄送通知用户：', type: 'seldsect', width: '400px', multiple: true, collapseTags: false, data: [] }
      ]
    }
  },
  created () {
    // this.getTableList()
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
