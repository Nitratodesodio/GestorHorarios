var availableCount = 8; // Total de personas disponibles

for (var hour = 0; hour < 24; hour++) {
  var formattedHour = hour.toString().padStart(2, '0');
  document.write('<tr>');
  document.write('<td>' + formattedHour + ':00</td>');
  for (var day = 0; day < 7; day++) {
    document.write('<td><button onclick="handleButtonClick(this)">Agregar</button></td>');
  }
  document.write('</tr>');
}

function handleButtonClick(button) {
  var cell = button.parentElement;
  if (availableCount > 0) {
    if (cell.style.backgroundColor === 'red') {
      cell.style.backgroundColor = '';
      button.textContent = 'Agregar';
      availableCount++; // Aumentar la cantidad de personas disponibles
      updateAvailableCount();
    } else {
      cell.style.backgroundColor = 'red';
      button.textContent = 'Ocupado';
      availableCount--; // Reducir la cantidad de personas disponibles
      updateAvailableCount();
      if (availableCount === 0) {
        document.getElementById('noAvailabilityMessage').style.display = 'block';
      }
    }
  } else {
    if (cell.style.backgroundColor === 'red') {
      cell.style.backgroundColor = '';
      button.textContent = 'Agregar';
      availableCount++;
      updateAvailableCount();
      closeModal(); // Cerrar el modal cuando se agrega una persona disponible
    } else {
      openModal(); // Abrir el modal cuando no hay disponibles
    }
  }
}

function openModal() {
  document.getElementById('modalOverlay').style.display = 'flex';
}

function closeModal() {
  document.getElementById('modalOverlay').style.display = 'none';
}

function updateAvailableCount() {
  var availableCountElement = document.getElementById('availableCount');
  availableCountElement.textContent = availableCount;
}


