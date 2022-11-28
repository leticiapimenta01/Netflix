var user1 = document.querySelector("#user1");
var user2 = document.querySelector("#user2");


$(user1).keyup(function () {
    localStorage.setItem(user1, this.value);
});
