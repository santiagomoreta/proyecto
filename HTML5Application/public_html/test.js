var bookModel = require('./book');
var assert = require('chai').assert;


describe('book tests', function () {
  describe('t tests', function () {
      var book=bookModel.create();
     book.title="pepe";
     book.isbn=123456;
     //book.condition="regalar";
     book.setCondition("vender");
     book.setPrice(1500);
      
      it(' should  getCategory', function() {
       assert.equal(book.getCategory(), "general");
   
      });
      it(' should  getTitle', function() {
       assert.equal(book.getTitle(), "pepe");
   
      });
      it(' should  isbn', function() {
       assert.equal(book.getIsbn(), 123456);
   
      });
       it(' should  getContition', function() {
       assert.equal(book.getCondition(), "vender");
   
      });
        it(' should  contition sell', function() {
       assert.equal(book.compareCondition(), 100);
   
      });
       it(' should  contition interchange', function() {
         book.setCondition("intercambiar");
       assert.equal(book.compareCondition(), "intercambiar");
   
      });
     
     

    
  });
});


