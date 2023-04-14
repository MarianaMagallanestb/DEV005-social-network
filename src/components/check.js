export function check() {
  const divfather = document.createElement('div');
  const title = document.createElement('h2');
  title.textContent = '¡Bienvenida!';
  const nameUser = document.createElement('input');
  nameUser.classList.add('usser');
  const labelUser = document.createElement('label');
  labelUser.textContent = 'Nombre de Usuario';
  labelUser.classList.add('labelUser');
  const password = document.createElement('input type=number');
  // password.number = 'Crea contraseña';
  divfather.append(title, nameUser, labelUser, password);
  return divfather;
}
