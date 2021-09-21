const http = require('http');


http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end("{name:test}");
}).listen(3000)

{
  name: 'sdsada'
}

apiGetList();

// button onclick (apiGetList)
const apiGetList = () => {
  return request('/dsdad', 'GET', '')
}

function request(url, method, opt, isAsync = true) {
  var xmlhttp;
  if (window.XMLHttpRequest)
  {
      //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
      xmlhttp=new XMLHttpRequest();
  }
  else
  {
      // IE6, IE5 浏览器执行代码
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  if (method === 'get') {
    url = url + '?' + opt
  }

  xmlhttp.open(method, url, isAsync);
  xmlhttp.send();
}