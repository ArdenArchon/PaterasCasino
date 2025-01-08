let currentPlayer = null;  // Almacena la información del jugador
let rooms = {}; // Almacena las salas de póker creadas
let coins = 100; // Cantidad inicial de monedas

// Iniciar sesión
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Verificar si el usuario y la contraseña son correctos (para simplificar lo dejamos así)
    if (username === "jugador" && password === "1234") {
        currentPlayer = username;
        alert("Bienvenido " + username);
        document.getElementById("accountSection").style.display = "none";
        document.getElementById("games").style.display = "block";
        document.getElementById("coins").textContent = "Monedas: " + coins;
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}

// Registrar nuevo usuario
function register() {
    const newUsername = document.getElementById("newUsername").value;
    const newPassword = document.getElementById("newPassword").value;

    // Aquí se puede agregar un sistema de registro real con validación y almacenamiento
    alert("Usuario registrado correctamente");
    document.getElementById("registerSection").style.display = "none";
    document.getElementById("accountSection").style.display = "block";
}

// Cancelar registro
function cancelRegister() {
    document.getElementById("registerSection").style.display = "none";
    document.getElementById("accountSection").style.display = "block";
}

// Crear sala
function createRoom() {
    const roomCode = Math.random().toString(36).substring(2, 7); // Genera un código de sala aleatorio
    rooms[roomCode] = { players: [currentPlayer] };
    alert("Sala creada. Código de sala: " + roomCode);
}

// Unirse a sala
function joinRoom() {
    const roomCode = document.getElementById("roomCode").value;
    if (rooms[roomCode]) {
        rooms[roomCode].players.push(currentPlayer);
        alert("Te has unido a la sala: " + roomCode);
    } else {
        alert("Código de sala incorrecto");
    }
}

// Jugar ruleta
function spinWheel() {
    const bet = parseInt(document.getElementById("wheelBet").value);
    if (bet > coins) {
        alert("No tienes suficientes monedas");
        return;
    }

    coins -= bet;
    const result = Math.random() < 0.5 ? "rojo" : "verde";
    document.getElementById("wheel").style.transform = `rotate(${Math.random() * 360}deg)`;

    setTimeout(() => {
        if (result === "verde") {
            coins += bet * 2;
            alert("¡Ganaste! Tienes " + coins + " monedas");
        } else {
            alert("Perdiste. Tienes " + coins + " monedas");
        }
    }, 3000);
}
