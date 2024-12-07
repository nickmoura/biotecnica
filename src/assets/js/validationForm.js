function handleSubmit(event) {
    event.preventDefault(); // Evita o envio padrão para tratarmos com JS

    var form = document.getElementById("contact-form");

    // Validação básica para campos vazios
    var isValid = true;
    var inputs = form.querySelectorAll("input, select, textarea");
    inputs.forEach(input => {
        if (!input.value) {
            isValid = false;
        }
    });

    if (!isValid) {
        showSnackbar("Preencha todos os campos obrigatórios!", "error");
    } else {
        // Cria uma requisição AJAX pra enviar o form via POST
        var formData = new FormData(form);

        fetch(form.action, {
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                showSnackbar("Dados enviados com sucesso!", "success");
                form.reset(); // Limpa o formulário após o envio
            } else {
                response.json().then(data => {
                    if (data.hasOwnProperty('errors')) {
                        showSnackbar("Erro no envio: " + data.errors.map(error => error.message).join(", "), "warning");
                    } else {
                        showSnackbar("Erro desconhecido no servidor!", "warning");
                    }
                });
            }
        }).catch(error => {
            // Tratando erro de conexão com o servidor
            showSnackbar("Erro de conexão com o servidor! Tente novamente mais tarde.", "warning");
        });
    }
}

// Atacha o evento ao formulário
document.getElementById("contact-form").addEventListener("submit", handleSubmit);


function showSnackbar(message, type) {
    var snackbar = document.getElementById("snackbar");
    var messageSpan = document.getElementById("snackbar-message");
    var timebar = document.getElementById("timebar");

    // Resetar estilos e conteúdo
    messageSpan.innerHTML = '';
    snackbar.classList.remove("snackbar-error", "snackbar-success", "snackbar-warning");

    // Reiniciar a animação da barra de tempo
    timebar.style.animation = 'none';
    timebar.offsetHeight; // Forçar reflow
    timebar.style.animation = 'timebar 7.5s linear'; /* Ajustado para 7.5 segundos */

    // Configurar a mensagem e o ícone com base no tipo
    if (type === 'error') {
        snackbar.classList.add("snackbar-error");
        messageSpan.innerHTML = "<i class='bx bx-error snackbar-icon'></i>" + message;
    } else if (type === 'success') {
        snackbar.classList.add("snackbar-success");
        messageSpan.innerHTML = "<i class='bx bxs-check-circle snackbar-icon'></i>" + message;
    } else if (type === 'warning') {
        snackbar.classList.add("snackbar-warning");
        messageSpan.innerHTML = "<i class='bx bx-question-mark snackbar-icon'></i>" + message;
    }

    // Mostrar e animar o snackbar
    snackbar.classList.add("show");

    // Ocultar o snackbar após 7.5 segundos
    setTimeout(function() {
        closeSnackbar();
    }, 7500); /* Ajustado para 7.5 segundos */
}

function closeSnackbar() {
    var snackbar = document.getElementById("snackbar");
    snackbar.classList.remove("show");
}

function simulateServerRequest() {
    return new Promise((resolve, reject) => {
        // Simulando uma resposta aleatória do servidor
        setTimeout(() => {
            var responses = ['success', 'server_error'];
            var randomResponse = responses[Math.floor(Math.random() * responses.length)];
            resolve(randomResponse);
        }, 1000);
    });
}
