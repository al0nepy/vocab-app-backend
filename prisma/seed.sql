INSERT INTO Level (name) VALUES
  ('Beginner'),
  ('Intermediate'),
  ('Advanced');

INSERT INTO Topic (name, levelId) VALUES
  ('Greetings', 1),
  ('Numbers', 1),
  ('Family', 2),
  ('Food', 2),
  ('Travel', 3),
  ('Business', 3);

INSERT INTO Words (english, translation, image, audio, topicId) VALUES
  ('Hello', 'Hola', 'hello.jpg', 'hello.mp3', 1),
  ('Goodbye', 'Adiós', 'goodbye.jpg', 'goodbye.mp3', 1),
  ('One', 'Uno', 'one.jpg', 'one.mp3', 2),
  ('Two', 'Dos', 'two.jpg', 'two.mp3', 2),
  ('Mother', 'Madre', 'mother.jpg', 'mother.mp3', 3),
  ('Father', 'Padre', 'father.jpg', 'father.mp3', 3),
  ('Pizza', 'Pizza', 'pizza.jpg', 'pizza.mp3', 4),
  ('Salad', 'Ensalada', 'salad.jpg', 'salad.mp3', 4),
  ('Train', 'Tren', 'train.jpg', 'train.mp3', 5),
  ('Airplane', 'Avión', 'airplane.jpg', 'airplane.mp3', 5),
  ('Meeting', 'Reunión', 'meeting.jpg', 'meeting.mp3', 6),
  ('Negotiation', 'Negociación', 'negotiation.jpg', 'negotiation.mp3', 6);
