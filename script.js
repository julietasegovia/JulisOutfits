const btnDaily = document.getElementById('cdaily');
const btnPatria = document.getElementById('cpatria');
const btnProf = document.getElementById('cprof');
const btnRest = document.getElementById('crest');

const outfitJulis = document.getElementById('julis');
const outfitDaily = document.getElementById('daily');
const outfitPatria = document.getElementById('patria');
const outfitProf = document.getElementById('prof');
const outfitRest = document.getElementById('rest');

const infoDaily = document.getElementById('daily-info');
const infoPatria = document.getElementById('patria-info');
const infoProf = document.getElementById('prof-info');
const infoRest = document.getElementById('rest-info');

const outfits = [outfitJulis, outfitDaily, outfitPatria, outfitProf, outfitRest];
const infos = [infoDaily, infoPatria, infoProf, infoRest];

function showOutfit(selectedOutfit, selectedInfo) {
    outfits.forEach(outfit => {
        outfit.style.display = 'none';
    });
    infos.forEach(info => {
        info.style.display = 'none';
    });
    selectedOutfit.style.display = 'flex';
    selectedInfo.style.display = 'block';
}

btnDaily.addEventListener('click', () => showOutfit(outfitDaily, infoDaily));
btnPatria.addEventListener('click', () => showOutfit(outfitPatria, infoPatria));
btnProf.addEventListener('click', () => showOutfit(outfitProf, infoProf));
btnRest.addEventListener('click', () => showOutfit(outfitRest, infoRest));