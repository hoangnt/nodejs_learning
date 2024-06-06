# init project

npm init -y
npm install express dotenv cors

# Sequelize

cd ./src
npx sequelize-cli init
npx sequelize db:migrate
