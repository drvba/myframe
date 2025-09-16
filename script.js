// Upload image
document.getElementById('upload').addEventListener('change', function(e){
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(ev){
    document.getElementById('user-photo').src = ev.target.result;
  };
  reader.readAsDataURL(file);
});

// Update name
document.getElementById('nameInput').addEventListener('input', function(e){
  document.getElementById('nameText').textContent = e.target.value;
});

// Download framed poster
document.getElementById('downloadBtn').addEventListener('click', function(){
  html2canvas(document.getElementById('frame')).then(canvas => {
    const link = document.createElement('a');
    link.download = 'Ayurved_Frame.png';
    link.href = canvas.toDataURL();
    link.click();
  });
});
