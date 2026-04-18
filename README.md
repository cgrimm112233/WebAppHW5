cd into my-app
run "npm install" (if modules are missing wwhn you run, run "npm install prisma tsx @ types/pg --save-dev" and/or "npm install @prisma/client @prisma/adapter-pg dotenv pg")
run "npx create-db"
run "npm run db:generate" (if this fails, migrate)*
run "npm run db:seed"
run "npm run dev"


*"npm run db:migrate" or "npx prisma migrate dev --name {migrationName}" to migrate