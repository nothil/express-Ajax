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



});

//   it("returns 404", function(done) {
//    var data = {};
//    request.post("http://localhost:3000/newVisitor", (error, response, body) =>{

//       data.status = response.statusCode;
//       data.body = JSON.parse(body);
//    // request("http://localhost:3000/newVisitor", function(error, response, html){
//      expect(response.body).toBe();
//    });

//    done();
//  });




// });

// describe("POST /world", function() {
//    beforeEach(function() {
//      //we start express app here
//      require("../src/app");
//    });
 
 
//    it('should fail on POST', function (done) {
//       request.post("http://localhost:3000/newVisitors", {}, function (error, response) {
//           expect(response.statusCode).toEqual(404);
//       });
//       done();
//   });
// });