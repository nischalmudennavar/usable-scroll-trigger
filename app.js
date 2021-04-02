gsap.registerPlugin(ScrollTrigger)



var action = gsap.timeline({

    scrollTrigger: {
        trigger: ".section",
        scrub: true,
        pin:true,
        start: "top top",
        end: "+=100%"
    }

});

action.from('.heading-1',{
    opacity: 1,
    translateX:-300
})

action.to('.heading-1',{
    opacity: 0.5,
    translateX:-300
})
action.to('.heading-1',{
    opacity: 0,
   
})
action.from('.heading-2',{
    opacity: 0,
    translateY:-300
})

action.to('.heading-2',{
    opacity: 1,
    translateY:-300
})

var action2 = gsap.timeline({

    scrollTrigger: {
        trigger: ".section-2",
        scrub: true,
        pin:true,
        start: "top top",
        end: "+=100%"
    }

});

action2.from('.heading-3',{
    opacity: 0,

})
action2.from('.heading-3',{
    opacity: 1,

})