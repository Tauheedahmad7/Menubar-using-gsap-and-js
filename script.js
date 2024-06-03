// var icon = document.querySelector(".navbar ")

// var box = document.querySelector(".box ")

// // var name = document.querySelector("h1 ")


// icon.addEventListener("click",function(){
//     // console.log("hy");
//     gsap.to(".box",{
//         x:10,
//         duration:1,
//     })
//     gsap.from("h4",{
//         x:300,
//         opacity:0,
//         duration:1,
//         stagger:0.5,
//     })
// })

// box.addEventListener("click",function(){
//     console.log("hy");
//     gsap.from(".box h4",{
//         x:-200,
//         duration:1,
//         dlay:1,
//         stagger:0.5,
//     })

//     gsap.to(".box",{
//         x:300,
//         // duration:0.5,
//         stagger:0.2
//     })
    
// })

// // gsap.from(".main h1,  h3",{
// //     y:-300,
// //     duration:3,
// //     // delay:0.5,
// //     opacity:0,
// //     stagger:0.5,
// //     yoyo:true
// // })





var tl = gsap.timeline()
var icon = document.querySelector(".ri-menu-3-line")

icon.addEventListener("click", function(){
    tl.to(".box",{
        x:10,
        duration:0.2,
    })
    tl.from(".box h4",{
        x:300,
        stagger:0.5,
        duration:0.2
    })
})


var time = gsap.timeline()

var cross = document.querySelector(".box")

cross.addEventListener("click",function(){
    time.to(".box ri-close-line",{
        x:400,
        stagger:0.5,
        duration:0.3

    })
    time.to(".box",{
        x:400,
        stagger:0.5,
        duration:0.2
    })
})


// var landing = document.querySelector(".landing")


// landing.addEventListener("click",function(){
//     gsap.to(".box h4:nth child(1)",{
//         display:"initial",
//     })
// })
