const btnDaily = document.getElementById('cdaily');
const btnProf = document.getElementById('cprof');
const btnPatria = document.getElementById('cpatria');
const btnRest = document.getElementById('crest');

const outfitJulis = document.getElementById('julis');
const outfitDaily = document.getElementById('daily');
const outfitProf = document.getElementById('prof');
const outfitPatria = document.getElementById('patria');
const outfitRest = document.getElementById('rest');

const infoDaily = document.getElementById('daily-info');
const infoProf = document.getElementById('prof-info');
const infoPatria = document.getElementById('patria-info');
const infoRest = document.getElementById('rest-info');

const outfits = [outfitJulis, outfitDaily, outfitProf, outfitPatria, outfitRest];
const infos = [infoDaily, infoProf, infoPatria, infoRest]

function showOutfit(selectedOutfit, selectedInfo){
    outfits.forEach(outfit => {
        outfit.style.display = 'none';
    });
    infos.forEach(info => {
        info.style.display = 'none';
    });
    selectedOutfit.style.display = 'block';
    selectedInfo.style.display = 'block';
}

btnDaily.addEventListener('click', () => showOutfit(outfitDaily, infoDaily));
btnProf.addEventListener('click', () => showOutfit(outfitProf, infoProf));
btnPatria.addEventListener('click', () => showOutfit(outfitPatria, infoPatria));
btnRest.addEventListener('click', () => showOutfit(outfitRest, infoRest));