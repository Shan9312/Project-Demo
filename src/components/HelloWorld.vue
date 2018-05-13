<template>
  <div>
  </div>
</template>

<script>
import IEcharts from 'vue-echarts-v3/src/full.js'; // 引用echarts
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    IEcharts
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
// @import url('../assets/test.less');
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
  li {
  display: inline-block;
  margin: 0 10px;
}
}
a {
  color: #42b983;
}
</style>
