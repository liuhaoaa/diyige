var app = new Vue({
  el:'#app',
  methods: {
    onClick:function() {
      console.log('clicked');
    },
    onEnter:function() {
      console.log('进去');
    },
    onOyt:function() {
      console.log('出来');
    },
    onSubmit:function() {
console.log('submitted');
    },
    onKeyup:function() {
console.log('键盘事件');
    }
  }
});