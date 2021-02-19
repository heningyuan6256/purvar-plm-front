<template>
  <div>
      <vxe-toolbar v-if="filter" custom>
      </vxe-toolbar>
      <vxe-table
      id="table"
      ref="xTable"
      class="table"
      keep-source
      v-on="$listeners"
      v-bind="$attrs"
      :custom-config="{storage: filter, checkMethod: checkColumnMethod}"
      :edit-config="{trigger: 'dblclick', mode: 'cell'}"
      highlight-current-row
      highlight-hover-row
      show-overflow
      border="inner"
      resizable
      round
      @checkbox-all="selectAllEvent"
      @checkbox-change="selectChangeEvent"
      @radio-change="radioChangeEvent"
      @edit-closed="editClosedEvent"
      >
      <vxe-table-column v-if="radio" type="radio" width="60" align="center">
        <template v-slot:header>
            <vxe-button type="text" @click="clearRadioRowEevnt" :disabled="radioFlag">取消</vxe-button>
        </template>
      </vxe-table-column>
      <vxe-table-column v-if="check" type="checkbox" width="60" align="center">
      </vxe-table-column>
      <vxe-table-column type="seq" title="#" width="60"></vxe-table-column>
          <vxe-table-column v-for="(item, index) in tableColumn"
          :key="index"
          :title="item.title"
          :field="item.field"
          :min-width="item.minWidth"
          :sortable="item.sort"
          :formatter="item.formatter"
          :edit-render="item.editRender"
          >
          </vxe-table-column>
      </vxe-table>
  </div>
</template>

<script>

export default {
  props: {
    tableColumn: {
      props: Array,
      default: () => []
    },
    radio: {
      props: Boolean,
      default: false
    },
    check: {
      props: Boolean,
      default: false
    },
    radioItem: {
      props: Object,
      default: () => {}
    },
    checkGroup: {
      props: Array,
      default: () => []
    },
    filter: {
      props: Boolean,
      default: false
    }
  },
  data () {
    return {
      // 表格单选data
      radioFlag: true,
      selectTab: 'tab1'
    }
  },
  methods: {
    // 表格单选方法
    radioChangeEvent ({ row }) {
      this.radioFlag = false
      this.$emit('update:radioItem', row)
    },
    clearRadioRowEevnt () {
      this.radioFlag = true
      this.$emit('update:radioItem', {})
      this.$refs.xTable.clearRadioRow()
    },
    // 表格多选方法
    selectAllEvent ({ checked, records }) {
      this.$emit('update:checkGroup', records)
    },
    selectChangeEvent ({ checked, records }) {
      this.$emit('update:checkGroup', records)
    },
    // 筛选列
    checkColumnMethod ({ column }) {
      const filterColumn = this.tableColumn.filter(item => { return item.fix }).map(item => { return item.field }) || []
      if (filterColumn.includes(column.property)) {
        return false
      } else {
        return true
      }
    },
    // 实时保存
    editClosedEvent ({ row, column }) {
      let field = column.property
      setTimeout(() => {
        this.$emit('saving', row, field)
        // this.$message.success(`局部保存成功！ ${field}=${cellValue}`)
        // 局部更新单元格为已保存状态
        // this.$refs.xTable.reloadRow(row, null, field)
      }, 300)
    }
  }
}
</script>

<style scoped>
.vxe-toolbar{
    border-bottom: 1px solid #eff2f7;
}
</style>
