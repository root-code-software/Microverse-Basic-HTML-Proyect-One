var youtubeVideos = [
    {
        code: "mENDYhfxH-o",
        title: "Contributing to Open Source Part II: The Real Way",
        duration: "14:25"
    },
    {
        code: "YJZCUhxNCv8",
        title: "'How to Get a Job at the Big 4 - Amazon, Facebook, Google &#38; Microsoft' by Sean Lee",
        duration: "42:35"
    },
    {
        code: "cwDqjmSmtMQ",
        title: "Programming in Visual Basic .Net How to Connect Access Database to VB.Net",
        duration: "19:11"
    },
    {
        code: "7YcW25PHnAA",
        title: "REST API concepts and examples",
        duration: "8:53"
    },
    {
        code: "UEb1cvZG3GU",
        title: "GitHub - Why Microsoft Paid $7.5B for the Future of Software! - A Case Study for Entrepreneurs",
        duration: "17:41"
    },
    {
        code: "Bb0HnaYNUx4",
        title: "How to create a 3D Terrain with Google Maps and height maps in Photoshop - 3D Map Generator Terrain",
        duration: "20:32"
    },
    {
        code: "YRhxdVk_sIs",
        title: "Convolutional Neural Networks (CNNs) explaine",
        duration: "8:37"
    },
    {
        code: "l0QGLMwR-lY",
        title: "Top 10 Linux Job Interview Questions",
        duration: "16:04"
    },
    {
        code: "ciNHn38EyRc",
        title: "Running an SQL Injection Attack - Computerphile",
        duration: "17:11"
    },
    {
        code: "OZ_ieeuwrCA",
        title: "How to prepare for product based companies??",
        duration: "26:01"
    },
    {
        code: "UoT2oava9ns",
        title: "Visual Basic .Net : Search in Access Database - DataGridView BindingSource Filter Part 1/2",
        duration: "25:01"
    },
    {
        code: "yoW2jHoVdug",
        title: "How To Convert pdf to word without software",
        duration: "9:04"
    },
    {
        code: "p-89r5QvQvQ",
        title: "What Python Projects Should I Build to Get a Job?",
        duration: "12:19"
    },
    {
        code: "9aYzvzvjkYQ",
        title: "How To NOT Look Like A Tourist | What To Wear In Europe",
        duration: "8:19"
    },
    {
        code: "dSl_qnWO104",
        title: "Your First GitHub Pull Request (in 10 Mins)",
        duration: "9:47"
    },
    {
        code: "-W_VsLXmjJU",
        title: "Top signs of an inexperienced programmer",
        duration: "11:35"
    },
    {
        code: "EcojyBV4QJ4",
        title: "Why I left my job at Google (as a software engineer)",
        duration: "11:06"
    },
    {
        code: "hwdeUG_gySI",
        title: "Max Stoiber - I want you to contribute to open source",
        duration: "19:32"
    },
    {
        code: "EtJy69cEOtQ",
        title: "How to Learn Anything... Fast - Josh Kaufman",
        duration: "23:20"
    },
    {
        code: "FQsBmnZvBdc",
        title: "Git &#38; GitHub: Pull requests (10/11)",
        duration: "5:59"
    }
]

document.getElementById("sideBarUpNext").innerHTML = '<a class="related" href="https://www.youtube.com/watch?v='+youtubeVideos[0].code+'">'+
'<div class="related__thumbnail">'+
    '<img width="200" src="http://i.ytimg.com/vi/'+youtubeVideos[0].code+'/maxresdefault.jpg" >'+
'</div>'+
'<div class="related__text">'+
    '<p>'+youtubeVideos[0].title+'</p>'+
    '<p> Duration:'+youtubeVideos[0].duration+'</p>'+
'</div>'+
'</a>';

document.getElementById("relatedContainer").innerHTML = youtubeVideos.map((video, id) =>{
    if (id>0) return (
        '<a class="related" href="https://www.youtube.com/watch?v='+video.code+'" key="'+id+'">'+
            '<div class="related__thumbnail">'+
                '<img width="200" src="http://i.ytimg.com/vi/'+video.code+'/maxresdefault.jpg" >'+
            '</div>'+
            '<div class="related__text">'+
                '<p>'+video.title+'</p>'+
                '<p> Duration: '+video.duration+'</p>'+
            '</div>'+
        '</a>'
    )
})