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
