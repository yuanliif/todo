const express = require('express')
const exphbs = require('express-handlebars')
// const mongoose = require('mongoose')
// 取得資料庫連線狀態
// const db = mongoose.connection
const port = '3000'

const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const routes = require('./routes')
// const Todo = require('./models/todo')
require('./config/mongoose')

const app = express()
// 這行程式碼擺放的順序需要在所有路由設定之前
app.use(bodyParser.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use(routes)

// mongoose.connect('mongodb://localhost/todo-list')

// db.on('error', () => {
//   console.log('mongodb error')
// })
// db.once('open', () => {
//   console.log('mongodb connected')
// })

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')



// 顯示出整份database
// app.get('/', (req, res) => {
//   Todo.find()
//     .lean()
//     .sort({ _id: 'asc' }) //desc
//     .then(todos => res.render('index', { todos }))
//     .catch(error => console.error(error))
// })

// create data
// app.get('/todos/new', (req, res) => {
//   return res.render('new')
// })
// app.post('/todos', (req, res) => {
//   const name = req.body.name
//   return Todo.create({ name })
//     .then(() => res.redirect('/'))
//     .catch(error => console.error(error))
// })
// // detail
// app.get('/todos/:id', (req, res) => {
//   const id = req.params.id
//   return Todo.findById(id)
//     .lean()
//     .then((todo => res.render('detail', { todo })))
//     .catch(error => console.error(error))
// })
// // edit
// app.get('/todos/:id/edit', (req, res) => {
//   const id = req.params.id
//   return Todo.findById(id)
//     .lean()
//     .then((todo) => res.render('edit', { todo }))
//     .catch(error => console.error(error))
// })
// // edit: modthod-override
// app.put('/todos/:id', (req, res) => {
//   const id = req.params.id
//   // const name = req.body.name
//   // const isDone = req.body.isDone
//   const { name, isDone } = req.body
//   return Todo.findById(id)
//     .then((todo) => {
//       todo.name = name
//       todo.isDone = isDone === 'on'
//       return todo.save()
//     })
//     .then(() => res.redirect(`/todos/${id}`))
//     .catch(error => console.error(error))
// })
// // delete
// app.delete('/todos/:id', (req, res) => {
//   const id = req.params.id
//   return Todo.findById(id)
//     .then(todo => todo.remove())
//     .then(() => res.redirect('/'))
//     .catch(error => console.error(error))
// })

app.listen(port, () => {
  console.log('this is running on http://localhost:3000')
})

