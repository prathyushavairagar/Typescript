
class Facebook{

    name : string;
    email : string;
    friends : number;
    education : string;
    birthday : string;
    age : number;
    phone : number;
    messages:number;
    notifications:number;
    frndRequests:number;    

    constructor(name : string,
        email : string,
        friends : number,
        education : string,
        birthday : string,
        age : number,
        phone : number,
        messages:number,
        notifications:number,
        frndRequests:number)
        {
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

    getName = () =>{
        return this.name;
    }

    getEmail = () =>{
        return this.email;
    }

    getEducationDetails = () =>{
        return this.education;
    }

    getBdayDate = () =>{
        return this.birthday;
    }

    getAge = () =>{
        return this.age;
    }

    getPhoneNumber = () =>{
        return this.phone;
    }

    getNumber0fFriends = () =>{
        return this.friends;
    }


getMessages = ()=>
{
    return this.messages;
}
getNotifications = ()=>
{
    return this.notifications
}
getFrndRequests = ()=>
{
    return this.frndRequests
}

}

let user = new Facebook("Prathyusha","Pretty001@gmail.com",450,"Osmania University","21/04/1992",26,990099900,10,20,15)

let _name = user.getName();
console.log(_name);

let email = user.getEmail();
console.log(email);

let friends = user.getNumber0fFriends();
console.log(friends);

let education = user.getEducationDetails();
console.log(education);

let birthday = user.getBdayDate();
console.log(birthday);

let age = user.getAge();
console.log(age);

let phone = user.getPhoneNumber();
console.log(phone);

let messages = user.getMessages();
console.log(messages);

let notifications = user.getNotifications();
console.log(notifications);

let frndRequests = user.getFrndRequests();
console.log(frndRequests);