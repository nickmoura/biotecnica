import { toast } from 'react-toastify';

// Função para exibir notificações com react-toastify
export function showToast(message, isSuccess = false) {
    if (isSuccess) {
        toast.success(message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    } else {
        toast.error(message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
}

// Função para validar o formulário de contato
export function validateContactForm() {
    const nome = document.querySelector('#contact-form input[name="Nome"]').value.trim();
    const email = document.querySelector('#contact-form input[name="E-mail"]').value.trim();
    const celular = document.querySelector('#contact-form input[name="WhatsApp"]').value.trim();
    const idade = document.querySelector('#contact-form input[name="Idade"]').value.trim();
    const motivo = document.querySelector('#contact-form select[name="Motivo"]').value;
    const produto = document.querySelector('#contact-form select[name="Produto"]').value;
    const mensagem = document.querySelector('#contact-form textarea').value.trim();

    if (!nome) {
        showToast("Por favor, insira seu nome.");
        return false;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showToast("Por favor, insira um e-mail válido.");
        return false;
    }

    // Validação do celular com máscara
    if (!celular) {
        showToast("Por favor, insira um número de telefone.");
        return false;
    }
    const celularNumerico = celular.replace(/\D/g, '');
    if (!/^\d{10,11}$/.test(celularNumerico)) {
        showToast("Por favor, insira um número de telefone válido.");
        return false;
    }

    if (!idade || isNaN(idade) || idade < 0 || idade > 120) {
        showToast("Por favor, insira uma idade válida.");
        return false;
    }
    if (!motivo) {
        showToast("Por favor, selecione um motivo de contato.");
        return false;
    }
    if (!produto) {
        showToast("Por favor, selecione um tipo de produto.");
        return false;
    }
    if (!mensagem) {
        showToast("Por favor, escreva uma mensagem.");
        return false;
    }
    return true;
}

// Função para enviar o formulário de contato
export async function submitContactForm(event) {
    event.preventDefault();
    if (!validateContactForm()) return;

    const form = document.getElementById('contact-form');
    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            showToast("Formulário enviado com sucesso! Em breve retornaremos o seu contato", true);
            form.reset();
        } else {
            showToast("Erro ao enviar o formulário. Tente novamente.");
        }
    } catch (error) {
        showToast("Erro de comunicação com o servidor. Tente novamente.");
    }
}
// Função para validar o formulário de checkout
export function validateCheckoutForm() {
    const nome = document.querySelector('#checkout-form input[name="Nome"]').value.trim();
    const email = document.querySelector('#checkout-form input[name="E-mail"]').value.trim();
    const celular = document.querySelector('#checkout-form input[name="WhatsApp"]').value.trim();
    const cidade = document.querySelector('#checkout-form input[name="Cidade"]').value.trim();
    const mensagem = document.querySelector('#checkout-form textarea').value.trim();

    if (!nome) {
        showToast("Por favor, insira seu nome.");
        return false;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showToast("Por favor, insira um e-mail válido.");
        return false;
    }
    if (!celular || !/^\d{10,11}$/.test(celular.replace(/\D/g, ''))) {
        showToast("Por favor, insira um número de telefone válido.");
        return false;
    }
    if (!cidade) {
        showToast("Por favor, insira sua cidade.");
        return false;
    }
    if (!mensagem) {
        showToast("Por favor, insira informações adicionais sobre o pedido.");
        return false;
    }
    return true;
}

// Função para enviar o formulário de checkout
export async function submitCheckoutForm(event) {
    event.preventDefault(); // Evita o comportamento padrão do formulário

    if (!validateCheckoutForm()) return false; // Valida o formulário

    const form = document.getElementById('checkout-form');
    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            showToast("Pedido enviado com sucesso!", true);
            form.reset();
            return true; // Indica que o envio foi bem-sucedido
        } else {
            showToast("Erro ao enviar o pedido. Tente novamente.");
            return false; // Indica que houve um erro no envio
        }
    } catch (error) {
        showToast("Erro de comunicação com o servidor. Tente novamente.");
        return false; // Indica que houve um erro de comunicação
    }
}