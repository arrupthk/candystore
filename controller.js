const CandyStore = require('./CandyStore.js')
const bodyParser = require('body-parser');
function InsertData(req,res)
{
    if(!req.body.name || !req.body.description || !req.body.price || !req.body.quantity)
    {
        console.log("data not received")
return res.status(404).send("request not found")    
    }
    const obj ={
        name : req.body.name,
        description : req.body.description,
        price : req.body.price,
        quantity : req.body.quantity
    }
    CandyStore.create(obj).then(data=>{
        console.log("data received")
        res.redirect('/')

    })

}
    function GetData(req,res)
    {
    CandyStore.findAll()
    .then(data=>{
        res.send(data)
    })
    .catch(error=>{
        res.status(500).send(error);

    })
    }


    function Updatedata(req, res) {
        const id = req.params.id;
        const { quantity } = req.body;
        
        CandyStore.findByPk(id)
          .then(candy => {
            if (!candy) {
              console.log("ID not found");
              res.status(404).send("No ID found to update");
            } else {
              candy.update({ quantity }, { where: { id } })
                .then(updatedData => {
                  console.log("Updated quantity", updatedData);
                  res.send(updatedData);
                  console.log("Quantity updated");
                })
                .catch(error => {
                  res.status(500).send(error);
                });
                console.log("Check if data received or not");
            }
          });
      }

      function DelData(req,res)
      {
        
  const id = req.params.id;
  console.log('Deleting booking with ID:', id);
  CandyStore.findByPk(id)
  .then(candy => {
    if (!candy) {
      return res.status(404).send({ message: 'candy not found' });
    }
    candy.destroy()
    .then(() => {
      res.send({ message: 'candy deleted successfully!' });
    })
    .catch(error => {
      console.error(error);
      res.status(500).send({ message: 'Error deleting candy.' });
    });
  })
  .catch(error => {
    console.error(error);
    res.status(500).send({ message: 'Error finding candy.' });
  });
      }
module.exports = {InsertData, GetData, Updatedata,DelData }
