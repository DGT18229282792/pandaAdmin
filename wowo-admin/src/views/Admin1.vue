<!--  -->
<template>
  <div>
         <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>首页</a-breadcrumb-item>
          <a-breadcrumb-item>商品管理</a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
            <div>
                <a-button class="editable-add-btn" @click="handleAdd">Add</a-button>
                <a-table bordered :dataSource="dataSource" :columns="columns">
                <template slot="name" slot-scope="text, record">
                    <editable-cell :text="text" @change="onCellChange(record.key, 'name', $event)"/>
                </template>
                <template slot="operation" slot-scope="text, record">
                    <a-popconfirm
                    v-if="dataSource.length"
                    title="Sure to delete?"
                    @confirm="() => onDelete(record.key)">
                    <a href="javascript:;">删除</a>
                    </a-popconfirm>
                </template>
                </a-table>
            </div>
        </div>
      </a-layout-content>
  </div>
</template>

<script>
import axios from 'axios'
import EditableCell from '@/views/EditableCell'
export default {
  components: {
    EditableCell,
  },
  data () {
    return {
      // dataSource: [{
      //   key: '0',
      //   name: 'Edward King 0',
      //   age: '32',
      //   address: 'London, Park Lane no. 0',
      // }],
      dataSource: [],
      count: 2,
      columns: [{
        title: '商品名',
        dataIndex: 'productName',
        width: '20%',
        scopedSlots: { customRender: 'productName' },
      }, {
        title: '商品价格',
        dataIndex: 'salePrice',
      },  {
        title: '商品数量',
        dataIndex: 'productNum',
      }, {
        title: '商品图片',
        dataIndex: 'productImage',
      },
      {
        title: '商品地址',
        dataIndex: 'productUrl',
      },
      {
        title: '商品ID',
        dataIndex: 'productId',
      }, {
        title: '操作',
        dataIndex: 'operation',
        scopedSlots: { customRender: 'operation' },
      }],
    }
  },
  methods: {
    onCellChange (key, dataIndex, value) {
        const dataSource = [...this.dataSource]
        const target = dataSource.find(item => item.key === key)
        if (target) {
          target[dataIndex] = value
          this.dataSource = dataSource
        }
    },
    onDelete (key) {
      const dataSource = [...this.dataSource]
      this.dataSource = dataSource.filter(item => item.key !== key)
    },
    handleAdd () {
      const { count, dataSource } = this
      const newData = {
        key: count,
        name: `Edward King ${count}`,
        age: 32,
        address: `London, Park Lane no. ${count}`,
      }
      this.dataSource = [...dataSource, newData]
      this.count = count + 1
    },
        getgoods(){
           axios.get('/goods').then(Response=>{
              let goodslist = Response.data.list;
              // console.log(goodslist)
              var dataSource = []
              for(let i = 0;i<goodslist.length;i++){
                dataSource[i]=goodslist[i]
              }
              console.log(dataSource)
              this.dataSource = dataSource
          })
      }

  },
   mounted:function(){
      this.getgoods()
  },
}
</script>
<style>
.editable-cell {
  position: relative;
}

.editable-cell-input-wrapper,
.editable-cell-text-wrapper {
  padding-right: 24px;
}

.editable-cell-text-wrapper {
  padding: 5px 24px 5px 5px;
}

.editable-cell-icon,
.editable-cell-icon-check {
  position: absolute;
  right: 0;
  width: 20px;
  cursor: pointer;
}

.editable-cell-icon {
  line-height: 18px;
  display: none;
}

.editable-cell-icon-check {
  line-height: 28px;
}

.editable-cell:hover .editable-cell-icon {
  display: inline-block;
}

.editable-cell-icon:hover,
.editable-cell-icon-check:hover {
  color: #108ee9;
}

.editable-add-btn {
  margin-bottom: 8px;
}
</style>