var tweet = prompt("compose your tweet:");
var tweetCount = tweet.length()
var tweetUnderlined = tweet.slice(0,148);
alert("You have written" + tweetCount + "Characters, you have" +(255 - tweetCount) + "characters remaining.");
alert(tweetUnderlined);
