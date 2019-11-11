const MongoClient = require('mongodb').MongoClient
      bcrypt = require('bcryptjs')
      uri = "mongodb+srv://ghaust:EW63BjZ6FFBv5L6X@web-project-nvcrn.mongodb.net/test?retryWrites=true&w=majority";
const functions = require('./functions.js')     
const app = require('./server.js')

//wesh 

/** Authentification URL Request */
app.get('/authentification/:email/:password', function(req, response){
  const client = new MongoClient(uri, { useNewUrlParser: true })
  client.connect(err => {
    const collection = client.db("Esiea").collection("Students")  
    console.log('Authentification request')
    var umail = req.params.email
        query = { email: umail }
        upwd = req.params.password
    //Code d'erreur à la place du texte
  
    collection.find(query).toArray(function(err, result){
        if (err) throw err
        if(result.length < 1)
          response.send("EMAIL") //Erreur serveur
        else{
          console.log("Email verification")
          var dbpwd = result[0].password
          console.log("Password verification")
          if(upwd == dbpwd)
              response.sendStatus(200) //Succès
          else
              response.send("PWD") // Accès refusé / Mot de passe incorrect
          }
    })
  client.close();
  });
})

/** Get Student Infos */
app.get('/getStudentInfos/:email', function(req, response){
  const client = new MongoClient(uri, { useNewUrlParser: true })
  client.connect(err => {
    const collection = client.db("Esiea").collection("Students")  
    var umail = req.params.email
        query = { email: umail }
    
    collection.find(query).toArray(function(err, result){
      if (err) throw err
      if(result.length < 1)
        response.send("EMAIL") //on retourne un message d'erreur response.send(
      else{
        console.log('Get Student Infos ' + result[0].f_name + " " + result[0].l_name)
        var studentInfos = [result[0].f_name, result[0].l_name, result[0].sector]
        response.send(studentInfos)
      }
    })
  client.close();
  });
})

/** GET All Grades URL Request */
app.get('/getAllGrades/:email', function(req, response){
  const client = new MongoClient(uri, { useNewUrlParser: true })
  client.connect(err => {
    const collection = client.db("Esiea").collection("Students")  
    var umail = req.params.email
        query = { email: umail }
    
    collection.find(query).toArray(function(err, result){
      if (err) throw err
      if(result.length < 1)
        response.send("EMAIL") //on retourne un message d'erreur response.send(
      else{
        console.log('Get All Grades of ' + result[0].f_name + " " + result[0].l_name)
        response.send(result[0].grades)
      }
    })
  client.close();
  });
})

/* Get Number Of Absences */
app.get('/getNumberOfAbs/:email', function(req, response){

  const client = new MongoClient(uri, { useNewUrlParser: true })
  client.connect(err => {
    const collection = client.db("Esiea").collection("Students")  
    var umail = req.params.email
        query = { email: umail }
    
    collection.find(query).toArray(function(err, result){
      if (err) throw err
      
      if(result.length < 1)
        response.send("EMAIL") //on retourne un message d'erreur 
      else{
        console.log('Get Number of Absences of ' + result[0].f_name + " " + result[0].l_name)
        response.send(''+ result[0].absence)
      }
    })
  client.close();
  });
})


app.get('/getCalendar/:email', function(req, response){
    const client = new MongoClient(uri, {useNewUrlParser: true})
    client.connect(err => {
          const collection = client.db("Esiea").collection("Students")
          var umail = req.params.email
              query = {email: umail}

          collection.find(query).toArray(function(err, result){
              if (err) throw err;
          if(result.length < 1)
              response.send("EMAIL")
          else{
              console.log("Get Calendar Informations")

          }
          })
    })
})


app.get('/createTags/:email', function(req, response){
  const client = new MongoClient(uri, {useNewUrlParser: true})
  client.connect(err => {
        const collection = client.db("Esiea").collection("Students")
        var umail = req.params.email
            query = {email: umail}

       collection.find(query).toArray(function(err, result){
          if (err) throw err
          if(result.length < 1)
            response.send("EMAIL") //on retourne un message d'erreur response.send(
          else{
            console.log('Creating Tags of ' + result[0].f_name + " " + result[0].l_name)
            grades = result[0].grades
            var modules = ['Technical Common Core', 'Core Program', 'Elective Program']
                averageOfEachModule = []

            for(i=0; i<modules.length; i++)
              averageOfEachModule.push(functions.calculateAverage(grades[modules[i]]))
            
           response.send([functions.assignTagWithGrade(functions.calculateAverage(averageOfEachModule)), functions.assignTagWithAbsc(result[0].absence), functions.assignTagWithDistance(result[0].timeToGoToSchool)])
          }
      })
    
  })
})

app.get('/getAllMails/:email', function(req, response){
  const client = new MongoClient(uri, {useNewUrlParser: true})
  client.connect(err => {
        const collection = client.db("Esiea").collection("Mail")
        var umail = req.params.email
            query = {receiver: umail.toLowerCase()}

       collection.find(query).toArray(function(err, result){
          if (err) throw err
          if(result.length < 1)
            response.send("EMAIL") 
          else{
            console.log('Mails of ' + result[0].receiver)
            var mails = []
           for(var i=0; i<2; i++){
              mails.push([result[i].sender, result[i].receiver, result[i].subject, result[i].content])
           }
           response.send(mails)
          }
      })
    
  })
})