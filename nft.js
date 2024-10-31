export default (gsap) => {

    gsap.to('.nfts_header', {
        text: {
            value: "stepsisio is ur best fren. she likes big red candles and hard rugs, especially on solana."
        }, scrollTrigger: {
            trigger: '.nfts',
            scrub: 1,
            // markers: true,
            start: `0% 60%`,
            end: `50% 60%`,
        }
    })
}