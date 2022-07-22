

const express=require('express')      
const app=express()	


const  port = 3000

app.get('/',(req,res)=>(res.send('Hello express d-clic pour évaluation')))
app.listen(port, () => console.log( 'notre application Node est démarrée sur : http://localhost : ' + port ))

// Api pour ouvrir index
app.use(express.static(__dirname, ''))
app.get('/index', (req, res) => {
        res.sendFile(__dirname + '/index.html')
}
)

// Api pour ouvrir service
app.use(express.static(__dirname, ''))
app.get('/service', (req, res) => {
        res.sendFile(__dirname + '/service.html')
}
)

// Api pour ouvrir produit
app.use(express.static(__dirname, ''))
app.get('/produit', (req, res) => {
        res.sendFile(__dirname + '/produit.html')
}
)

// Api pour ouvrir contact
app.use(express.static(__dirname, ''))
app.get('/contact', (req, res) => {
        res.sendFile(__dirname + '/contact.html')
}
)