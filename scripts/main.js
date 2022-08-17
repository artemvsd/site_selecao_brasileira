

// Criar Parametros
const params = new URLSearchParams(location.search)
let id = params.get('id') 

if (id=="História") { // SE o parametro id ( variavel criada para parametros ) == historia passa o conteudo de historia
    const pag = document.getElementById("main")
    pag.removeAttribute('class')
    const main = document.getElementById('main').innerHTML=`
    <div class="card">
                <h2 class="titulo">História</h2>
                <div class="detalhes">
                    <details>
                        <summary>1958</summary>
                        <p class="txt">A edição de 1958 da Copa do Mundo marcou a sexta participação da Seleção Brasileira de Futebol nessa competição. Era o único país a participar de todas as edições do torneio, fato que persiste até hoje. O Brasil a anfitriã, Suécia. A seleção brasileira obteria seu primeiro título mundial, ganhando por um placar de 5x2.</p>
                    </details>
                    <details>
                        <summary>1962</summary>
                        <p class="txt">A edição de 1958 da Copa do Mundo marcou a sexta participação da Seleção Brasileira de Futebol nessa competição. Era o único país a participar de todas as edições do torneio, fato que persiste até hoje. O Brasil a anfitriã, Suécia. A seleção brasileira obteria seu primeiro título mundial, ganhando por um placar de 5x2.</p>
                    </details>
                    <details>
                        <summary>1970</summary>
                        <p class="txt">A edição de 1958 da Copa do Mundo marcou a sexta participação da Seleção Brasileira de Futebol nessa competição. Era o único país a participar de todas as edições do torneio, fato que persiste até hoje. O Brasil a anfitriã, Suécia. A seleção brasileira obteria seu primeiro título mundial, ganhando por um placar de 5x2.</p>
                    </details>
                    <details>
                        <summary>1994</summary>
                        <p class="txt">A edição de 1958 da Copa do Mundo marcou a sexta participação da Seleção Brasileira de Futebol nessa competição. Era o único país a participar de todas as edições do torneio, fato que persiste até hoje. O Brasil a anfitriã, Suécia. A seleção brasileira obteria seu primeiro título mundial, ganhando por um placar de 5x2.</p>
                    </details>
                    <details>
                        <summary>2002</summary>
                        <p class="txt">A edição de 1958 da Copa do Mundo marcou a sexta participação da Seleção Brasileira de Futebol nessa competição. Era o único país a participar de todas as edições do torneio, fato que persiste até hoje. O Brasil a anfitriã, Suécia. A seleção brasileira obteria seu primeiro título mundial, ganhando por um placar de 5x2.</p>
                    </details>
                    <h4 class="titulo">Jogos Olimpicos</h4>
                    <details>
                        <summary>2016</summary>
                        <p class="txt">A edição de 1958 da Copa do Mundo marcou a sexta participação da Seleção Brasileira de Futebol nessa competição. Era o único país a participar de todas as edições do torneio, fato que persiste até hoje. O Brasil a anfitriã, Suécia. A seleção brasileira obteria seu primeiro título mundial, ganhando por um placar de 5x2.</p>
                    </details>
                    <details>
                        <summary>2021</summary>
                        <p class="txt">A edição de 1958 da Copa do Mundo marcou a sexta participação da Seleção Brasileira de Futebol nessa competição. Era o único país a participar de todas as edições do torneio, fato que persiste até hoje. O Brasil a anfitriã, Suécia. A seleção brasileira obteria seu primeiro título mundial, ganhando por um placar de 5x2.</p>
                    </details>
                    <details>
                        <summary>Outros titulos</summary>
                        <p class="txt">A edição de 1958 da Copa do Mundo marcou a sexta participação da Seleção Brasileira de Futebol nessa competição. Era o único país a participar de todas as edições do torneio, fato que persiste até hoje. O Brasil a anfitriã, Suécia. A seleção brasileira obteria seu primeiro título mundial, ganhando por um placar de 5x2.</p>
                    </details>
                </div>
                
            </div>
        </div>
`
}
else if(id=="Missão"){
    const pag = document.getElementById("main")
    pag.removeAttribute('class')
    const main = document.getElementById('main').innerHTML=`
    <div class="card">
        <h2 class="titulo">Missão</h2>
        <div class="card-txt">
        <p class="txt">
            O objetivo do site é expor a marca da Confederação Brasileira de Futebol, para fazer com que a seleção cresça ainda mais.
             Além disso o site também tem como objetivo relatar as convocações da seleção para os jogos que a equipe irá disputar,
              falar um pouco sobre a história da equipe dentro e fora de campo e mostrar a visão e os valores prezados pela marca.
        </p>
    </div>
</div>
    `   
}
else if(id=="Visão-e-Valores"){
    const pag = document.getElementById("main")
    pag.removeAttribute('class')
    const main = document.getElementById('main').innerHTML=`
    <div class="card">
        <h2 class="titulo">Valores e visão</h2>
        <div class="card-txt">    
        <p class="txt">
            A nossa marca preza muito a ética e principalmente o fair play, de uma forma mais clara o “jogo limpo”, tanto dentro, quanto fora de campo, não toleramos nada que vá contra as regras ou a lei. Também veneramos o incentivo a pratica de esportes, para ter uma vida mais saudável.
            A visão principal é tornar a seleção do Brasil maior ainda, gerar lucro e ganhar uma maior visibilidade mundial.
        </p>
    </div>
</div>
`
}
else if(id=="FaleConosco"){
    const pag = document.getElementById("main")
    pag.removeAttribute('class')
    const main = document.getElementById('main').innerHTML=`
    <form class="form">
    <h2 class="sub grid-row-1"> Fale Conosco </h2>
    <input class="input grid-row-2" type="text" id="nome" placeholder="Escreva seu nome:">
    <input class="input grid-row-3" type="email" id="email" placeholder="Escreva seu Email:">
    <input class="input grid-row-4" type="text" id="assunto" placeholder="Assunto:">
    <textarea class="textarea grid-row-5" id="texto" cols="30" rows="10" placeholder="Escreva a sua mensagem aqui:"></textarea>
    <input class="btn grid-row-6" type="button" value="Enviar" onclick="modal_ligar()">
  </form>
    <section id="modal" class="modal-off">
    <div id="modal-pagina" class="modal-pag">
        <Label class="esc" onclick="remove()"> X </Label>
        <h2 class="titulo-modal" >Obrigado pela mensagem</h1>
        <p class="p-modal"> Responderemos assim que possivel via email </p>
        <img src="img/gif-comemoracao.gif" class="comemoracao" alt="">
    </div>
    </section>
    `   
}

