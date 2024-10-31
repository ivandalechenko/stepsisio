export default (gsap) => {

    gsap.fromTo('.vibe_decor_1', {
        y: '50vh'
    }, {
        y: "-50vh"
        , scrollTrigger: {
            trigger: '.vibe',
            scrub: 1,
            start: `-50% 50%`,
            end: `150% 50%`,
        }
    })
    gsap.fromTo('.vibe_decor_2', {
        y: '50vh'
    }, {
        y: '-50vh'
        , scrollTrigger: {
            trigger: '.vibe',
            scrub: 1,
            start: `0% 50%`,
            end: `100% 50%`,
        }
    })
    gsap.fromTo('.vibe_decor_3', {
        y: '50vh'
    }, {
        y: '-50vh'
        , scrollTrigger: {
            trigger: '.vibe',
            scrub: 1,
            start: `-100% 50%`,
            end: `200% 50%`,
        }
    })
    gsap.fromTo('.vibe_decor_4', {
        y: '50vh'
    }, {
        y: '-50vh'
        , scrollTrigger: {
            trigger: '.vibe',
            scrub: 1,
            start: `-20% 50%`,
            end: `120% 50%`,
        }
    })

    gsap.to('.vibe_header', {
        text: {
            value: "vibe with stepsisios on a beach vacation sippin tequila and sniffin coke while watching a beautiful sunset"
        }, scrollTrigger: {
            trigger: '.vibe',
            scrub: 1,
            // markers: true,
            start: `0% 60%`,
            end: `50% 60%`,
        }
    })
}