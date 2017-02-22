const invertedIndex = new InvertedIndex;
describe('Test if the object exist and new instances can be created from it',
 () => {
   beforeEach(() => {
   });

   it('contains spec with an expectation', () => {
     expect(typeof (InvertedIndex)).toEqual('function');
   });

   it('should create an object once the class is declared', () => {
     expect(invertedIndex).toEqual(jasmine.any(Object));
   });

   it('should create an instance of itself once its attached to the' +
  '"new" key word',
  () => {
    expect(invertedIndex instanceof InvertedIndex).toBeTruthy();
  });
 });
