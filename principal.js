introducao-javascript
├── css
│   ├── index.css
│   └── reset.css
├── js
│   └── principal.js
├── img
├── favicon.ico
└── index.html// Restante do código HTML
            </section>
        </main>
        <!-- Importação dos Javascripts AQUI -->
        <script src="js/principal.js"></script>
    </body>
</html><h1>adrian</h1><h1 class="titulo">adrian</h1>
document.querySelector(".titulo");
var titulo = document.querySelector(".titulo");
titulo.textContent = "adrian"
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function() {
    console.log("Fui clicado!");
});var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Fui clicado!");
});
