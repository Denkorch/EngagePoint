$(document).ready(function() {

	var data = [
	{"order_num":"8570","create_date":"2012-07-09","order_date":"9 июля 2012","status":"Доставлен"},
	{"order_num":"7681","create_date":"2012-07-03","order_date":"3 июля 2012","status":"Отправлен курьерской службой"},
	{"order_num":"4001","create_date":"2012-05-19","order_date":"19 мая 2012","status":"Доставлен"},
	{"order_num":"3975","create_date":"2012-05-17","order_date":"17 мая 2012","status":"Отменен"}
	];

	var print = function() {
		for (var i = 0; i < data.length; i++) {
			var day = data[i].order_date;
			var number = data[i].order_num;
			var status = data[i].status;
			$('.order-info').append('<li class="order-specs">' + '<span class="day">' + day +
			 '</span>' + '<span class="number">' + number + '</span>' + '<span class="status">' + status +
			  '</span>' + '</li>' + '<div class="clearfix">' + '</div>');
		};
	};
	print();

	console.log(data);
//Filter
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
			print();
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
			print();
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
			print();
			$(this).attr("data-count", "2")
		} else {
			data.sort(function(a, b) {
				return b.order_num - a.order_num;
			});
			$(".order-info").empty();
			print();
			$(this).attr("data-count", "1")
		};
	});

	$('a[href="#date"]').on("click", function(e){
		e.preventDefault();
		$('a[href="#number"]').click();
	});

});