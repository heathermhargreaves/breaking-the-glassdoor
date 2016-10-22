CREATE TABLE companies
(
  id SERIAL PRIMARY KEY NOT NULL,
  name text
);

CREATE TABLE companyscore
(
  id SERIAL PRIMARY KEY NOT NULL,
  scoreid int references scores (id),
  companyid int references companies (id),
)

CREATE TABLE scores
(
  id SERIAL PRIMARY KEY NOT NULL,
  advancement int,
  support int,
  safety int
);

insert into scores (advancement, support, safety)
values ($1, $2, $3);

insert into scores (advancement, support, safety)
values ($1, $2, $3);
