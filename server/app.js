// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();

// Your code here
app.use(express.json()); //always need this

app.get('/artists', (req, res) => {
  res.json(getAllArtists());
})

app.post('/artists', (req, res) => {
  const data = addArtist(req.body);
  res.status(201);
  res.json(data);
})

app.get('/artists/latest', (req,res) => {
  res.json(getLatestArtist());
})


app.get('/artists/latest/albums', (req,res) => {
  res.json(getAlbumsForLatestArtist());
})

app.get('/artists/:artistId', (req,res) => {
  res.json(getArtistByArtistId(req.params.artistId));
})

app.put('/artists/:artistId', (req,res) => {
  res.json(editArtistByArtistId(req.params.artistId, req.body));
})

app.patch('/artists/:artistId', (req,res) => {
  res.json(editArtistByArtistId(req.params.artistId, req.body));
})

app.delete('/artists/:artistId', (req,res) => {
  deleteArtistByArtistId(req.params.artistId);
  res.json({message: "Successfully deleted"});
})

app.get('/artists/:artistId/albums', (req, res) => {
  res.json(getAlbumsByArtistId(req.params.artistId));
})

app.get('/albums/:albumId', (req, res) => {
  res.json(getAlbumByAlbumId(req.params.albumId));
})

app.post('/artists/:artistId/albums', (req, res) => {
  res.status(201);
  res.json(addAlbumByArtistId(req.params.artistId, req.body));
})

app.put('/albums/:albumId',(req, res) => {
  res.json(editAlbumByAlbumId(req.params.albumId, req.body));
})

app.patch('/albums/:albumId',(req, res) => {
  res.json(editAlbumByAlbumId(req.params.albumId, req.body));
})

app.delete('/albums/:albumId', (req,res) => {
  deleteAlbumByAlbumId(req.params.albumId);
  res.json({message: "Successfully deleted"});
})

app.get('/albums', (req,res) =>{
  res.json(getFilteredAlbums(req.query.startsWith));
})

app.get('/songs/:songId', (req,res) => {
  res.json(getSongBySongId(req.params.songId));
})








// DO NOT MODIFY
if (require.main === module) {
  const port = 8000;
  app.listen(port, () => console.log('Server is listening on port', port));
} else {
  module.exports = app;
}
