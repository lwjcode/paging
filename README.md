# paging
a simple paging plugin

使用方法：

```
	/*运行分页函数, 
	*第一个参数为当前页，
	*第二个为最大页，
	*第三个为跳转链接要携带的参数，是个数组，里面的元素为若干个
	json对象，分别是键名和键值
	*/
	paging(10, 100, '.mainbody', [
		{
			'name': 'nowpage',
			'value': 10
		},{
			'name': 'maxpage',
			'value': 100
		},{
			'name': 'type',
			'value': 'windows'
		}
	]);
  
```

运行截图：

![这里写图片描述](http://img.blog.csdn.net/20170619222436532?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvUGlja2luZ191cF9zdG9uZXM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

有需要的可以去下载，之后还会继续完善的。
