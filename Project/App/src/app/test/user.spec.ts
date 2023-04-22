import { User } from './user';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User()).toBeTruthy();
  });
});

describe('Casos de prueba con asignar el email', function () {
  let component: User;
  beforeEach(() => {
    component = new User();
  });
  // Prueba 1: Verificar que el correo sea válido y se asigne correctamente
  it('Asignar email valido', () => {
    component.setEmail('usuario@dominio.com');
    expect(component.getEmail()).toEqual('usuario@dominio.com');
  });

  // Prueba 2: Verificar que el correo sea inválido y se lance un error
  it('Asignar email invalido', () => {
    expect(() => {
      component.setEmail('correo_invalido');
    }).toThrowError('El formato del correo es incorrecto');
  });
});

describe('Casos de prueba de la contraseña', function () {
  let component: User;
  beforeEach(() => {
    component = new User();
  });
  // Prueba 1: Asignar una contraseña válida
  it('Asignar contraseña valida', () => {
    expect(component.validatePassword('Carlos12334')).toEqual(true);
  });

  //Prueba 2: Verificar que el correo sea inválido y se lance un error
  it('Asignar contraseña de poca longitud', () => {
    expect(() => {
      component.validatePassword('Car12');
    }).toThrowError('La contraseña necesita al menos 10 caracteres');
  });
});
