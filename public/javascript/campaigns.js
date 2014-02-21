
function page_render(page_name){
	// Do something when page switching
	console.log(page_name);
}

function navbar_click_event(e){
	// This function will be triggered when the navbar been clicked
	
	// Clear the main content
	document.getElementById('main_info').innerHTML = "";

	// Check whether the click item is DOM item 
	for (var i = 0 ; i < this.children.length ; i++){
	
		if(this.children[i].children[0] == e.target){
			$(this.children[i]).addClass("active");
			page_render($(this.children[i]).attr('page-name'));
		}
		else{
			$(this.children[i]).removeClass("active");
		}
	}
}

function select_bar_click_event(e){
	// This function will be triggered when the select_bar been clicked

}

$(document).ready(function(){
	document.getElementById('navbar-control').addEventListener('click', navbar_click_event, true);
	document.getElementById('select_bar').addEventListener('click', select_bar_click_event, true);
});