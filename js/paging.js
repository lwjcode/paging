function paging(nowpage, maxpage, parentpane, options){
	if (maxpage > 1){
		//生成跳转链接
		var href_value = '';
		for (var i = 0; i < options.length; i++){
			if (i != options.length - 1){
				href_value += options[i].name + '=' + options[i].value + '&';
			}else{
				href_value += options[i].name + '=' + options[i].value;
			}
		}

		//分页的父容器
		var page_pane = document.createElement('div');
		page_pane.className = 'page';

		//上一页
		var prv_page = document.createElement('a');
			prv_page.innerHTML = '<';
			prv_page.href = href_value;
			page_pane.appendChild(prv_page);

		//小于10页时的样式
		if (maxpage < 10){
			for (var i = 1; i <= maxpage; i++){
				var page_item = document.createElement('a');
				page_item.innerHTML = i + '';
				page_item.href = href_value;
				page_pane.appendChild(page_item);
				if (i == nowpage){
					page_item.className = 'activity';
				}
			}
		}

		//大于10小于maxpage，且小于4时的样式
		else if (nowpage <= 4){
			for (var i = 1; i <= 5; i++){
				var page_item = document.createElement('a');
				page_item.innerHTML = i + '';
				page_item.href = href_value;
				page_pane.appendChild(page_item);
				if (i == nowpage){
					page_item.className = 'activity';
				}
			}
			var page_block = document.createElement('a');
			page_block.innerHTML = '...';
			page_block.href = '##';
			page_pane.appendChild(page_block);
			for (var i = 2; i >= 0; i--){
				var page_item = document.createElement('a');
				page_item.innerHTML = (maxpage - i) + '';
				page_item.href = href_value;
				page_pane.appendChild(page_item);
			}
		}

		//大于等于5小于最大页减3时的样式
		else if (nowpage >= 5 && nowpage < maxpage - 3){
			var page_start = document.createElement('a');
			page_start.innerHTML = '1';
			page_start.href = href_value;
			page_pane.appendChild(page_start);

			var page_block_prv = document.createElement('a');
			page_block_prv.innerHTML = '...';
			page_block_prv.href = '##';
			page_pane.appendChild(page_block_prv);
			for (var i = -2; i <=2; i++){
				var page_item = document.createElement('a');
				page_item.innerHTML = nowpage + i;
				page_item.href = href_value;
				page_pane.appendChild(page_item);
				if (i == 0){
					page_item.className = 'activity';
				}
			}
			var page_block_next = document.createElement('a');
			page_block_next.innerHTML = '...';
			page_block_next.href = '##';
			page_pane.appendChild(page_block_next);
			var page_end = document.createElement('a');
			page_end.innerHTML = maxpage + '';
			page_end.href = href_value;
			page_pane.appendChild(page_end);
		}

		//大于等于最大页减3时的样式
		else if (nowpage >= maxpage-3){
			for (var i = 1; i <= 4; i++){
				var page_item = document.createElement('a');
				if (i != 4){
					page_item.href = href_value
					page_item.innerHTML = i + '';
				}else{
					page_item.href = '##';
					page_item.innerHTML =  '...';
				}
				page_pane.appendChild(page_item);
			}
			
			for (var i = maxpage - 4; i <= maxpage; i++){
				var page_item = document.createElement('a');
				page_item.href = href_value;
				page_item.innerHTML = i + '';
				page_pane.appendChild(page_item);
				if (i == nowpage){
					page_item.className = 'activity';
				}
			}
		}

		//下一页
		var next_page = document.createElement('a');
			next_page.innerHTML = '>';
			next_page.href = href_value;
			page_pane.appendChild(next_page);

		//加入页面中
		var parentpane = document.querySelector(parentpane);
		parentpane.appendChild(page_pane);
	}
	
}