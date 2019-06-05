const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  
  if (node.internal.type === "MarkdownRemark"){
    const slag = path.basename(node.fileAbsolutePath, '.md')
    // console.log(JSON.stringify(node, undefined, 4))
    // console.log('@@@@@@@@@@@@', slag)
    createNodeField({
      node,
      name: 'slag',
      value: slag
    })
  }
}
