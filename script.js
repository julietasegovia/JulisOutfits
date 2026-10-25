const btnDaily = document.getElementById('cdaily');
const btnProf = document.getElementById('cprof');
const btnPatria = document.getElementById('cpatria');
const btnRest = document.getElementById('crest');

const outfitJulis = document.getElementById('julis');
const outfitDaily = document.getElementById('daily');
const outfitProf = document.getElementById('prof');
const outfitPatria = document.getElementById('patria');
const outfitRest = document.getElementById('rest');

const outfits = [outfitJulis, outfitDaily, outfitProf, outfitPatria, outfitRest];

function showOutfit(selectedOutfit){
    outfits.forEach(outfit => {
        outfit.style.display = 'none';
    });
    selectedOutfit.style.display = 'block';
}

btnDaily.addEventListener('click', () => showOutfit(outfitDaily));
btnProf.addEventListener('click', () => showOutfit(outfitProf));
btnPatria.addEventListener('click', () => showOutfit(outfitPatria));
btnRest.addEventListener('click', () => showOutfit(outfitRest));