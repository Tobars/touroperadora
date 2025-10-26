function logout() {
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('username');
    window.location.href = 'login.html';
}

function openTourModal() {
    document.getElementById('tourModal').classList.add('show');
    document.getElementById('modalTitle').textContent = 'Nuevo Tour';
    document.getElementById('tourForm').reset();
    document.getElementById('tourId').value = '';
}

function closeTourModal() {
    document.getElementById('tourModal').classList.remove('show');
}

function editTour(id) {
    document.getElementById('tourModal').classList.add('show');
    document.getElementById('modalTitle').textContent = 'Editar Tour';
    document.getElementById('tourId').value = id;
}

function deleteTour(id) {
    if(confirm('¿Está seguro de eliminar este tour?')) {
        alert('Tour eliminado (conectar con backend)');
    }
}

function openGuiaModal() {
    document.getElementById('guiaModal').classList.add('show');
    document.getElementById('guiaModalTitle').textContent = 'Nuevo Guía';
    document.getElementById('guiaForm').reset();
    document.getElementById('guiaId').value = '';
}

function closeGuiaModal() {
    document.getElementById('guiaModal').classList.remove('show');
}

function editGuia(id) {
    document.getElementById('guiaModal').classList.add('show');
    document.getElementById('guiaModalTitle').textContent = 'Editar Guía';
    document.getElementById('guiaId').value = id;
}

function deleteGuia(id) {
    if(confirm('¿Está seguro de eliminar este guía?')) {
        alert('Guía eliminado (conectar con backend)');
    }
}

function openProveedorModal() {
    document.getElementById('proveedorModal').classList.add('show');
    document.getElementById('proveedorModalTitle').textContent = 'Nuevo Proveedor';
    document.getElementById('proveedorForm').reset();
    document.getElementById('proveedorId').value = '';
}

function closeProveedorModal() {
    document.getElementById('proveedorModal').classList.remove('show');
}

function editProveedor(id) {
    document.getElementById('proveedorModal').classList.add('show');
    document.getElementById('proveedorModalTitle').textContent = 'Editar Proveedor';
    document.getElementById('proveedorId').value = id;
}

function deleteProveedor(id) {
    if(confirm('¿Está seguro de eliminar este proveedor?')) {
        alert('Proveedor eliminado (conectar con backend)');
    }
}

function viewReservaDetails(id) {
    alert('Ver detalles de reserva #' + id + ' (conectar con backend)');
}

function cancelReserva(id) {
    if(confirm('¿Está seguro de cancelar esta reserva?')) {
        alert('Reserva cancelada (conectar con backend)');
    }
}

function confirmReserva(id) {
    if(confirm('¿Confirmar esta reserva?')) {
        alert('Reserva confirmada (conectar con backend)');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const tourForm = document.getElementById('tourForm');
    if(tourForm) {
        tourForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Tour guardado (conectar con backend)');
            closeTourModal();
        });
    }

    const guiaForm = document.getElementById('guiaForm');
    if(guiaForm) {
        guiaForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Guía guardado (conectar con backend)');
            closeGuiaModal();
        });
    }

    const proveedorForm = document.getElementById('proveedorForm');
    if(proveedorForm) {
        proveedorForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Proveedor guardado (conectar con backend)');
            closeProveedorModal();
        });
    }

    window.onclick = function(event) {
        const tourModal = document.getElementById('tourModal');
        const guiaModal = document.getElementById('guiaModal');
        const proveedorModal = document.getElementById('proveedorModal');
        
        if(event.target === tourModal) {
            closeTourModal();
        }
        if(event.target === guiaModal) {
            closeGuiaModal();
        }
        if(event.target === proveedorModal) {
            closeProveedorModal();
        }
    }
});
