
export default (gsap) => {
    gsap.to('.strip_header', {
        text: {
            value: "welcome to the sisterhood stepsisio! u look so cute and sexy stepsisio! so good to have you here stepsisio!"
        }, scrollTrigger: {
            trigger: '.strip',
            scrub: 1,
            // markers: true,
            start: `0% 50%`,
            end: `50% 50%`,
        }
    })


    gsap.to('.rug_header', {
        text: {
            value: " who knows what to expect from stepsis…"
        }, scrollTrigger: {
            trigger: '.rug',
            scrub: 1,
            // markers: true,
            start: `0% 50%`,
            end: `50% 50%`,
        }
    })


}
