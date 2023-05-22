/**
 * @jest-environment jsdom
 */
import * as post from '../src/components/welcome';

describe('post es una función', () => {
  expect(typeof post).tobe('funcion');
});
