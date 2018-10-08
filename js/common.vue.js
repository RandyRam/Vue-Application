var app = new Vue({
    el:"#appHeader",
    data: {
        menu: [
            {name:"Home",url:"index.html",icon:"fa-home"},
            {name:"Gallery",url:"gallery.html",icon:"fa-camera-retro"},
            {name:"Stat",url:"stat.html",icon:"fa-signal"},
            {name:"About",url:"about.html",icon:"fa-users"},
            {name:"Contact",url:"contact.html",icon:"fa-comments"},
        ]
    }
});

var loginPage = new Vue({
    el:"#loginContainer"
});