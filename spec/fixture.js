const fixture = `
<!DOCTYPE html> 
<html>
    <head>
<title>visitor information</title>



<style>
    body {background-color: powderblue;
        text-align: center;
    }
     input {
        width: 100%; 
        margin: 10px 0px; 
        font-size: 15px;  
     }
    form {
        display: inline-block;
        width:200px;
        padding: 20px 50px;
        background-color: whitesmoke;

    }
    button { 
        padding: 10px 20; 
        align-self: auto;
    }
    textarea {
        margin: 10px 0px; 
        font-size: 15px;
        height: 100px;
        text-align: center;
    }

    table tr {
        padding: 5px;
        text-align: center;

        border: solid 1px;
    }

    table {

        padding: 5rem 5rem;
        padding-left: 10rem;


    }

            
    </style>
    </head> 
   <body>
   <div class="container">
        
        <h1>Visitor information</h1>
    <form  action="/newVisitor" method="post" id="form" class="body">
            
            <input type="text" placeholder="visitor name" name="name"><br>
            <input type="text" placeholder="name of assistant" name="assistant"><br>
            <input type="text"  placeholder="visitors age" name="age"><br>
            <input type="date" placeholder="date of visit" name="date"><br>
            <input type="time" placeholder="time of visit" name="time"><br>
            <textarea type="text" placeholder="comments" name="comment"></textarea><br>
               
            
            <button>submit</button><br>
        </form>



        <div class="output">
            <table class="table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Visitor</th>
                    <th>Age</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Assistant</th>
                    <th>Comments</th>
                    <th>Clear</th>
                </tr>
                </thead>
                <tbody id="visitors">
                </tbody>
            </table>
        </div>
        </div>

        <script type="text/javascript" src="main.js"></script>

    </body>
</html>
`;

module.exports = fixture;