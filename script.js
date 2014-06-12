$.ajax(
{
 	url:"channels.json",
  	dataType:"json",
 	success:function(data)
 	{
		var i;
		for(i = 0; i < data.length; i++)
		{

		  // $(".channels-box").append($("<li/>")
		  // 					.append($("<img/>", {src:data[i].image}))
		  // 					.append($("<h2/>", {src:data[i].name}))
		  // 					.append($("<a/>", {href:data[i].link, title:data[i].name}))
		  // 					);
			$(".channels-box").append('<li><img src="' + data[i].image + '"/><h2>' + data[i].name + '</h2><a title="' + data[i].name + '" href="' + data[i].link + '">Website</a></li>');
							
		}
	}
});

// echo '<li>';
// 							echo '<img src="'.$item->image.'"/>';
// 							echo '<h2>'.$item->name.'</h2>';
// 							echo '<a href="'.$item->link.'" title="'.$item->name.'">Website</a>';
// 							echo '</li>';