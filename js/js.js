function start() { // Inicio da função start()

	$("#inicio").hide();
	
	$("#fundoGame").append("<div id='jogador' class='anima1'></div>");
	$("#fundoGame").append("<div id='inimigo1' class='anima2'></div>");
	$("#fundoGame").append("<div id='inimigo2'></div>");
    $("#fundoGame").append("<div id='amigo' class='anima3'></div>");

    //Principais variáveis do jogo

    var jogo = {}
    var TECLA = {
        up: 38,
        down: 40,
        space: 13,
        right: 39,
        left: 37
        }
    
        jogo.pressionou = [];

    //Verifica se o usuário pressionou alguma tecla	
	
	$(document).keydown(function(e){
        jogo.pressionou[e.which] = true;
        });
    
    
        $(document).keyup(function(e){
           jogo.pressionou[e.which] = false;
        });

//Game Loop
jogo.timer = setInterval(loop,30);

function loop() {

movefundo();
movejogador();
} // Fim da função loop()

//Função que movimenta o fundo do jogo
	
function movefundo() {
	
	esquerda = parseInt($("#fundoGame").css("background-position"));
	$("#fundoGame").css("background-position",esquerda-1);
	
    } // fim da função movefundo()
    
    function movejogador() {
	
        if (jogo.pressionou[TECLA.up]) {
            var movev = parseInt($("#jogador").css("top"));
            $("#jogador").css("top",movev-10);

            if (movev<=0) {
		        $("#jogador").css("top",movev+15);
            }

        
        }
        
        if (jogo.pressionou[TECLA.down]) {
            
            var movev = parseInt($("#jogador").css("top"));
            $("#jogador").css("top",movev+10);	

            if (movev>=434) {	
                $("#jogador").css("top",movev-10);
                    
            }
        }

        if (jogo.pressionou[TECLA.left]) {
            
            var moveh = parseInt($("#jogador").css("left"));
            $("#jogador").css("left",moveh-10);

            if (moveh<=8) {	
                $("#jogador").css("left",moveh+10);
                    
            }

        }

        if (jogo.pressionou[TECLA.right]) {
            
            var moveh = parseInt($("#jogador").css("left"));
            $("#jogador").css("left",moveh+10);

            if (moveh>=698) {
                $("#jogador").css("left",moveh-10);
                    
            }
            

        }
        
        if (jogo.pressionou[TECLA.space]) {
            
            //Chama função Disparo	
        }
    
        } // fim da função movejogador()

} // Final da função start()






