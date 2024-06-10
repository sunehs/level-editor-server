const LevelEditorServer = require('./level-editor-server.js')
const server = new LevelEditorServer({
  port: 3009
})
server.start()
