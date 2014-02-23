
function page_render(page_name, flag){
	if(flag == "active"){
		$(document.getElementById(page_name)).removeClass("hide");
	}
	else{
		$(document.getElementById(page_name)).addClass("hide");	
	}

}

function navbar_click_event(e){
	// This function will be triggered when the navbar been clicked
	
	// Check whether the click item is DOM item 
	for (var i = 0 ; i < this.children.length ; i++){
	
		if(this.children[i].children[0] == e.target){
			$(this.children[i]).addClass("active");
			page_render($(this.children[i]).attr('page-name'), "active");
		}
		else{
			$(this.children[i]).removeClass("active");
			page_render($(this.children[i]).attr('page-name'), "inactive");
		}
	}
}

function select_bar_click_event(){
	// This function will be triggered when the select_bar been clicked

	// Check whether the click item is DOM item 
	var select_content = document.getElementById('select_content');
	var select_options = document.getElementById('select_bar');
	
	for (var i = 0 ; i < select_content.children.length ; i++){
		if($(select_content.children[i]).attr('id') == $(this).attr('module-name')){
			$(select_options.children[i]).addClass("selection_active");

			// Remove the next selector top border. If we don't remove the border then 
			// the bottom of the selected option will have one line there
			if(i < select_content.children.length - 1){
				$(select_options.children[i+1]).addClass("remove_top_border");
			}

			page_render($(select_options.children[i]).attr('module-name'), "active");
		}
		else{
			$(select_options.children[i]).removeClass("selection_active");
			if(i < select_content.children.length - 1){
				$(select_options.children[i+1]).removeClass("remove_top_border");
			}

			page_render($(select_options.children[i]).attr('module-name'), "inactive");
		}

	}
}

function accordion_bar_click_event(e){
	// This function will be triggered when the accordion link been clicked

	var accordion_headers = document.getElementById("accordion");
	var selected_headers = $(this.getElementsByTagName("a")[0]).attr("target-name");

	if(e.target.tagName != "A" && e.target.parentNode.tagName != "A")
		return;

	for(var i = 0 ; i < accordion_headers.children.length ; i++){

		if($(accordion_headers.children[i].children[0]).attr('id') == selected_headers){
			// Check the panel has been selected or not
			if($(accordion_headers.children[i].children[0]).hasClass("panel_heading_selected")){
				// has been selected before then switch the blue selected status to the original one
				$(accordion_headers.children[i].children[0]).removeClass("panel_heading_selected");
				$(accordion_headers.children[i].children[0]).find("a").find(".glyphicon").first().addClass("hide");
				$(accordion_headers.children[i].children[0]).find("a").find(".glyphicon").last().removeClass("hide");
			}
			else{
				// has not been selected before then switch the original status to the selected status
				$(accordion_headers.children[i].children[0]).addClass("panel_heading_selected");
				$(accordion_headers.children[i].children[0]).find("a").find(".glyphicon").first().removeClass("hide");
				$(accordion_headers.children[i].children[0]).find("a").find(".glyphicon").last().addClass("hide");
			}
		}
	}
}

$(document).ready(function(){
	document.getElementById('navbar-control').addEventListener('click', navbar_click_event, true);
	$(".selection").on("click", select_bar_click_event);
	$(".collapse").collapse();
	$(".panel-heading").on("click", accordion_bar_click_event);
});




