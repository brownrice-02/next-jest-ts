import { addNumbers } from './addNumbers';

describe('addNumbers', () => {
	it('should return 3 when 1 + 2', () => {
		expect(addNumbers(1, 2)).toBe(3);
	});
});