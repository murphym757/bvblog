const redTheme = document.querySelector('img.bvbloglogo');
const whiteTheme = document.querySelector('img.bvcollection');
const blueTheme = document.querySelector('img.bvthemegenerator');
const blueTheme = document.querySelector('img.bvofficial');

bvbloglogo.addEventListener('mouseover', () => {
  document.body.style.backgroundColor = "#F16A5C";
});

whiteTheme.addEventListener('click', () => {
  document.body.style.backgroundColor = "#C7C3C0";
});

blueTheme.addEventListener('click', () => {
  document.body.style.backgroundColor = "#62BFE4";
});
