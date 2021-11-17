// 載入 todo model
const Todo = require('../todo')
const db = require('../../config/mongoose')
// 取得資料庫連線狀態
db.once('open', () => {
  for (let i = 0; i < 10; i++) {
    Todo.create({ name: 'name-' + i})
  }
  console.log('done')
})