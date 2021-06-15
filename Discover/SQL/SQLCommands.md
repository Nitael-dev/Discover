# Operadores Lógicos

SELECT * FROM Album;

## AND
SELECT * FROM Album WHERE AlbumId > 300 AND AlbumId <= 320;

## OR
SELECT * FROM Album WHERE AlbumId > 320 OR Title = "Mozart: Symphonies Nos. 40 & 41"

## BETWEEN + AND
SELECT * FROM Album WHERE AlbumId BETWEEN 250 and 300;

## IN / NOT IN
SELECT * FROM Album WHERE ArtistId NOT IN (1, 2, 3, 12, 6);

## 
