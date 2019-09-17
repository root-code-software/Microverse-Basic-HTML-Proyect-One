var youtubeVideos = [
    {
        code: "mENDYhfxH-o",
        title: "Contributing to Open Source Part II: The Real Way",
        duration: "14:25",
        channel: "ExtremeCoder",
        views: "99999999999"
    },
    {
        code: "YJZCUhxNCv8",
        title: "'How to Get a Job at the Big 4 - Amazon, Facebook, Google &#38; Microsoft' by Sean Lee",
        duration: "42:35",
        channel: "Jumoloco",
        views: "24"
    },
    {
        code: "cwDqjmSmtMQ",
        title: "Programming in Visual Basic .Net How to Connect Access Database to VB.Net",
        duration: "19:11",
        channel: "DramaQueen",
        views: "09210"
    },
    {
        code: "7YcW25PHnAA",
        title: "REST API concepts and examples",
        duration: "8:53",
        channel: "Ytre",
        views: "4984"
    },
    {
        code: "UEb1cvZG3GU",
        title: "GitHub - Why Microsoft Paid $7.5B for the Future of Software! - A Case Study for Entrepreneurs",
        duration: "17:41",
        channel: "kjbds",
        views: "unsignedInt"
    },
    {
        code: "Bb0HnaYNUx4",
        title: "How to create a 3D Terrain with Google Maps and height maps in Photoshop - 3D Map Generator Terrain",
        duration: "20:32",
        channel: "COFEEINMYVEINS",
        views: "208442"
    },
    {
        code: "YRhxdVk_sIs",
        title: "Convolutional Neural Networks (CNNs) explaine",
        duration: "8:37",
        channel: "JUMJUM",
        views: "2455"
    },
    {
        code: "l0QGLMwR-lY",
        title: "Top 10 Linux Job Interview Questions",
        duration: "16:04",
        channel: "TruTrue",
        views: "12**12"
    },
    {
        code: "ciNHn38EyRc",
        title: "Running an SQL Injection Attack - Computerphile",
        duration: "17:11",
        channel: "Jumbotron",
        views: "bx101"
    },
    {
        code: "OZ_ieeuwrCA",
        title: "How to prepare for product based companies??",
        duration: "26:01",
        channel: "Arui",
        views: "429"
    },
    {
        code: "UoT2oava9ns",
        title: "Visual Basic .Net : Search in Access Database - DataGridView BindingSource Filter Part 1/2",
        duration: "25:01",
        channel: "Mayans",
        views: "98418"
    },
    {
        code: "yoW2jHoVdug",
        title: "How To Convert pdf to word without software",
        duration: "9:04",
        channel: "Pipol",
        views: "8941"
    },
    {
        code: "p-89r5QvQvQ",
        title: "What Python Projects Should I Build to Get a Job?",
        duration: "12:19",
        channel: "ErrorGuy",
        views: "9.3e2"
    },
    {
        code: "9aYzvzvjkYQ",
        title: "How To NOT Look Like A Tourist | What To Wear In Europe",
        duration: "8:19",
        channel: "Kokoa",
        views: "9813947"
    },
    {
        code: "dSl_qnWO104",
        title: "Your First GitHub Pull Request (in 10 Mins)",
        duration: "9:47",
        channel: "Palindrome",
        views: "9128"
    },
    {
        code: "-W_VsLXmjJU",
        title: "Top signs of an inexperienced programmer",
        duration: "11:35",
        channel: "Yumbo",
        views: "98484"
    },
    {
        code: "EcojyBV4QJ4",
        title: "Why I left my job at Google (as a software engineer)",
        duration: "11:06",
        channel: "Trueme",
        views: "134"
    },
    {
        code: "hwdeUG_gySI",
        title: "Max Stoiber - I want you to contribute to open source",
        duration: "19:32",
        channel: "Kolimba",
        views: "124142"
    },
    {
        code: "EtJy69cEOtQ",
        title: "How to Learn Anything... Fast - Josh Kaufman",
        duration: "23:20",
        channel: "The RSA",
        views: "132321"
    },
    {
        code: "FQsBmnZvBdc",
        title: "Git &#38; GitHub: Pull requests (10/11)",
        duration: "5:59",
        channel: "Codecourse",
        views: "78,624"
    }
]

document.getElementById("sideBarUpNext").innerHTML = '<a class="related" href="https://www.youtube.com/watch?v='+youtubeVideos[0].code+'">'+
'<div class="related__thumbnail">'+
    '<img width="200" src="http://i.ytimg.com/vi/'+youtubeVideos[0].code+'/maxresdefault.jpg" >'+
'</div>'+
'<div class="related__text">'+
    '<p>'+youtubeVideos[0].title+'</p>'+
    '<p> Duration:'+youtubeVideos[0].duration+'</p>'+
    '<p class="textLittle">'+youtubeVideos[0].channel+'</p>'+
    '<p class="textLittle">'+youtubeVideos[0].views+' views</p>'+
'</div>'+
'</a>';

youtubeVideos.map((video, id) =>{
    if (id>0) document.getElementById("relatedContainer").innerHTML += '<a class="related" href="https://www.youtube.com/watch?v='+video.code+'" key="'+id+'">'+
            '<div class="related__thumbnail">'+
                '<img width="200" src="http://i.ytimg.com/vi/'+video.code+'/maxresdefault.jpg" >'+
            '</div>'+
            '<div class="related__text">'+
                '<p>'+video.title+'</p>'+
                '<p> Duration: '+video.duration+'</p>'+
                '<p class="textLittle">'+video.channel+'</p>'+
                '<p class="textLittle">'+video.views+' views</p>'+
            '</div>'+
        '</a>'
    
})