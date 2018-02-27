module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-fridge',
      options: {
        token: process.env.TOKEN
      }
    }
  ]
}
