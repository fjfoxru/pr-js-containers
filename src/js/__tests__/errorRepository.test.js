import ErrorRepository from '../errorRepository';


it('работает добавление', () => {
  const errorRepository = new ErrorRepository();
  errorRepository.add('1', 'error1');
  errorRepository.add('2', 'error2');
  errorRepository.add('3', 'error3');
  
  expect(errorRepository.errors.size).toBe(3);
});

it('работает получение значения', () => {
  const errorRepository = new ErrorRepository();
  errorRepository.add('1', 'error1');
  expect(errorRepository.translate('1')).toBe('error1');
});
