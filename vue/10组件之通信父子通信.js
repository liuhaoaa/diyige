// Vue.component('alert',{
//   template:'<button @click="on_click">弹弹弹</button>',
//   // props 里面传的值要和html的一样才会解析
//   props:['msg'],
//   methods:{
//     on_click:function() {
//       alert(this.msg);
//     }
//   }
// });

Vue.component('user',{
  template:'<a href="\'/user/\' + username">{{username}}</a>',
  // props 里面传的值要和html的一样才会解析
  props:['username'],
  methods:{}
});

new Vue ({
  el:'#app',
});