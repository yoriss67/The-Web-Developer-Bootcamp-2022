CREATE TABLE charts (
    date DATE,
    rank INT AUTO_INCREMENT NOT NULL,
    song VARCHAR(65),
    artist VARCHAR(65),
    last-week INT,
    peak-rank INT,
    weeks-on-board INT,
    PRIMARY KEY(rank)
    );