const LevelEditorServer = require('./level-editor-server.js')
const server = new LevelEditorServer({
  port: process.env.PORT || 3009
})
server.start()
