<style scoped>
  .layout-con {
    height: 100%;
    width: 100%;
  }

  .menu-item span {
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }

  .menu-item i {
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }

  .collapsed-menu span {
    width: 0px;
    transition: width .2s ease;
  }

  .collapsed-menu i {
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
  }
  .right{
    float:right;
  }
  .left{
    float:left;
  }
  .logo{
    font-size: medium;
  }
  .demo-badge{
    top:6px;
    width: 36px;
    height: 36px;
    background: #eee;
    border-radius: 6px;
    display: inline-block;
  }
  .echarts {
    margin-left: 20px;
  }
  .echarts-item {
    float: left;
    width: 500px;
    height: 400px;
  }
</style>
<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo"></div>
          <div class="layout-nav" >
            <MenuItem name="5" class="logo" >
              <Icon type="ios-navigate" ></Icon>
              源图
            </MenuItem>
            <MenuItem name="1" class="right" >
              <Icon type="ios-contact" />
              用户
            </MenuItem>
            <MenuItem name="2" class="right">
              <Icon type="md-thumbs-up" />
              点个赞
            </MenuItem>
            <!--<MenuItem name="3" class="right">-->
              <!--<Icon type="ios-analytics"></Icon>-->
              <!--Item 3-->
            <!--</MenuItem>-->
            <MenuItem name="4" class="right">
              <Badge :count="3">
                <a href="#" class="demo-badge"></a>
              </Badge>
            </MenuItem>
            <MenuItem name="5" class="right" >
                <Button type="success" long @click="handleSubmit">SUBMIT</Button>
                <br><br>
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout :style="{minHeight: '100vh'}">
        <Sider collapsible :collapsed-width="78" v-model="isCollapsed">
          <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
            <MenuItem name="1-1">
              <Icon type="search"></Icon>
              <span>个人信息</span>
            </MenuItem>
            <MenuItem name="1-2">
              <Icon type="search" />
              <span>工作台</span>
            </MenuItem>
            <Submenu name="2">
              <template slot="title">
                <!--<Icon type="ios-navigate"></Icon>-->
                <span>&nbsp;&nbsp;&nbsp;项目管理</span>
              </template>
              <MenuItem name="1-3">我的项目</MenuItem>
              <MenuItem name="1-4">项目分析</MenuItem>
              <MenuItem name="1-5">我的收藏</MenuItem>
              <MenuItem name="1-6">归档项目</MenuItem>
              <MenuItem name="1-7">我的组织</MenuItem>
              <MenuItem name="1-8">回收站</MenuItem>
            </Submenu>

            <MenuItem name="1-9">
              <Icon type="settings"></Icon>
              <span>消息提醒</span>
            </MenuItem>

          </Menu>
        </Sider>
        <Layout>
          <!--<Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}"></Header>-->
          <Content :style="{padding: '0 16px 16px'}">
            <Menu mode="horizontal" :theme="theme1" active-name="1">
              <MenuItem name="1" class="left">
                <Icon type="ios-paper" />
                工作台
              </MenuItem>
              <MenuItem name="2" class="left">
                <Icon type="ios-people" />
                项目管理
              </MenuItem>
              <Submenu name="3" class="left">
                <template slot="title">
                  <Icon type="ios-stats" />
                  项目分析
                </template>
                <MenuGroup title="使用">
                  <MenuItem name="3-1">新增和启动</MenuItem>
                  <MenuItem name="3-2">活跃分析</MenuItem>
                  <MenuItem name="3-3">时段分析</MenuItem>
                </MenuGroup>
                <MenuGroup title="留存">
                  <MenuItem name="3-4">用户留存</MenuItem>
                  <MenuItem name="3-5">流失用户</MenuItem>
                </MenuGroup>
              </Submenu>
              <MenuItem name="4" class="left">
                <Icon type="ios-construct" />
                系统设置
              </MenuItem>
            </Menu>

            <!--<Card>-->

              <div class="echarts-item">
                <IEcharts :option="pie"></IEcharts>
              </div>
              <div class="echarts-item">
                <IEcharts :option="pie_radius"></IEcharts>
              </div>
              <div class="echarts-item">
                <IEcharts :option="line"></IEcharts>
              </div>
              <div class="echarts-item">
                <IEcharts :option="bar"></IEcharts>
              </div>

            <!--</Card>-->
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import IEcharts from 'vue-echarts-v3'
// import Api from './api'
export default {
  methods: {
    handleSubmit: function () {
      this.$axios({
        method: 'GET',
        url: 'http://192.168.2.100:'

        // 参数

      }).then(res => {
        if (res.data.msg === 'success') {
          this.canreceive = true
        }
      })
      // alert('123')
    }
  },
  computed: {
    menuitemClasses: function () {
      return [
        'menu-item',
        this.isCollapsed ? 'collapsed-menu' : ''
      ]
    }
  },
  components: {
    IEcharts
  },
  data: () => ({
    canreceive: false,
    isCollapsed: false,
    line: {
      title: {
        text: '曲线图'
      },
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'line',
        data: [5, 20, 36, 10, 10, 20]
      }]
    },
    bar: {
      title: {
        text: '柱状图'
      },
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    },
    pie: {

      title: {
        text: '饼状图',
        x: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋']
      },
      series: [{
        name: '销量',
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
        data: [{
          value: 335,
          name: '衬衫'
        }, {
          value: 310,
          name: '羊毛衫'
        }, {
          value: 234,
          name: '雪纺衫'
        }, {
          value: 135,
          name: '裤子'
        }, {
          value: 548,
          name: '高跟鞋'
        }],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }]
    },
    pie_radius: {

      title: {
        text: '环形图',
        x: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋']
      },
      series: [{
        name: '销量',
        type: 'pie',
        radius: ['40%', '60%'],
        data: [{
          value: 335,
          name: '衬衫'
        }, {
          value: 310,
          name: '羊毛衫'
        }, {
          value: 234,
          name: '雪纺衫'
        }, {
          value: 135,
          name: '裤子'
        }, {
          value: 548,
          name: '高跟鞋'
        }],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }]
    }
  })
}

</script>
