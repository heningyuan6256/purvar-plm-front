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
           radioItem: 子组件反馈给父组件，要sync
           filter: 筛选列
           dealEvent: 自定义事件
           buttonColumn: 按钮组
           exportVisible: 是否展示导出按钮
           printVisible: 是否展示打印按钮
           @cell-click: 单元格单击事件
           @cell-dblclick: 单元格双击事件
           @saving: 实时保存方法
           @dealEvent: 自定义方法
           @getTableList: 获取列表数据方法
        -->
       <pv-table
       v-loading="loading"
       :data="tableData"
       :tableColumn="tableColumn"
       :radio="radio"
       :check="check"
       :checkGroup.sync="checkGroup"
       :radioItem.sync="radioItem"
       height="500px"
       :tool="tool"
       :filter="filter"
       :search="search"
       :buttonColumn="buttonColumn"
       :btnFlag="btnFlag"
       :exportVisible="exportVisible"
       :printVisible="printVisible"
       @cell-click="cellClickEvent"
       @cell-dblclick="cellDBLClickEvent"
       @saving="saving"
       @dealEvent="dealEvent"
       @getTableList="getTableList"
       ></pv-table>
       <!--
         pageNo: 当前的页数
         pageSize: 每页的大小
         total: 总数
         getList: 获取数据方法
        -->
      <pv-page
      :current-page.sync="pageNo"
      :page-size.sync="pageSize"
      :total="total"
      @getList="getList"
      ></pv-page>
      <pv-dialog
      :value.sync="visible"
      :title="dialogTitle"
      width="800"
      height="400"
      :footer="footer"
      @cancel="cancel"
      @confirm="confirm"
      ></pv-dialog>
   </div>
</template>

<script>
import PvTable from '@/components/PvTable'
import PvDialog from '@/components/PvDialog'
import PvPage from '@/components/PvPage'
export default {
  components: {
    PvDialog,
    PvTable,
    PvPage
  },
  data () {
    return {
      exportVisible: true,
      printVisible: true,
      btnFlag: true,
      searchVal: '',
      search: true,
      tool: true,
      buttonColumn: [
        {
          name: 'add',
          label: '添加',
          type: 'primary'
        },
        {
          name: 'delete',
          label: '删除',
          type: 'danger'
        }
      ],
      footer: true,
      visible: false,
      dialogTitle: '对话框标题',
      pageNo: 1,
      total: 100,
      pageSize: 10,
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
    getTableList (val) {
      console.log(val, '搜索表格的值')
    },
    // 表格方法
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
    },
    // 分页方法
    getList () {
    },
    cancel () {},
    confirm () {},
    dealEvent (val) {
      switch (val) {
        case 'add':
          console.log('执行添加方法')
          break
        case 'delete':
          console.log('执行删除方法')
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.home-wrap{
    padding: 10px;
}
</style>
