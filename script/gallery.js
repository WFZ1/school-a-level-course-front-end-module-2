function gallery(id, links) 
{
	var div = $("<div>").attr("id", id);
	var img = $("<img>").attr("src", links[0]);
	var button2 = $("<button>").attr("id", "back").text("back");
	var button1 = $("<button>").attr("id", "next").text("next");

	div.append(img);
	$("body").append(div, button2, button1);

	$(button2).click(function() {
		img = $("img").attr("src", links[0]);
	});

	$(button1).click(function() {
		img = $("img").attr("src", links[1]);
	});
}

gallery("galleryContainer",
	["https://static33.cmtt.ru/paper-media/fd/92/e5/0479e08f8e852d.png",
	"http://s00.yaplakal.com/pics/pics_original/1/9/4/3736491.jpg"]);

