var Facebook = /** @class */ (function () {
    function Facebook(name, email, friends, education, birthday, age, phone, messages, notifications, frndRequests) {
        var _this = this;
        this.getName = function () {
            return _this.name;
        };
        this.getEmail = function () {
            return _this.email;
        };
        this.getEducationDetails = function () {
            return _this.education;
        };
        this.getBdayDate = function () {
            return _this.birthday;
        };
        this.getAge = function () {
            return _this.age;
        };
        this.getPhoneNumber = function () {
            return _this.phone;
        };
        this.getNumber0fFriends = function () {
            return _this.friends;
        };
        this.getMessages = function () {
            return _this.messages;
        };
        this.getNotifications = function () {
            return _this.notifications;
        };
        this.getFrndRequests = function () {
            return _this.frndRequests;
        };
        this.name = name;
        this.email = email;
        this.friends = friends;
        this.education = education;
        this.birthday = birthday;
        this.age = age;
        this.phone = phone;
        this.messages = messages;
        this.notifications = notifications;
        this.frndRequests = frndRequests;
    }
    return Facebook;
}());
var user = new Facebook("Prathyusha", "Pretty001@gmail.com", 450, "Osmania University", "21/04/1992", 26, 990099900, 10, 20, 15);
var _name = user.getName();
console.log(_name);
var email = user.getEmail();
console.log(email);
var friends = user.getNumber0fFriends();
console.log(friends);
var education = user.getEducationDetails();
console.log(education);
var birthday = user.getBdayDate();
console.log(birthday);
var age = user.getAge();
console.log(age);
var phone = user.getPhoneNumber();
console.log(phone);
var messages = user.getMessages();
console.log(messages);
var notifications = user.getNotifications();
console.log(notifications);
var frndRequests = user.getFrndRequests();
console.log(frndRequests);
