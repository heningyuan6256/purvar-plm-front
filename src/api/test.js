import request from '@/utils/request'
// const url = this.baseUrl
// 获取列表数据
export function getList (data) { return request({url: `/api/getTableList`, methods: 'post', params: data}) }
