document.getElementById("agregar").addEventListener("click", () => {
  const id = document.getElementById("id").value.trim();
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!id || !nombre || !email) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  const lista = document.getElementById("lista-usuarios");
  const nuevoUsuario = document.createElement("li");
  nuevoUsuario.textContent = `ID: ${id}, Nombre: ${nombre}, Email: ${email}`;
  lista.appendChild(nuevoUsuario);

  // Limpiar campos
  document.getElementById("id").value = "";
  document.getElementById("nombre").value = "";
  document.getElementById("email").value = "";
});