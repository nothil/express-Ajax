describe("Express Ajax Apis", () => {
    const axios = require('axios');

    //const { Pool } = require('pg');
    //const fixture = require('./fixture')


    // beforeEach(() =>{
    //     //server = require('../src/app.js')
    //     const pool = new Pool();


    // });

    
     let addVisitor = {

        name: 'nothile',
        assistant: 'sphiwe',
        age: '25',
        date: '05/05/2020',
        time: '12:00',
        comments: 'greate'
     }

     

     it('should add visitor to db', async (done) => {
         const res = await axios.post('http://127.0.0.1:3000/newVisitor', addVisitor);

         expect(visitorData.name).toEqual(addVisitor.name);
         expect(visitorData.age).toEqual(addVisitor.age);
         expect(new Date (visitorData.date)).toEqual(new Date(addVisitor.date));
         expect(visitorData.time).toEqual(addVisitor.time);
         expect(visitorData.comments).toEqual(addVisitor.comments);
     });

     it('should display added visitors', async() =>{
        const res = await axios.get('http://127.0.0.1:3000/newVisitor')

        visitorData = res.data.addVisitor;
        expect(res.data.visitors).not.toBe([]);

     });
});