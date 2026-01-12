gsap.from("nav *",{
    x:30,
    y:40,
    duration:3,
    delay:1,
    opacity:0,
    stagger:0.5    
})

gsap.from(".page1 > h1",{
    opacity:0,
    duration:5,
    delay:1,
    scale:0.5,
    color:"navy",
    scrollTrigger:".page1>h1",
    repeat:-1,
})

gsap.from(".page2>h1",{
        color:"blue",
    rotate:360,
    duration:3,
    delay:2,
    repeat:-1
})

gsap.from(".page3>.img1",{
    opacity:0,
     x:150,
     duration:3,
    delay:1,
    scrollTrigger:".page3>.img1"
})

gsap.from(".page3>.img2",{
    opacity:0,
     y:150,
     duration:3,
    delay:1,
    scrollTrigger:".page3>.img2"
})
gsap.from(".page3>.img3",{
    opacity:0,
     x:-150,
     duration:3,
    delay:1,
    scrollTrigger:".page3>.img3"
})
gsap.from(".page3>.img4",{
    opacity:0,
     y:-150,
     duration:3,
    delay:1,
    scrollTrigger:".page3>.img4"
})
