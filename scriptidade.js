function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano ) {
        window.alert('[ERRO] verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)       
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
       if(fsex[0].checked){
            genero = 'homem'
            if(idade >= 0 && idade < 12){
                img.setAttribute('src', 'crianco2.png')
            }else if(idade < 21) {
                img.setAttribute('src', 'jovem2.png')
                
            }else if(idade < 60) {
                img.setAttribute('src', 'adulto2.png')
            }else {
                img.setAttribute('src', 'idoso2.png')
            }            
            
        }else if (fsex[1].checked){
            genero = 'mulher'
            if(idade >=0 && idade < 12){
                img.setAttribute('src', 'crianca2.png')
            }else if(idade < 21){
                img.setAttribute('src', 'jova2.png')                
            }else if(idade < 60){
                img.setAttribute('src', 'adulta2.png')
                
            }else{
                img.setAttribute('src', 'idosa2.png')
            }       
            
        }
        res.style.textAlign= 'center'
        res.innerHTML = `Detectamos um ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
   
}


   
    