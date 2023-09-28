#!/bin/bash
projectname=jwt
echo '# '$projectname > README.md
mkdir src config docs build
touch ./src/$projectname.ts
touch ./config/.env.development
touch ./config/.env.production
touch ./config/.env.test
echo '/node_modules' > .gitignore
echo '/build' >> .gitignore
echo '/config' >> .gitignore
echo '' >> .gitignore
# -- init node project
npm init -y
# -- install dependencies
npm i express 
# npm i bcryptjs jsonwebtoken mongoose dotenv cors morgan helmet ejs
# -- install typescript dependencies
npm i typescript @types/express @types/node ts-node-dev ts-standard -D
# ts-jest @types/express @types/bcryptjs @types/jsonwebtoken @types/cors @types/morgan @types/ejs @types/jest ts-node-dev ts-standard -D
# -- init typescript
npx tsc --init