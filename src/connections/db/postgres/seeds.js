'use strict'
const db = require('./db').db

module.exports = async () => {
  await db.Categories.create(
    {
      Title: "Programing"
    }
  )

  let comment = await db.Comments.create(
    {
      Content: "Padre",
      IdCategory: 1
    }
  )

  let commentH1 = await db.Comments.create(
    {
      Content: "Hijo 1"
    }
  )

  let commentH2 = await db.Comments.create(
    {
      Content: "Hijo 2"
    }
  )

  let commentH2H = await db.Comments.create(
    {
      Content: "Hijo, del Hijo 2"
    }
  )

  await comment.addReplies(commentH1)
  await comment.addReplies(commentH2)
  await commentH2.addReplies(commentH2H)
}
