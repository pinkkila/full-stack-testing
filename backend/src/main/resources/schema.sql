drop table if exists todo;

create table if not exists todo
(
    id          bigserial primary key,
    title       text      not null,
    description text      not null,
    created     timestamp not null,
    completed   boolean
);