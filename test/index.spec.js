/**
 * @jest-environment jsdom
 */

import post from '../src/components/welcome';

describe('es una function', () => {
  test('is a fuction', () => {
    expect(typeof post).toBe('function');
  });
  test('have a button', () => {
    const DOM = document.createElement('div');
    DOM.append('#btnPost');
  });
});

// import * as post from '../src/components/welcome';

// import { deleteDoc, deleteId } from '../src/lib/cloudData.js';
// import { db } from '../src/configurar firebase/firebase.js';

/* describe('post es una función', () => {
  expect(typeof post).tobe('function');
}); */
/* jest.mock('../src/lib/cloudData.js', () => ({
  /* updateDoc: jest.fn(),
  getDoc: jest.fn(),
  exists: jest.fn(),
  deleteDoc: jest.fn(),
}));
describe('deleteId es una función', () => {
  it('debe ser una function', () => {
    expect(typeof deleteId).toBe('function');
  });
  it('debe llamar a la función deleteDoc', () => {
    const deleteDoc = jest.fn();
    deleteId();
    expect(deleteDoc).toHaveBeenCalled();
  });
}); */

/* describe('es una function', () => {
  it('deberia ser una function', () => {
    expect(typeof deleteId).toBe('function');
  });
  describe('deberia llamar a la funcion deleteDoc', () => {
    jest.spyOn(db, deleteDoc).mockImplementation(() => Promise.resolve({ id: '' }));
    const DOM = document.createElement('div');
    DOM.append(deleteId());
    test('cuando tenga id del post debe eliminarlo al hacerse click en el btnDelette');
    expect(deleteId).toHaveBeenCalled(deleteDoc);
  });
}); */
