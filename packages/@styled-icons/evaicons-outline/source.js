const fg = require('fast-glob')
const fs = require('fs-extra')
const path = require('path')

module.exports = async () => {
  const baseDir = path.dirname(require.resolve('eva-icons/package.json'))
  const sourceFiles = await fg(path.join(baseDir, 'outline/svg/*.svg'))

  return sourceFiles.map(filename => {
    const match = filename.match(/([^\/]+)\.svg$/)
    return {
      originalName: match[1],
      source: fs.readFileSync(filename).toString(),
      pack: 'evaicons-outline',
      width: '20',
      height: '20',
    }
  })
}