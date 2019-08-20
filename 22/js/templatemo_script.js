
    
$(document).ready( function() {        

	// 下拉列表
	$('.templatemo-sidebar-menu li.sub a').click(function(){
		if($(this).parent().hasClass('open')) {
			$(this).parent().removeClass('open');
		} else {
			$(this).parent().addClass('open');
		}
	});  // 下拉列表

}); // document.ready
