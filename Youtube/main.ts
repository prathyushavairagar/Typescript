class Youtube
{
videoTitle:string;
duration:number;
views:number;
likes:number;
dislikes:number;
comments:number;
category:string;
description:string;

constructor(videoTitle:string,duration:number,views:number,likes:number,dislikes:number,comments:number,category:string,description:string)
{
    this.videoTitle = videoTitle;
    this.duration = duration;
    this.views = views;
    this.likes = likes;
    this.dislikes = dislikes;
    this.comments = comments;
    this.category = category;
    this.description = description;
}
getVideoTitle = ()=>
{
    return this.videoTitle
}
getDuration = ()=>
{
    return this.duration
}
getViews = ()=>
{
    return this.views
}
getLikes = ()=>
{
    return this.likes
}
getDislikes = ()=>
{
    return this.dislikes
}
getComments = ()=>
{
    return this.comments
}
getCategory = ()=>
{
    return this.category
}
getDescription = ()=>
{
    return this.description
}

}
let youtubeObj = new Youtube("MEAN",20,200000,10,2,20,"Technology","Development")

let mean = youtubeObj.getVideoTitle();
console.log(mean);

let duration = youtubeObj.getDuration();
console.log(duration);

let views = youtubeObj.getViews();
console.log(views);

let likes = youtubeObj.getLikes();
console.log(likes);

let dislikes = youtubeObj.getDislikes();
console.log(dislikes);

let comments = youtubeObj.getComments();
console.log(comments);

let category = youtubeObj.getCategory();
console.log(category);

let description = youtubeObj.getDescription();
console.log(description);