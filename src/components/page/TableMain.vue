<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo">IVIEW布局</div>
          <div class="layout-nav">
            <MenuItem name="1">
              <Icon type="ios-navigate" ></Icon>
              Item 1
            </MenuItem>
            <MenuItem name="2">
              <Icon type="ios-keypad"></Icon>
              Item 2
            </MenuItem>
            <MenuItem name="3">
              <Icon type="ios-analytics"></Icon>
              Item 3
            </MenuItem>
            <MenuItem name="4">
              <Icon type="ios-paper"></Icon>
              Item 4
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Content :style="{padding: '0 50px'}">
        <Breadcrumb :style="{margin: '20px 0'}">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Components</BreadcrumbItem>
          <BreadcrumbItem>
            <Dropdown style="margin-left: 20px" class="test_up">
              <Button type="primary">
                下拉菜单
                <Icon type="ios-arrow-down"></Icon>
              </Button>
              <DropdownMenu slot="list">
                <DropdownItem>驴打滚</DropdownItem>
                <DropdownItem>炸酱面</DropdownItem>
                <DropdownItem disabled>豆汁儿</DropdownItem>
                <DropdownItem>冰糖葫芦</DropdownItem>
                <DropdownItem divided>北京烤鸭</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </BreadcrumbItem>
        </Breadcrumb>

        <Card>
          <Button type="warning" @click="getDataTest">ShowMovieList</Button>
          <Button type="warning" @click="postDataTest">后端接收参数测试</Button>
          <Dropdown style="margin-left: 20px">
            <Button type="primary">
              下拉菜单
              <Icon type="ios-arrow-down"></Icon>
            </Button>
            <DropdownMenu slot="list">
              <DropdownItem>驴打滚</DropdownItem>
              <DropdownItem>炸酱面</DropdownItem>
              <DropdownItem disabled>豆汁儿</DropdownItem>
              <DropdownItem>冰糖葫芦</DropdownItem>
              <DropdownItem divided>北京烤鸭</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <div style="min-height: 200px;">
            <v-table
              is-horizontal-resize
              style="width:100%"
              :columns="columns1"
              :table-data="allData"
              row-hover-color="#eee"
              row-click-color="#edf7ff"
            ></v-table>
          </div>
        </Card>
        <br/>
        <Card>
          <div style="min-height: 200px;">
            <v-table
              is-horizontal-resize
              style="width:100%"
              :columns="columns"
              :table-data="tableData"
              row-hover-color="#eee"
              row-click-color="#edf7ff"
            ></v-table>
          </div>
        </Card>

      </Content>
      <!--{{ testData }}-->
      <!--测试是否取到后端数据-->
    </Layout>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'table-main',
  data () {
    return {
      testData: 'Hello Test Data',
      allData: null,
      tableData: [
        /* eslint-disable */
        {"name": "赵伟", "tel": "156*****1987", "hobby": "钢琴、书法、唱歌", "address": "上海市黄浦区金陵东路569号17楼"},
        {'name': '周伟', 'tel': '197*****1123', 'hobby': '钢琴、书法、唱歌', 'address': '上海市青浦区青浦镇章浜路24号'},
        {'name': '吴伟', 'tel': '183*****6678', 'hobby': '钢琴、书法、唱歌', 'address': '上海市松江区乐都西路867-871号'}
      ],
      columns: [
        {field: 'name', title: '姓名', width: 80, titleAlign: 'center', columnAlign: 'center', isResize: true},
        {field: 'tel', title: '手机号码', width: 150, titleAlign: 'center', columnAlign: 'center', isResize: true},
        {field: 'hobby', title: '爱好', width: 150, titleAlign: 'center', columnAlign: 'center', isResize: true},
        {field: 'address', title: '地址', width: 280, titleAlign: 'center', columnAlign: 'left', isResize: true}
      ],
      columns1: [
        {field: 'filmName', title: '电影名', width: 80, titleAlign: 'center', columnAlign: 'center', isResize: true},
        {field: 'rate', title: '评分', width: 150, titleAlign: 'center', columnAlign: 'center', isResize: true},
        {field: 'director', title: '导演', width: 150, titleAlign: 'center', columnAlign: 'center', isResize: true},
        {field: 'filmClass', title: '类型', width: 150, titleAlign: 'center', columnAlign: 'center', isResize: true},
        {field: 'area', title: '地区', width: 280, titleAlign: 'center', columnAlign: 'left', isResize: true}
      ]
    }
  },
  methods: {
    getDataA11 () {
      // var api = 'http://localhost:8888/home1'
      let vm = this
      alert('into function')
      vm.$axios.get('/yzc/home1').then((response) => {
        console.log(response.data)
      }).catch(function (error) {
        console.log(error)
      })

      // vm.axios({
      //   method: 'GET',
      //   // url: 'http://localhost:8888/home1'
      // }).then(res => {
      //   if (res.data.msg === 'success') {
      //     console.log('success！！')
      //     vm.allData = res.data.res
      //   }
      // })
    },
    getDataTest () {
      this.axios.get('http://192.168.0.13:8888/home1').then(body => {
        this.allData  = body.data
        this.testData = body.data
      })
    },
    postDataTest () {
      this.axios.get('http://192.168.2.100:8888/home1').then(body => {
        this.allData  = body.data
        this.testData = body.data
      })
    }
  }

}
</script>

<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    height: 100%;
  }
  .layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
    font-weight: bold;
    text-align: center;
    color: #49ffcc;
  }
  .layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }
  .layout-footer-center{
    text-align: center;
  }
  .test_up{
    margin-top: -10px;
  }
</style>
