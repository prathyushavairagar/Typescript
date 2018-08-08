var Youtube = /** @class */ (function () {
    function Youtube(videoTitle, duration, views, likes, dislikes, comments, category, description) {
        var _this = this;
        this.getVideoTitle = function () {
            return _this.videoTitle;
        };
        this.getDuration = function () {
            return _this.duration;
        };
        this.getViews = function () {
            return _this.views;
        };
        this.getLikes = function () {
            return _this.likes;
        };
        this.getDislikes = function () {
            return _this.dislikes;
        };
        this.getComments = function () {
            return _this.comments;
        };
        this.getCategory = function () {
            return _this.category;
        };
        this.getDescription = function () {
            return _this.description;
        };
        this.videoTitle = videoTitle;
        this.duration = duration;
        this.views = views;
        this.likes = likes;
        this.dislikes = dislikes;
        this.comments = comments;
        this.category = category;
        this.description = description;
    }
    return Youtube;
}());
var youtubeObj = new Youtube("MEAN", 20, 200000, 10, 2, 20, "Technology", "Development");
var mean = youtubeObj.getVideoTitle();
console.log(mean);
var duration = youtubeObj.getDuration();
console.log(duration);
var views = youtubeObj.getViews();
console.log(views);
var likes = youtubeObj.getLikes();
console.log(likes);
var dislikes = youtubeObj.getDislikes();
console.log(dislikes);
var comments = youtubeObj.getComments();
console.log(comments);
var category = youtubeObj.getCategory();
console.log(category);
var description = youtubeObj.getDescription();
console.log(description);
