"use strict";

const request = require("axios");

describe("GET /visitor data", function() {
  beforeEach(function() {
   
    require("../src/app");
  });


  it("returns html form!", function(done) {
    request.get("http://localhost:3000/single-page-app", function(error, response, html){
      expect(html).toBe("index.html");
    });

    done();
  });

  it('should fail on POST', function (done) {
   request.post("http://localhost:3000/newVisitor", {}, function (error, response) {
       expect(response.statusCode).toEqual(404);
   });
   done();
});

it('Should all view visitors',   function (done) {
     request.get('http://127.0.0.1:3000/viewAllVisitors', function(res, body){
      
      objVisitor = res.body.visitor;

      expect(res.body.status).toBe('ok');
      expect(res.body.visitors).not.toBe([]);

   });

   

   done();
});

it('should delete a visitor',  function (done){
   request.delete('http://127.0.0.1:3000/deleteVisitor/${id}', function(id, res){
      expect(res.data.status).toBe('ok');
		expect(res.data.visitors).not.toEqual([]);

   })

   done();

})



});

