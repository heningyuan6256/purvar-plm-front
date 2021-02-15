<template>
   <div class="home-wrap">
       <!--
           data: 表格数据
           tableColumn: 表格列
           boder: 是否有边框
           height: 固定表格高度，表格内容滚动
           radio: 是否有单选列
           check: 是否有复选列
           checkGroup: 子组件反馈给父组件，要加sync
           radioItem: 子组件反馈给父组件，要加sync
           filter: 筛选列
           saving: 实时保存方法
        -->
       <pv-table
       v-loading="loading"
       :data="tableData"
       :tableColumn="tableColumn"
       :radio="radio"
       :check="check"
       :filter="filter"
       :checkGroup.sync="checkGroup"
       :radioItem.sync="radioItem"
       height="500px"
       @cell-click="cellClickEvent"
       @cell-dblclick="cellDBLClickEvent"
       @saving="saving"
       ></pv-table>
   </div>
</template>

<script>
export default {
  data () {
    return {
      filter: true,
      checkGroup: [],
      radioItem: {},
      check: true,
      radio: true,
      loading: false,
      tableData: [
        {
          name: '12312'
        },
        {
          name: '123123123'
        },
        {
          name: '123123123'
        },
        {
          name: '123123123'
        },
        {
          name: '123123123'
        },
        {
          name: '123123123'
        },
        {
          name: '123123123'
        },
        {
          name: '123123123'
        },
        {
          name: '123123123'
        },
        {
          name: '123123123'
        }
      ],
      tableColumn: [
        {
          title: '姓名',
          field: 'name',
          minWidth: '100',
          sort: true,
          formatter: this.formatterName,
          fix: true,
          editRender: { name: '$input' }
        },
        {
          title: '年龄',
          field: 'age',
          minWidth: '80'
        },
        {
          title: '性别',
          field: 'sex',
          minWidth: '80'
        },
        {
          title: '地址',
          field: 'address',
          minWidth: '150'
        }
      ]
    }
  },
  methods: {
    formatterName (val) {
      return val.cellValue === '12312' ? 'qwe' : val.cellValue
    },
    cellClickEvent ({ column }) {
      console.log(`单元格点击${column.title}`)
    },
    cellDBLClickEvent ({ column }) {
      console.log(`单元格双击${column.title}`)
    },
    saving (row, field) {
      console.log('当前行的值：', row)
      console.log('当前列的值：', field)
    }
  }
}
</script>

<style scoped>
.home-wrap{
    padding: 10px;
}
</style>
