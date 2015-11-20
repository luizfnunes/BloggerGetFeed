//Configuration

var idDisplay = "recent-posts";
var feedURL = " Your feed Blogger URL ";
var feedPostLimit = 3;
var feedTitleLimit = 80;
var loaderImg = "preloader.gif";
var feedMessage = "There are no items to display!";
var feedBtnPrev = "Previous";
var feedBtnNext = "Next";
var feedErrorMsg = "Error to load feed!"
var feedClassPrev = 'prev';
var feedClassNext = 'next';
var feedClassDisplay = 'display';
var feedClassTitle = 'title';
var feedClassSnippet = 'snippet';
var feedClassPreloader = 'preloader';
var feedClassPagination = 'pagination';
var feedClassMessage = 'noFeed';
var feedClassErrorMsg = 'error';

//End Configuration

var feedDisplay = document.getElementById(idDisplay);
var output = "";
var feedIndex = 1;

//Initial Function
function init(index){
	if (index > 1){
		feedIndex = index;
		}else{
		feedIndex = 1;
	}
	var url = feedURL+"?start-index="+feedIndex;
	//Google API
	var googleFeed = new google.feeds.Feed(url);
	googleFeed.setNumEntries(feedPostLimit);
	googleFeed.load(getFeed);
	
}	

//Function getFeed
function getFeed(result){
	if (!result.error){
		output = "";
		feedDisplay.innerHTML = "<img class='"+feedClassPreloader+"' src='"+loaderImg+"'/>";
		var pagination = "<div style='clear:both'></div><div class='"+feedClassPagination+"'>";
		if (result.feed.entries.length > feedPostLimit){
			var limit = feedPostLimit;
			}else{
			var limit = result.feed.entries.length;
			var nextLimit = feedIndex + feedPostLimit;
			var prevLimit = feedIndex - feedPostLimit; 
			if (prevLimit >= 1){
				pagination+= "<button type='button' class='"+feedClassPrev+"' onclick='javascript:init("+prevLimit+");'>"+feedBtnPrev+"</button>";
			}
			if (result.feed.entries.length){
				pagination+= "<button type='button' class='"+feedClassNext+"' onclick='javascript:init("+nextLimit+");'>"+feedBtnNext+"</button>";
				}else{
				output+= "<p class='"+feedClassMessage+"'>"+feedMessage+"</p>";
			}
			pagination += "<div style='clear:both'></div></div>";
			
		}
		for (var i = 0; i < limit; i++) {
			var entry = result.feed.entries[i];
			//Get image of Post
			var html = $.parseHTML(entry.content);
			var img = $(html).find("img:first").attr("src");
			//Get tite of Post
			var title = entry.title;
			//Get sumary of Post
			var sum = entry.contentSnippet;
			//Get link of Post
			var link = entry.link;
			//Limit of title
			var limitedTitle = getLimit(title, feedTitleLimit);
			//Write in Div
			output+= "<div class='"+feedClassDisplay+"'>";
			output+= "<a href='"+link+"'><img src='"+img+"' title='"+entry.title+"'/></a>";
			output+= "<a href='"+link+"' title='"+entry.title+"'><h2 class='"+feedClassTitle+"'>"+limitedTitle+"</h2></a>";
			output+= "<p class='"+feedClassSnippet+"'>"+sum+"</p>";
			output+= "</div>";
		}
		output+= pagination;
		feedDisplay.innerHTML = output;
		}else{
		output+= "<p class='"+feedClassErrorMsg+"'>"+feedErrorMsg+"</p>";
		feedDisplay.innerHTML = output;
	}
}

//Function Limit Text
function getLimit(string,limit){
	var limited = "";
	for(var i=0; i < limit; i++){
		limited += string.substr(i,1);
	}
	limited += "...";
	return limited;
}

//Load Script
window.onload = function(){
	init(1);
}