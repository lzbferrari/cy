(function() {
    var link_element = document.createElement("link"),
    s = document.getElementsByTagName("script")[0];
    if (window.location.protocol !== "http:" && window.location.protocol !== "https:") {
        link_element.href = "http:";
    }
    link_element.href += "//fonts.googleapis.com/css?family=Lobster:400";
	
    link_element.rel = "stylesheet";
    link_element.type = "text/css";
    s.parentNode.insertBefore(link_element, s);
})();


function updateTimes(){
    var start_time = new Date("3/7/2010").getTime();
    var duration = parseInt((Date.now() - start_time) / 1000);

    var seconds = duration % 60;
    if (seconds < 10)
        seconds = "0" + seconds;

    duration = parseInt(duration / 60);
    var minutes = duration % 60;
    if (minutes < 10)
        minutes = "0" + minutes;

    duration = parseInt(duration / 60);
    var hours = duration % 24;
    if (hours < 10)
        hours = "0" + hours;

    duration = parseInt(duration / 24);
    var days = duration;

    document.getElementById("hour").innerHTML= hours + "&nbsp"+"hours"+"&nbsp&nbsp" + minutes + "&nbsp"+"minutes"+"&nbsp&nbsp" + seconds + "&nbspseconds";
    document.getElementById("day").innerHTML= days;
    setTimeout("updateTimes()", 1000);
}

document.ready = function() {
    updateTimes();
};