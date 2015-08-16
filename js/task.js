$(document).ready(function() {

	var data = [
		{"order_num":"8570","create_date":"2012-07-09","order_date":"9 июля 2012","status":"Доставлен","state":"delivered"},
		{"order_num":"7681","create_date":"2012-07-03","order_date":"3 июля 2012","status":"Отправлен курьерской службой","state":"sent"},
		{"order_num":"4001","create_date":"2012-05-19","order_date":"19 мая 2012","status":"Доставлен","state":"delivered"},
		{"order_num":"3975","create_date":"2012-05-17","order_date":"17 мая 2012","status":"Отменен","state":"canceled"}
	];

	var print = function(arr) {
		for (var i = 0; i < arr.length; i++) {
			var day = arr[i].order_date;
			var number = arr[i].order_num;
			var status = arr[i].status;
			var state = arr[i].state;
			$('.order-info').append('<li class="order-keys success ' + state + '">' + '<p >' + day +
			 '</p>' + '<p>' + number + '</p>' + '<p>' + status +
			  '</p>' + '</li>');
		};
		$(".order-keys").append($(".info-wraper"));
	};
	print(data);

	$('li.order-keys').on("click", function(e){
		$(this).children().css("display", "block");
		$( this ).height( $(".info-wraper").height() );
	});

	console.log(data);

	//data-state sort
	$('nav li a').on("click", function(e){ //TEST
		e.preventDefault();
		var data_attr = $(this).attr("data-state");
		switch (data_attr){
			case "delivered":
				$(".is-success li").removeClass("success");
				$(".delivered").addClass("success");
				break;
			case "current":
				$(".is-success li").removeClass("success");
				$(".sent").addClass("success");
				break;
			case "canceled":
				$(".is-success li").removeClass("success");
				$(".canceled").addClass("success");
				break;
			default:
				$(".is-success li").addClass("success");
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