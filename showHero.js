export default async (gsap) => {
    gsap.fromTo('.hero_decor_girl', {
        y: 100
    }, {
        y: 0,
        opacity: 1,

    })
    gsap.to('.hero_header', {
        duration: 2, text: {
            value: "stepsisio"
        },
        ease: 'linear'
    })
    setTimeout(() => {
        gsap.fromTo('.hero_decor_tg', {
            y: 100
        }, {
            y: 0,
            opacity: 1,

        })
    }, 1000);
}