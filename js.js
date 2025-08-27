// En tu código de búsqueda, dentro de la función displayUsers:
userList.forEach(user => {
    const li = document.createElement('li');
    li.className = 'result-item';
    
    let avatarClass = 'avatar-blue';
    if (user.color === 'dark-blue') avatarClass = 'avatar-dark-blue';
    if (user.color === 'black') avatarClass = 'avatar-black';
    
    li.innerHTML = `
        <div class="user-avatar ${avatarClass}">${user.initial}</div>
        <span class="user-name">${user.name}</span>
    `;
    
    // Agrega este evento click:
    li.addEventListener('click', function() {
        const params = new URLSearchParams();
        params.set('name', user.name);
        params.set('username', user.name.includes('@') ? user.name : `@${user.name.replace(/\s+/g, '')}`);
        params.set('initial', user.initial);
        params.set('color', user.color);
        
        window.location.href = `enviar.html?${params.toString()}`;
    });
    
    resultsList.appendChild(li);
});
// En enviar.html, modifica el evento click del botón Siguiente:
document.querySelector('.next-button').addEventListener('click', function() {
    const amount = document.getElementById('amountInput').value;
    const recipient = document.getElementById('userName').textContent;
    const message = document.getElementById('messageInput').value;
    
    // Formatear el monto con coma decimal
    const formattedAmount = amount.replace('.', ',');
    
    // Redirigir a realizado.html con los parámetros
    window.location.href = `realizado.html?amount=${formattedAmount}&recipient=${encodeURIComponent(recipient)}&message=${encodeURIComponent(message)}`;
});