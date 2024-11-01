import './style.scss';


let nfts_run_html = ``
for (let i = 0; i < 4; i++) {
    for (let j = 1; j <= 8; j++) {
        nfts_run_html = nfts_run_html + `<div class="nfts_run_element">
            <img src='/img/nft/${j}-min.jpg' alt='decor' />
            </div>`;
    }
}

document.getElementById('nfts_run_list').innerHTML = nfts_run_html



import './style.scss'
import gsap from 'gsap';
import { MotionPathPlugin, ScrollTrigger, TextPlugin } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, TextPlugin)
import hideLoader from './hideLoader.js'
import showHero from './showHero.js'
import nft from './nft.js'
import vibe from './vibe.js'
import stripes from './stripes.js'
import strip from './strip.js'



window.onload = function () {
    setTimeout(() => {
        hideLoader()
        showHero(gsap)
        nft(gsap)
        vibe(gsap)
        stripes(gsap)
        strip(gsap)
    }, 500);
};


const ca = 'CHLAtcgnbMd8L7ggAhoBDCKY2EgSeuJFQtipjanTpump';

const copyCa = () => {
    console.log('meow');

    navigator.clipboard.writeText(ca).then(() => {
        alert("CA copied to clipboard");
    })
}

document.getElementById('buysis').onclick = copyCa;
document.getElementById('buysis2').onclick = copyCa;