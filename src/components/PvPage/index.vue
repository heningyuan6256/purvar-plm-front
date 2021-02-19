<template>
  <div :class="{'hidden':hidden}" class="pagination-container clearfix">
    <el-pagination
      :background="background"
      :current-page.sync="currentPage"
      :page-size.sync="pageSize"
      :layout="layout"
      :page-sizes="pageSizes"
      :total="total"
      v-bind="$attrs"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>

export default {
  name: 'Pagination',
  props: {
    total: {
      required: true,
      type: Number
    },
    page: {
      type: Number,
      default: 1
    },
    limit: {
      type: Number,
      default: 10
    },
    pageSizes: {
      type: Array,
      default () {
        return [10, 20, 30, 50]
      }
    },
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper'
    },
    background: {
      type: Boolean,
      default: true
    },
    autoScroll: {
      type: Boolean,
      default: true
    },
    hidden: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    currentPage: {
      get () {
        return this.page
      },
      set (val) {
        this.$emit('update:page', val)
      }
    },
    pageSize: {
      get () {
        return this.limit
      },
      set (val) {
        this.$emit('update:limit', val)
      }
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  ::v-deep .el-pagination.is-background{
    background: transparent;
    height: 32px;
    line-height: 32px;
  }
  .btn-prev:disabled, .btn-next:disabled ,.btn-next ,.btn-prev{
      background: transparent;
      height: 32px;
      line-height: 32px;
      color: #C0C4CC;
    }
  .el-pagination {
    padding: 0;
    color: #74788D;
    font-weight: 500;
    float: right;
  }
.pagination-container {
  margin-top: 20px;
  text-align: right;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  /* float: right; */
}
  ::v-deep .el-pager {
    padding: 0 8px;
    display: block;
    float: left;
  }
      .number{
      background: transparent;
      height: 32px;
      line-height: 32px;
      min-width: 27px;
      font-weight: normal;
    }
      .number:active{
        border-radius: 50px;
      }
  ::v-deep .el-pagination .el-pagination button{
    height: 32px;
    line-height: 32px;
  }
@media (max-width: 1440px) {
  .pagination-container {
    margin-top: 16px;
  }
}
@media (max-width: 1360px) {
  .pagination-container {
    margin-top: 12px;
  }
}

@media (max-width: 575.9px) {
   ::v-deep .el-pagination .el-pagination__sizes{
    display: none;
  }
}
.pagination-container.hidden {
  display: none;
}
</style>
