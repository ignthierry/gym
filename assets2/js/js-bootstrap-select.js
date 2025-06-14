$(function() {
	$('.selectpicker').on('show.bs.select', function () {
		$(".bootstrap-select li").removeClass("selected");
		$(".bootstrap-select li").removeClass("active");
		
		$(".bootstrap-select li a").removeClass("selected");
		$(".bootstrap-select li a").removeClass("active");
	})
});