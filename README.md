# init project

npm init -y
npm install express dotenv cors nodemon
npm install --save sequelize
npm install --save mysql2
npm install --save-dev @babel/core @babel/preset-env @babel/node

# Sequelize

cd ./src
npx sequelize-cli init
npx sequelize db:migrate
