export function check() {
  const formCheck = document.createElement('form');
  const divfather = document.createElement('div');
  // titulo
  const title = document.createElement('h2');
  title.textContent = '¡Bienvenida!';
  // nombre de usuario
  const User = document.createElement('input');
  User.classList.add('usser');
  const labelUser = document.createElement('label');
  labelUser.textContent = 'Nombre de Usuario';
  labelUser.classList.add('labelUser');
  // contraseña
  const password = document.createElement('input');
  const labelpassword = document.createElement('label');
  labelpassword.textContent = 'Crea Contraseña';
  labelpassword.classList.add('labelpassword');
  // correo
  const email = document.createElement('input');
  const labelemail = document.createElement('label');
  labelemail.textContent = 'Ingresa Correo';
  labelemail.classList.add('labelemail');

  divfather.append(formCheck, title, User, labelUser, password, labelpassword, email, labelemail);
  return divfather;
}
