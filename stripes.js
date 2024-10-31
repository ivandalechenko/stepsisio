export default (gsap) => {

    gsap.fromTo('.tapes_element_1', {
        x: -100
    }, {
        x: 100
        , scrollTrigger: {
            trigger: '.tapes',
            scrub: 1,
            start: `0% 100%`,
            end: `150% 100%`,
        }
    })
    gsap.fromTo('.tapes_element_3', {
        x: -200
    }, {
        x: 200
        , scrollTrigger: {
            trigger: '.tapes',
            scrub: 1,
            start: `0% 100%`,
            end: `150% 100%`,
        }
    })
    gsap.fromTo('.tapes_element_2', {
        x: 150
    }, {
        x: -150,
        scrollTrigger: {
            trigger: '.tapes',
            scrub: 1,
            start: `0% 100%`,
            end: `150% 100%`,
        },
    })
}