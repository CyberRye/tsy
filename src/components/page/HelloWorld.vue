<template>
    <div class="hello">
      <div>123</div>
      <Button type="warning" @click="GetTest">Hello</Button>
      {{ content }}
    </div>
</template>

<script>
export default {
  data () {
    return {
      content: '',
      msg: 'Welcome to Ysour Vue.js App'
    }
  },
  methods: {
    GetTest () {
      this.axios.get('http://192.168.2.100:8888/home1').then(body => {
        this.content = body.data
      })
    }
  }
  // ,mounted () {
  //   // eslint-disable-next-line
  //   axios
  //     .get('https://www.runoob.com/try/ajax/json_demo.json')
  //     .then(response => (this.info = response))
  //     .catch(function (error) { // 请求失败处理
  //       console.log(error)
  //     })
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
