document.getElementById('hero').addEventListener('click', () => {
    document.getElementById('hero').style.display = 'none';
    document.getElementById('anuncio').style.display = 'flex';
  });
  
// Evento al hacer clic en portada
document.getElementById('hero').addEventListener('click', () => {
  document.getElementById('hero').style.display = 'none';
  document.getElementById('cuenta-atras').style.display = 'block';
});
