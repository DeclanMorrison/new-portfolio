$(document).ready(function (){
  const $intro = $(".title, .sub-title");
  const $body = $("body");
  const $start = $(".cover-2, .cover, .title, .sub-title, .line");
  
  setTimeout(function(){
    setTimeout(function(){
      $(".line").addClass("line-2");
    },5000);
    $(".line").addClass("line-1");
  }, 1000);
  
  $intro.on("mouseenter mouseleave", function (){
    setTimeout(function (){
      $(".line").addClass("fadeOut");
      $(".sub-title").addClass("fadeOut");
      $(".title").addClass("title-2");
      setTimeout(() =>{
        $(".cover-2").addClass("cover-2-1");
        setTimeout(() =>{
          $(".body").addClass("fadeInUpBig");
          $start.remove();
          setTimeout(() => {
            $(".bg").addClass("fadeInUp").removeClass("hide");
          },1000);
        }, 5000);
      }, 3500);
    }, 500);
  });

const update = () => {
  const mmt = moment();
  const mmtStart = moment("2018-06-04T18:30:00+0000");
  const diff = mmt.diff(mmtStart);
  const diffDur = moment.duration(diff);
  if (diffDur.seconds() === 1){
    $(".time-since").text(` As of this very moment, I have been a developer for ${diffDur.years()} years, ${diffDur.months()} months, ${diffDur.days()} days, ${diffDur.hours()} hours, ${diffDur.minutes()} minutes, and ${diffDur.seconds()} second.`);
  }else{
    $(".time-since").text(` As of this very moment, I have been a developer for ${diffDur.years()} years, ${diffDur.months()} months, ${diffDur.days()} days, ${diffDur.hours()} hours, ${diffDur.minutes()} minutes, and ${diffDur.seconds()} seconds.`);
  };
};

update();
setInterval(update, 1000);

function getGreetingTime (m) {
	var g = null; //return g
	
	if(!m || !m.isValid()) { return; } //if we can't find a valid or filled moment, we return.
	
	var split_afternoon = 12 //24hr time to split the afternoon
	var split_evening = 17 //24hr time to split the evening
	var currentHour = parseFloat(m.format("HH"));
	
	if(currentHour >= split_afternoon && currentHour <= split_evening) {
		g = "afternoon";
	} else if(currentHour >= split_evening) {
		g = "evening";
	} else {
		g = "morning";
	}
	
	return g;
  //Function made by GitHub user James1x0, https://gist.github.com/James1x0
}

let greeting = `Good ${getGreetingTime(moment())}, `
$(".greeting").text(greeting);

//Move up as scroll down
scrollThing = () => {
  $(".bg").css("top", window.innerHeight-(window.pageYOffset/2))
}

window.onscroll = scrollThing;

});