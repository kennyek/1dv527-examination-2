function getRoot(req, res) {
  console.log(process.env.PORT);
  res.send('GET / works!');
}

module.exports = { getRoot };
