document.getElementById("file-input").addEventListener(
    "change",
    function () {
      const file = this.files[0];
      const reader = new FileReader();

      // Verifica se o arquivo é uma imagem
      if (file && file.type.match("image.*")) {
        reader.addEventListener("load", function (e) {
          document.querySelector("#preview").src = e.target.result;
        });

        reader.readAsDataURL(file);
      } else {
        alert("Por favor, selecione um arquivo de imagem.");
      }
    },
    false
  );

  document.getElementById('reset').addEventListener('click', ()=>{
    document.querySelector('#preview').removeAttribute('src');
  })
