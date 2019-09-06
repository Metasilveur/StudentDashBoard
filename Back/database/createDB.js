const MongoClient = require('mongodb').MongoClient
const uri = "mongodb+srv://ghaust:EW63BjZ6FFBv5L6X@web-project-nvcrn.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true })
let Student = require('./Student')

//Système de tags 
client.connect(err => {
  const collection = client.db("Esiea").collection("Students");
  var obj = [
    new Student('Yusuf', 'Doe', 'ydoe@et.esiea.fr', 'information system', "01/01/1960", "Rue de Lappe", 
    {
      "Technical Common Core":{
          "Estimation and Data Analysis": 10,
          "Numerical and combinatorial optimization":15,
          "IP Networks":16,
          "Cryptography":12,
          "PST":0,
          "Virtual Reality":12,
          "System programming and real time":13,
          "Digital Imaging":15
      },
      "Core Program":{
          "Business Culture - Management and Law":15, 
          "Business Culture - Sustainable Development and Business Plan": 12,
          "Project Management": 16,
          "Seminar": 18,
          "Relationship Dynamics": 10,
          "English - New Technology and TOEIC": 20,
          "APIC (Actions to Promote Information and Communication) Optional": 19,
          "2nd foreign language, French for foreigners, reinforced English Optional":20
      }, 
      "Elective Program":{
          "Web Development": 19, 
          "Mobile Development": 20, 
          "Database Management Systems":19,
          "Datamining and applications":16,
          "Introduction to reverse engineering":18,
          "Software Architecture":7,
          "Neural Networks":20,
          "Distributed Programming":10
      }}, 9, 'azerty09'),

    new Student('Joseph-Emmanuel', 'Banzio', 'banzio@et.esiea.fr', 'information system', "20/04/1998", "89 rue de Villiers, 92200 Neuilly-sur-Seine", {
      "Technical Common Core":{
          "Estimation and Data Analysis": 10,
          "Numerical and combinatorial optimization":15,
          "IP Networks":16,
          "Cryptography":12,
          "PST":0,
          "Virtual Reality":12,
          "System programming and real time":13,
          "Digital Imaging":15
      },
      "Core Program":{
          "Business Culture - Management and Law":15, 
          "Business Culture - Sustainable Development and Business Plan": 12,
          "Project Management": 16,
          "Seminar": 18,
          "Relationship Dynamics": 10,
          "English - New Technology and TOEIC": 20,
          "APIC (Actions to Promote Information and Communication) Optional": 19,
          "2nd foreign language, French for foreigners, reinforced English Optional":20
      }, 
      "Elective Program":{
          "Web Development": 19, 
          "Mobile Development": 20, 
          "Database Management Systems":19,
          "Datamining and applications":16,
          "Introduction to reverse engineering":18,
          "Software Architecture":7,
          "Neural Networks":20,
          "Distributed Programming":10
      }} , 10, "zoblazo09"),
      
    new Student('Robert', 'Bui', 'rbui@et.esiea.fr', 'information system', "01/02/1920", "rue du xxx",  {
      "Technical Common Core":{
          "Estimation and Data Analysis": 10,
          "Numerical and combinatorial optimization":15,
          "IP Networks":16,
          "Cryptography":12,
          "PST":0,
          "Virtual Reality":12,
          "System programming and real time":13,
          "Digital Imaging":15
      },
      "Core Program":{
          "Business Culture - Management and Law":15, 
          "Business Culture - Sustainable Development and Business Plan": 12,
          "Project Management": 16,
          "Seminar": 18,
          "Relationship Dynamics": 10,
          "English - New Technology and TOEIC": 20,
          "APIC (Actions to Promote Information and Communication) Optional": 19,
          "2nd foreign language, French for foreigners, reinforced English Optional":20
      }, 
      "Elective Program":{
          "Web Development": 19, 
          "Mobile Development": 20, 
          "Database Management Systems":19,
          "Datamining and applications":16,
          "Introduction to reverse engineering":18,
          "Software Architecture":7,
          "Neural Networks":20,
          "Distributed Programming":10
      }}, 8, "123soleil"),

      new Student('Beker', 'Bawilu-Mafuta', 'bawilu-mafuta@et.esiea.fr', 'Information System', "04/06/1995", "23 rue du Forain 94000 Vitry-sur-Seine",  {
        "Technical Common Core":{
            "Estimation and Data Analysis": 17,
            "Numerical and combinatorial optimization":10,
            "IP Networks":13,
            "Cryptography":9,
            "PST":15,
            "Virtual Reality":19,
            "System programming and real time":7,
            "Digital Imaging":14
        },
        "Core Program":{
            "Business Culture - Management and Law":13, 
            "Business Culture - Sustainable Development and Business Plan": 12,
            "Project Management": 13,
            "Seminar": 15,
            "Relationship Dynamics": 11,
            "English - New Technology and TOEIC": 18,
            "APIC (Actions to Promote Information and Communication) Optional": 14,
            "2nd foreign language, French for foreigners, reinforced English Optional":13
        }, 
        "Elective Program":{
            "Web Development": 14, 
            "Mobile Development": 15, 
            "Database Management Systems":15,
            "Datamining and applications":18,
            "Introduction to reverse engineering":17,
            "Software Architecture":15,
            "Neural Networks":8,
            "Distributed Programming":15
        }}, 61, "bawilu00"),
      
        new Student('Guillaume', 'Teak', 'teak@et.esiea.fr', 'Information System', "04/06/1996", "23 rue du Sachs 94000 Vitry-sur-Seine",  {
          "Technical Common Core":{
              "Estimation and Data Analysis": 17,
              "Numerical and combinatorial optimization":10,
              "IP Networks":13,
              "Cryptography":9,
              "PST":15,
              "Virtual Reality":19,
              "System programming and real time":9,
              "Digital Imaging":14
          },
          "Core Program":{
              "Business Culture - Management and Law":14, 
              "Business Culture - Sustainable Development and Business Plan": 12,
              "Project Management": 13,
              "Seminar": 15,
              "Relationship Dynamics": 11,
              "English - New Technology and TOEIC": 18,
              "APIC (Actions to Promote Information and Communication) Optional": 14,
              "2nd foreign language, French for foreigners, reinforced English Optional":13
          }, 
          "Elective Program":{
              "Web Development": 14, 
              "Mobile Development": 15, 
              "Database Management Systems":15,
              "Datamining and applications":18,
              "Introduction to reverse engineering":17,
              "Software Architecture":15,
              "Neural Networks":7,
              "Distributed Programming":15
          }}, 40, "teaktonik"),
    ]
  
  collection.insertMany(obj, function(err, res){
      if (err) throw err
      console.log("Number of documents inserted : " + res.insertedCount)
      //console.log("Element inserted " + obj)
  })
  
  client.close();
});

console.log('Successfully connected to the test db.')
