# init project

npm init -y
npm install express dotenv cors nodemon
npm install --save sequelize
npm install --save mysql2
npm install --save-dev @babel/core @babel/preset-env @babel/node

# Sequelize: after create ./src/database, all sequelize command need to stand in ./src/database

cd ./src
mkdir database
cd ./database
npx sequelize-cli init
npx sequelize db:migrate
