introducao-javascript
├── css
│   ├── index.css
│   └── reset.css
├── js
│   └── principal.js
├── img
├── favicon.ico
└── index.html
// Restante do código HTML
            </section>
        </main>
        <!-- Importação dos Javascripts AQUI -->
        <script src="js/principal.js"></script>
    </body>
</html><h1>adrian nutricao</h1>
  <h1 class="titulo">adrian nutricao</h1>
document.querySelector(".titulo");
var titulo = document.querySelector(".titulo");
titulo.textContent = "adrian nutricao"
<!-- restante do HTML -->
var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var tdAltura = paciente.querySelector(".info-altura");
var tdPeso = paciente.querySelector(".info-peso");
var tdAltura = paciente.querySelector(".info-altura");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;
var imc = peso / (altura * altura);
var tdImc = paciente.querySelector(".info-imc");
tdImc.textContent = imc;
if(peso <= 0 || peso > 1000){
    console.log("Peso inválido");
}if(peso <= 0 || peso > 1000){
    console.log("Peso inválido");
    tdImc.textContent = "Peso inválido!";
}if(altura <= 0 || altura >= 3){
    console.log("Altura inválida");
    tdImc.textContent = "Altura inválida!";
}var alturaEhValida = true;
var pesoEhValido = true;

if(peso <= 0 || peso > 1000){
    console.log("Peso inválido");
    tdImc.textContent = "Peso inválido!";
    pesoEhValido = false;
}

if(altura <= 0 || altura >= 3){
    console.log("Altura inválida");

    tdImc.textContent = "Altura inválida!";
    alturaEhValida = false;
}var alturaEhValida = true;
var pesoEhValido = true;

if(peso <= 0 || peso > 1000){
    console.log("Peso inválido");
    tdImc.textContent = "Peso inválido!";
    pesoEhValido = false;
}

if(altura <= 0 || altura >= 3){
    console.log("Altura inválida");
    tdImc.textContent = "Altura inválida!";
    alturaEhValida = false;
}

if(pesoEhValido && alturaEhValida){
    var imc = peso / ( altura * altura);    
    tdImc.textContent = imc;
}
