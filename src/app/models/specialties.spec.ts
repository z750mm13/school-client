import { Specialty } from './specialties';

describe('Specialties', () => {
  it('should create an instance', () => {
    expect({ 
      name: 'Enfermeria',
      level: 'Licenciaturas'
  }).toBeTruthy();
  });
});