else if(id=="Convocação"){
    const pag = document.getElementById("main")
    pag.removeAttribute('class')
    const main = document.getElementById('main').innerHTML=`
    <div>
        <h1 class="titulo-2">CONVOCAÇÃO</h1>
        <table class="tabela">
            <tr>
                <th class="posicoes">Goleiros</th>
                <td>Alisson (Liverpool), Ederson (Manchester City) e Weverton (Palmeiras)</td>
            </tr>
            <tr>
                <th class="posicoes">Laterais</th>
                <td> Daniel Alves (Barcelona), Danilo (Juventus), Alex Sandro (Juventus), Alex Telles (Manchester United), Guilherme Arana (Atlético-MG)</td>
            </tr>
            <tr>
                <th class="posicoes">Zagueiros</th>
                <td>Eder Militão (Real Madrid), Gabriel Magalhães (Arsenal), Marquinhos (PSG) e Thiago Silva (Chelsea)</td>
            </tr>
            <tr>
                <th class="posicoes">Meio-campistas</th>
                <td>Bruno Guimarães (Newcastle), Casemiro (Real Madrid), Danilo (Palmeiras) Fabinho (Liverpool), Fred (Manchester United), Lucas Paquetá (Lyon), Philippe Coutinho (Aston Villa)</td>
            </tr>
            <tr>
                <th class="posicoes">Atacantes</th>
                <td colspan="3">Gabriel Jesus (Manchester City), Gabriel Martinelli (Arsenal), Matheus Cunha (Atlético de Madri), Neymar (Paris Saint-Germain), Raphinha (Leeds United), Richarlison (Everton), Rodrygo (Real Madrid) e Vini Júnior (Real Madrid)</td>
            </tr>
        </table>
    </div>
    `   
}
else if(id=="Produtos"){
    const pag = document.getElementById("main")
    pag.removeAttribute('class')
    const main = document.getElementById('main').innerHTML=`
    <h1 class="titulo-2">Produtos</h1>
<section class="produtos" id="Produtos">
    <div class="card-produto">
        <img src="img/produtos/1660232681753.png" class="img-card-produto" id="image-1" alt="">
        <p class="txt-prod faixa"> Faixa Brasil - Amarela</p>
    </div>
    <div class="card-produto">
        <img src="img/produtos/1660232701556.png" class="img-card-produto" id="image-2" alt="">
        <p class="txt-prod faixa">Faixa Brasil - Verde</p>
    </div>
    <div class="card-produto">
        <img src="img/produtos/1660233273453.png" class="img-card-produto" id="image-3" alt="">
        <p class="txt-prod"> Bone Nike Brasil - Branco</p>
    </div>
    <div class="card-produto">
        <img src="img/produtos/1660233292799.png" class="img-card-produto" id="image-4" alt="">
        <p class="txt-prod"> Bone Nike Brasil - Preto</p>
    </div></br>
    
</section>
    `   
}

else if(id=="Noticias"){
    const pag = document.getElementById("main")
    pag.removeAttribute('class')
    const main = document.getElementById('main').innerHTML=`
    <h2 class="titulo-2">Noticias</h2>
    <section class="noticias">
        <ul>

            <div class="not ">
                <img src="img/noticias/cara-feliz.jpg" alt="" srcset="">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim quis illum magnam nesciunt odio, cupiditate atque incidunt velit tempora. Minima, dicta beatae? Quam expedita saepe sunt dolore eaque deserunt quas.</p>
            </div>
            <div class="not ">
                <img src="img/noticias/neymar.jpg" alt="" srcset="">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, velit iure laborum unde aspernatur necessitatibus tempora obcaecati totam consectetur beatae enim nulla optio, cumque, tenetur voluptas fuga debitis? Velit, autem?</p>
            </div>
            <div class="not ">
                <img src="img/noticias/d4445ee1-180f-11ed-beff-2e6ff3fc9cdc.jfif" alt="" srcset="">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed tempora consequuntur consectetur vero vel, praesentium at, quo tenetur obcaecati ullam officiis quibusdam voluptas maxime, assumenda quisquam. Velit consequatur accusantium quibusdam.</p>
            </div>
        </ul>

    </section>
    `   
}


