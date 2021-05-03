import mongodb from 'mongodb'

const { MongoClient } = mongodb
export default function handler(req, res) {
  MongoClient.connect(process.env.DB,{ useUnifiedTopology: true },(err,db)=>{
    if (err) throw err
    const dbase = db.db('chat')
    ;(async ()=>{
      await dbase
        .collection('note')
        .find()
        .toArray((e,result)=>{
          if(e) throw e
          console.log('res',result)
          res.status(200).json({ list:result })
        })
    })()
  })
}