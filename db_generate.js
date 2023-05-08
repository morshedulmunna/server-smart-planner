// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');

const dirs = [
  '../web-view/src/types/prisma.d.ts',

  '../server-smart-planner/src/types/prisma.d.ts',
];

for (const dir of dirs) {
  console.log(dir);
  fs.rmSync(dir, { force: true });

  fs.cpSync('./prisma/generated/index.d.ts', dir, {
    force: true,
  });
}
