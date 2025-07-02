document.getElementById('newChampionshipBtn').addEventListener('click', function() {
    document.getElementById('formContainer').style.display = 'block';
});

document.getElementById('addEquipoBtn').addEventListener('click', function() {
    const equipoDiv = document.querySelector('.equipo').cloneNode(true);
    equipoDiv.querySelectorAll('input').forEach(input => input.value = '');
    document.getElementById('equiposContainer').appendChild(equipoDiv);
});

document.querySelectorAll('.addJugadorBtn').forEach(button => {
    button.addEventListener('click', function() {
        const jugadorDiv = this.previousElementSibling.querySelector('.jugador').cloneNode(true);
        jugadorDiv.querySelectorAll('input').forEach(input => input.value = '');
        this.previousElementSibling.appendChild(jugadorDiv);
    });
});

document.getElementById('misCampeonatos').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('popupContainer').style.display = 'block';
    }
});

document.getElementById('registroEquipos').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('equiposPopupContainer').style.display = 'block';
    }
});

document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popupContainer').style.display = 'none';
});

document.getElementById('closeEquiposPopup').addEventListener('click', function() {
    document.getElementById('equiposPopupContainer').style.display = 'none';
});

document.getElementById('eliminatoriasBtn').addEventListener('click', function(event) {
        event.preventDefault(); 
        document.getElementById('eliminatoriasPopup').style.display = 'block';
        });

    document.getElementById('closeEliminatoriasPopup').addEventListener('click', function() {
        document.getElementById('eliminatoriasPopup').style.display = 'none';
        });

    document.getElementById('closePopup').addEventListener('click', function() {
        document.getElementById('popup').style.display = 'none';
        });

    document.getElementById('closeEquiposPopup').addEventListener('click', function() {
        document.getElementById('equiposPopup').style.display = 'none';
        });

