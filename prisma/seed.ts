import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const sqlLevels = Prisma.raw(`
  INSERT INTO "Level" (name)
  VALUES('Beginner'), ('Intermediate'), ('Advanced');
  `);
  const sqlTopics = Prisma.raw(`
  INSERT INTO "Topic" (name, "levelId")
		VALUES('Greetings', 1), ('Numbers', 1), ('Family', 2), ('Travel', 2), ('Work', 3), ('Science', 3);
  `);
  const sqlWords = Prisma.raw(`
  INSERT INTO "Words" ("english", "translation", "image", "audio", "topicId")
  VALUES('Hello', 'Hola', 'hello.jpg', 'hello.mp3', 1), ('Goodbye', 'Adiós', 'goodbye.jpg', 'goodbye.mp3', 1), ('One', 'Uno', 'one.jpg', 'one.mp3', 2), ('Two', 'Dos', 'two.jpg', 'two.mp3', 2), ('Mother', 'Madre', 'mother.jpg', 'mother.mp3', 3), ('Father', 'Padre', 'father.jpg', 'father.mp3', 3), ('Plane', 'Avión', 'plane.jpg', 'plane.mp3', 4), ('Train', 'Tren', 'train.jpg', 'train.mp3', 4), ('Meeting', 'Reunión', 'meeting.jpg', 'meeting.mp3', 5), ('Presentation', 'Presentación', 'presentation.jpg', 'presentation.mp3', 5), ('Chemistry', 'Química', 'chemistry.jpg', 'chemistry.mp3', 6), ('Physics', 'Física', 'physics.jpg', 'physics.mp3', 6);
  `);

  await prisma.$executeRaw(sqlLevels).then(async () => {
    await prisma.$executeRaw(sqlTopics).then(async () => {
      await prisma.$executeRaw(sqlWords);
    });
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
