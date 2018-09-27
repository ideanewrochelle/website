/* ========== HIDE OR SHOW SIDEBAR =========== */
$("#menu-toggle").click(function(e) {
	e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

$(document).ready(function(e) {
	//-- get each section's offset position 
	$.intro_top = $('#intro').offset().top;
	$.folder_structure_top = $('#folder-structure').offset().top;
	$.html_structure_top = $('#html-structure').offset().top;
	$.css_files_top = $('#css-files').offset().top;
	$.js_files_top = $('#js-files').offset().top;
	$.slideshow_bg_top = $('#slideshow-bg').offset().top;
	$.yt_bg_top = $('#yt-bg').offset().top;
	$.countdown_top = $('#countdown').offset().top;
	$.simple_icons_top = $('#simple-icons').offset().top;
	$.mail_chimp_top = $('#mail-chimp').offset().top;
	$.form_validation_top = $('#form-validation').offset().top;
	$.social_media_top = $('#social-media').offset().top;
	$.credits_top = $('#credits').offset().top;
	$.kenburns_top = $('#kenburns').offset().top;
	$.popup_top = $('#image-popup').offset().top;
	$.carousel_top = $('#carousel').offset().top;
	$.fullpage_top = $('#fullpage').offset().top;
	$.firefly_top = $('#firefly').offset().top;
	$.star_top = $('#star').offset().top;
	$.color_scheme_top = $('#color-scheme').offset().top;
	$.video_top = $('#video').offset().top;

	$.offset_data = [$.intro_top,$.folder_structure_top,$.html_structure_top,$.css_files_top,$.js_files_top,$.fullpage_top,$.color_scheme_top,$.firefly_top,$.star_top,$.slideshow_bg_top,$.yt_bg_top,$.video_top,$.kenburns_top,$.popup_top,$.carousel_top,$.countdown_top,$.simple_icons_top,$.mail_chimp_top,$.form_validation_top,$.social_media_top,$.credits_top];
	
	$.section_data = ["intro","folder-structure","html-structure","css-files","js-files","fullpage","color-scheme","firefly","star","slideshow-bg","yt-bg","video","kenburns","image-popup","carousel","countdown","simple-icons","mail-chimp","form-validation","social-media","credits"];
	
	
	$('#menu-toggle').tooltip({
		placement : 'left',
		container : 'body'
	});		
	
	//-- section link clicked
	$('a[id*="section-link"]').click(function(){
		//-- get active link
		var active_link = $(this).attr('href').replace("#","");
		
		$('html,body').animate({
			scrollTop:($('#'+active_link).offset().top)
		},1000);
	});
});

/* ========== SET ACTIVE SECTION ========== */
$(window).scroll(function(e) {
	$.window_top = $(window).scrollTop();
	
	$.active_section = "";
	for(var i=0;i<$.offset_data.length;i++){
		if(($.offset_data[i]-100) < $.window_top){
			$.active_section = $.section_data[i];
		}
	}
	
	//-- remove active class
	$('a[id*="section-link"]').removeClass('active');
	$('a[href="#'+$.active_section+'"]').addClass('active');
});