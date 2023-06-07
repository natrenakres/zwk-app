import { getMonthDays, calculateZwk } from './util';

test('should get 2023 February list', () => { 
    const days = getMonthDays(1, 2023);

    expect(days.length).toEqual(28);
 });

 test('should be z1 10', () => { 
    const z1 = calculateZwk(7, 45);    

    expect(z1).toEqual(12);
  })

  test('should be z6 97', () => { 
    const z6 = calculateZwk(16, 12);
    
    expect(z6).toEqual(97);
   })

    test('should be work time 87', () => {
        const z1 = calculateZwk(7, 45);
        const z6 = calculateZwk(16, 12);

        const workTime = z6 - z1;
        expect(workTime).toEqual(85);
    })