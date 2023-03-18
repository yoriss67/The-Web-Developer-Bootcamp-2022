CREATE TABLE charts (
    date DATE,
    rank  AUTO_INCREMENT NOT NULL,
    song,
    artist,
    last-week INT,
    peak-rank INT,
    weeks-on-board INT,
    PRIMARY KEY(rank)
    );