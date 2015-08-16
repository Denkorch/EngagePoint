$(document).ready(function() {

	var data = [
		{"order_num":"8570","create_date":"2012-07-09","order_date":"9 июля 2012","status":"Доставлен"},
		{"order_num":"7681","create_date":"2012-07-03","order_date":"3 июля 2012","status":"Отправлен курьерской службой"},
		{"order_num":"4001","create_date":"2012-05-19","order_date":"19 мая 2012","status":"Доставлен"},
		{"order_num":"3975","create_date":"2012-05-17","order_date":"17 мая 2012","status":"Отменен"}
	];

	var print = function(arr) {
		for (var i = 0; i < arr.length; i++) {
			var day = arr[i].order_date;
			var number = arr[i].order_num;
			var status = arr[i].status;
			$('.order-info').append('<li class="order-keys">' + '<p >' + day +
			 '</p>' + '<p>' + number + '</p>' + '<p>' + status +
			  '</p>' + '</li>');
		};

		$('li.order-keys').on("click", function(e){
			$(this).css("position", "relative");
			$(".info-wraper").css("display", "block");
			$( this ).height( $(".info-wraper").height() + 100 );
		});
	};
	print(data);

	console.log(data);

	//data-state sort

	$('nav li a').on("click", function(e){
		e.preventDefault();
		$(".order-info").empty();
		var data_attr = $(this).attr("data-state");
		var data1 = data;
		switch (data_attr){
			case "delivered":
				for (var i = 0; i < data.length; i++) {
					if (data[i].status == "Доставлен") {
						data1 = data.splice(i, 1);
						data = data1.concat(data);
						print(data1);
					};
				};
				console.log(data1);
				break;
			case "current":
				for (var i = 0; i < data.length; i++) {
					if (data[i].status == "Отправлен курьерской службой") {
						data1 = data.splice(i, 1);
						data = data1.concat(data);
						print(data1);
					};
				};
				console.log(data);
				break;
			case "canceled":
				for (var i = 0; i < data.length; i++) {
					if (data[i].status == "Отменен") {
						data1 = data.splice(i, 1);
						data = data1.concat(data);
						print(data1);
					};
				};
				console.log(data);
				break;
			default:
				print(data);
				console.log(data);
		};
	});

	//order-info-title items sort
	$(".order-info-title a").attr("data-count", "1");
	$('a[href="#status"]').on("click", function(e){
		e.preventDefault();

		if ($(this).attr("data-count") == 1) {
			data.sort(function(a, b) {
				if (a.status > b.status) {
					return 1;
				}
				if (a.status < b.status) {
					return -1;
				}
				return 0;
			});
			$(".order-info").empty();
			print(data);
			$(this).attr("data-count", "2")
		} else {
			data.sort(function(a, b) {
				if (a.status < b.status) {
					return 1;
				}
				if (a.status > b.status) {
					return -1;
				}
				return 0;
			});
			$(".order-info").empty();
			print(data);
			$(this).attr("data-count", "1")
		};
		
	});

	$('a[href="#number"]').on("click", function(e){
		e.preventDefault();

		if ($(this).attr("data-count") == 1) {
			data.sort(function(a, b) {
				return a.order_num - b.order_num;
			});
			$(".order-info").empty();
			print(data);
			$(this).attr("data-count", "2")
		} else {
			data.sort(function(a, b) {
				return b.order_num - a.order_num;
			});
			$(".order-info").empty();
			print(data);
			$(this).attr("data-count", "1")
		};
	});

	$('a[href="#date"]').on("click", function(e){
		e.preventDefault();
		$('a[href="#number"]').click();
	});

	//order-specs toggle

	// var orderId = [
	// 	{
	// 		"Имя получателя":"Иванов Иван Иванович",
	// 		"tel":"+380 50 123-45-56",
	// 		"delivery":"Курьером",
	// 		"address":"г. Киев, ул. Саксаганского, 65, кв.11",
	// 		"payment":"	"
	// 	}
	// ];



});