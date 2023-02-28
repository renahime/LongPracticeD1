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

//1.
app.get('/artists', (req, res) => {
  res.json(getAllArtists());
})

//2.
app.post('/artists', (req, res) => {
  const data = addArtist(req.body);
  res.status(201);
  res.json(data);
})

//3.
app.get('/artists/latest', (req,res) => {
  res.json(getLatestArtist());
})

//4.
app.get('/artists/latest/albums', (req,res) => {
  res.json(getAlbumsForLatestArtist());
})

//5.
app.get('/artists/:artistId', (req,res) => {
  res.json(getArtistByArtistId(req.params.artistId));
})

//6a.
app.put('/artists/:artistId', (req,res) => {
  res.json(editArtistByArtistId(req.params.artistId, req.body));
})

//6b.
app.patch('/artists/:artistId', (req,res) => {
  res.json(editArtistByArtistId(req.params.artistId, req.body));
})

//7.
app.delete('/artists/:artistId', (req,res) => {
  deleteArtistByArtistId(req.params.artistId);
  res.json({message: "Successfully deleted"});
})

//8.
app.get('/artists/:artistId/albums', (req, res) => {
  res.json(getAlbumsByArtistId(req.params.artistId));
})

//9.
app.get('/albums/:albumId', (req, res) => {
  res.json(getAlbumByAlbumId(req.params.albumId));
})

//10.
app.post('/artists/:artistId/albums', (req, res) => {
  res.status(201);
  res.json(addAlbumByArtistId(req.params.artistId, req.body));
})

//11.
app.put('/albums/:albumId',(req, res) => {
  res.json(editAlbumByAlbumId(req.params.albumId, req.body));
})

//12.
app.patch('/albums/:albumId',(req, res) => {
  res.json(editAlbumByAlbumId(req.params.albumId, req.body));
})

//13.
app.delete('/albums/:albumId', (req,res) => {
  deleteAlbumByAlbumId(req.params.albumId);
  res.json({message: "Successfully deleted"});
})

//14.
app.get('/albums', (req,res) =>{
  res.json(getFilteredAlbums(req.query.startsWith));
})

//15.
app.get('/songs/:songId', (req,res) => {
  res.json(getSongBySongId(req.params.songId));
})

//16a.
app.post("/albums/:albumId/songs", (req, res)=>{
  res.status(201);
  res.json(addSongByAlbumId(req.params.albumId, req.body));
})

//16b.
app.get("/artists/:artistId/songs", (req,res)=>{
  res.json(getSongsByArtistId(req.params.artistId))
})

//17.
app.get("/albums/:albumId/songs", (req,res)=>{
  res.json(getSongsByAlbumId(req.params.albumId));
})

//18a.
app.put("/songs/:songId", (req,res)=>{
  res.json(editSongBySongId(req.params.songId, req.body))
})

//18b.
app.patch("/songs/:songId", (req,res)=>{
  res.json(editSongBySongId(req.params.songId, req.body))
})

//19.
app.delete("/songs/:songId", (req,res)=>{
  deleteSongBySongId(req.params.songId);
  res.json({message: "Successfully deleted"});
})









// DO NOT MODIFY
if (require.main === module) {
  const port = 8000;
  app.listen(port, () => console.log('Server is listening on port', port));
} else {
  module.exports = app;
}
