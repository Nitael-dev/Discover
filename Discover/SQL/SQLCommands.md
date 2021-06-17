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

# Commands

## INSERT
INSERT INTO Album (Title, ArtistId, Column1) VALUES ("The One!", 2, NULL);

## UPDATE
UPDATE Album SET Title="The Two!", ArtistId=1, Column1="ewqewq" WHERE AlbumId=348;

## DELETE
DELETE FROM Album WHERE AlbumId=348;

## JOIN
SELECT * FROM Album JOIN Artist ON Artist.ArtistId = Album.ArtistId;
SELECT Album.Title, Artist.Name FROM Album JOIN Artist ON Album.ArtistId = Artist.ArtistId;

## JOIN+WHERE
SELECT * FROM Album JOIN Artist ON Album.ArtistId = Artist.ArtistId WHERE Album.ArtistId=16;

## ALIAS / as
SELECT Alb.Title as "Title", Art.Name as "Name" FROM Album as Alb JOIN Artist as Art ON Alb.ArtistId = Art.ArtistId;

## LEFT OUTER JOIN
SELECT * FROM Album LEFT OUTER JOIN Artist ON Album.ArtistId = Artist.ArtistId;

## ORDER BY
SELECT * FROM Album ORDER BY AlbumId ;

## ORDER BY DESC
SELECT * FROM Album ORDER BY AlbumId DESC;

## LIMIT
SELECT * FROM Album LIMIT 1000;

## OFFSET 
SELECT * FROM Album LIMIT 4 OFFSET 5;

## COUNT
SELECT COUNT (Title) FROM Album;

## COUNT+GROUP BY
SELECT Country, COUNT (Country) FROM Customer GROUP BY Country;

## JOIN+GROUP BY+COUNT
SELECT Artist.Name, COUNT (Album.ArtistId) FROM Album
JOIN Artist ON Album.ArtistId = Artist.ArtistId GROUP BY Album.ArtistId ORDER BY Artist.Name;

## HAVING
SELECT Artist.Name, COUNT(Album.ArtistId) FROM Album JOIN Artist ON Album.ArtistId = Artist.ArtistId
GROUP BY Album.ArtistId HAVING COUNT(Album.ArtistId) IN (2);

## CREATE TABLE
CREATE TABLE alunos (
matricula INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT,
  cpf INTEGER UNIQUE,
  responsavel TEXT
)

CREATE TABLE professores (
	id_professor INTEGER PRIMARY KEY AUTOINCREMENT,
  	nome TEXT,
  	cpf INTEGER UNIQUE,
  	materia TEXT
)

CREATE TABLE aulas (
	id_professor INTEGER,
  	matricula INTEGER,
  	FOREIGN KEY(id_professor) REFERENCES professores(id_professor),
  	FOREIGN KEY(matricula) REFERENCES alunos(matricula)
)

## ALTER TABLE
ALTER TABLE aluno RENAME TO alunos; 

ALTER TABLE professor RENAME TO professores;

ALTER TABLE aulas RENAME COLUMN id_aluno TO matricula_aluno;

## DROP TABLE
DROP TABLE alunos;

DROP TABLE aulas;

DROP TABLE professores;


