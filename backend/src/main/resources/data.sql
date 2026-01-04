delete
from todo;

insert into todo (id, title, description, created, done)
values (1, 'Test1', 'This is test todo number 1', '2026-01-03T17:23:19', false);

SELECT setval('todo_id_seq', (SELECT MAX(id) FROM todo));