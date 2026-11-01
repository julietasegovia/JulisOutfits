const outfitJulis = document.getElementById('julis');

const options = [
    {btn: document.getElementById('cdaily'), outfit: document.getElementById('daily'), info: document.getElementById('daily-info')},
    {btn: document.getElementById('cpatria'), outfit: document.getElementById('patria'), info: document.getElementById('patria-info')},
    {btn: document.getElementById('cprof'), outfit: document.getElementById('prof'), info: document.getElementById('prof-info')},
    {btn: document.getElementById('crest'), outfit: document.getElementById('rest'), info: document.getElementById('rest-info')}
]

function showOption(selected){
    outfitJulis.style.display = 'none';
    options.forEach(opt => {
        const isSelected = opt === selected;
        opt.btn.classList.toggle('choice-clicked', isSelected);
        opt.outfit.style.display = isSelected ? 'flex' : 'none';
        opt.info.style.display = isSelected ? 'block' : 'none';
    });
}

options.forEach(opt => {
    opt.btn.addEventListener('click', () => showOption(opt));
});