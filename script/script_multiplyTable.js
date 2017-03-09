function multiplyTable(id)
{
	var size = +prompt("Введите размер таблицы", "10");
	var table = $("<table>");

// Заголовочные данные таблицы

	var tr = $("<tr>");
	for (var i = 0; i <= size; i++)
	{
		var th = $("<th>").text(i);
		tr.append(th);
	}
	table.append(tr);

// Обычные данные таблицы

	for (var i = 1; i <= size; i++)
	{
		var tr = $("<tr>").append( $("<th>").text(i) );

		for (var j = 1; j <= size; j++) 
		{
			var td = $("<td>").text(i*j);
			var span = $("<span>");
			td.append(span);
			tr.append(td);
		}

		table.append(tr);
	}
	debugger;
	var div = $("<div>").attr("id", id).append(table);
	$("body").append(div);

// Срабатывание события когда мышь появляется над элементом

	$("td").mouseover(function()
	{
    	var trs = $(this).parent().parent().find("tr"); // найти родителя tr, потом найти все tr в родителе		
		var indexTR = $(trs).index($(this).parent()); // возвращает индекс элем. в массиве

    	var tds = $(this).parent().find("td"); // найти родителя td, потом найти все td в родителе
		var indexTD = $.inArray( this, tds ); // возвращает индекс элем. в массиве
				
		var k = 1; // индекс в span`е

		for (var i = 2; i <= indexTR + 1; i++) // indexTR + 1, потому что nth-child начинает считать с 1-цы, а индекс идет с 0
		{
			for (var j = 2; j <= indexTD + 2; j++) // indexTD + 2, по той же причине, но "+ 2", из-за того, что в tr кроме td есть еще th который nth-child считает 1 элем.
			{
				$( "table tr:nth-child(" + i + ") " + "td:nth-child(" + j + ")" )
					.css("background-color", "#CAE478");
				$( "table tr:nth-child(" + i + ") " + "td:nth-child(" + j + ") span" ).text(k++);
			}
		}
	});
	    
// Срабатывание события когда мышь уходит из него

	$("td").mouseout(function()
	{ 	
	    $("td").css("background-color", "white");
	    $("span").text("");
	});

// CSS

	$("table").css({
		"border-collapse": "collapse",
		border: "1px solid grey"
	});
	$("th").css("background-color", "#E2A070");
	$("td").css({
		padding: "12px",
		border: "1px solid grey",
		position: "relative"
	});
	$("span").css({
		"font-size": "9px",
		color: "red",
		position: "absolute",
		bottom: 0,
		right: 0
	});
}

multiplyTable("multiplic");