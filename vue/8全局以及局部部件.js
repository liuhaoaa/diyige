// Vue.component  就是组件的意思   第一个传参的就是这个组件在vue里面的名字
Vue.component('alert');
var Alert = {
  template:'<button @click="on_click">弹弹弹</button>',
  methods:{
    on_click:function() {
      alert('yo');
    }
  }
};
new Vue ({
  el:'#seg1',
  components:{
    alert:Alert
  }
});
new Vue ({
  el:'#seg2'
});

