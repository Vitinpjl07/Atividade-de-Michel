// Função para reproduzir uma música (simula o clique)
function playSong(musicName) {
    alert(`🎵 Reproduzindo: "${musicName}"\n\nMúsica em sucesso de ANAVITÓRIA!`);
    console.log(`Tocando: ${musicName}`);
}

// Função para rolar até uma seção
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Função para enviar formulário
function enviarFormulario(event) {
    event.preventDefault();

    // Capturar valores do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Validar dados
    if (nome.trim() === '' || email.trim() === '' || mensagem.trim() === '') {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um email válido!');
        return;
    }

    // Simular envio
    console.log('Formulário enviado:');
    console.log(`Nome: ${nome}`);
    console.log(`Email: ${email}`);
    console.log(`Mensagem: ${mensagem}`);

    // Limpar formulário
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mensagem').value = '';

    // Mostrar mensagem de sucesso
    const mensagemSucesso = document.getElementById('mensagem-sucesso');
    mensagemSucesso.style.display = 'block';

    // Esconder mensagem após 5 segundos
    setTimeout(() => {
        mensagemSucesso.style.display = 'none';
    }, 5000);
}

// Função para abrir redes sociais
function abrirRede(rede) {
    const links = {
        'instagram': 'https://www.instagram.com/',
        'spotify': 'https://www.spotify.com/',
        'youtube': 'https://www.youtube.com/'
    };

    alert(`Abrindo ${rede.toUpperCase()}...\n\nSiga ANAVITÓRIA nas redes sociais!`);
}

// Efeito de scroll revelador
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página carregada com sucesso!');

    // Adicionar classe quando elementos ficam visíveis
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar elementos de seção
    document.querySelectorAll('.song-card, .album-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });

    // Adicionar interatividade aos cards de músicas
    document.querySelectorAll('.song-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(135deg, #f3f4f6, #e5e7eb)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.background = 'white';
        });
    });

    // Smooth scroll para links da navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// Função para gerar informações aleatórias sobre a artista
function gerarFato() {
    const fatos = [
        'ANAVITÓRIA é conhecida por sua voz única e autêntica',
        'Seus álbuns chegaram ao topo das paradas musicais',
        'Ela realiza apresentações memoráveis em grandes festivais',
        'Suas letras são profundas e poéticas',
        'ANAVITÓRIA tem milhões de seguidores nas redes sociais',
        'Sua música combina elementos de MPB com pop moderno'
    ];

    const fatoAleatorio = fatos[Math.floor(Math.random() * fatos.length)];
    console.log(`📌 Fato sobre ANAVITÓRIA: ${fatoAleatorio}`);
    return fatoAleatorio;
}

// Função para contar visitas (simulado com localStorage)
function contarVisitas() {
    let visitas = localStorage.getItem('visitas-anavitoria');
    visitas = visitas ? parseInt(visitas) + 1 : 1;
    localStorage.setItem('visitas-anavitoria', visitas);
    console.log(`👀 Total de visitas: ${visitas}`);
    return visitas;
}

// Inicializar contador de visitas
contarVisitas();

// Gerar fato aleatório
gerarFato();

// Função para verificar preferências do usuário
function verificarPreferenciasAudio() {
    const usuarioGostaDeMBP = confirm('Você gosta de MPB? 🎵');
    if (usuarioGostaDeMBP) {
        console.log('✅ Você vai amar a música de ANAVITÓRIA!');
    } else {
        console.log('Descubra a riqueza da MPB com ANAVITÓRIA!');
    }
}
