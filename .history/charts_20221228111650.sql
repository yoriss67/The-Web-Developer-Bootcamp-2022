CREATE TABLE charts (
    date DATE,
    rank INT AUTO_INCREMENT NOT NULL,
    song VARCHAR(65),
    artist VARCHAR(),
    last-week INT,
    peak-rank INT,
    weeks-on-board INT,
    PRIMARY KEY(rank)
    );