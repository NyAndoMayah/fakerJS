import { faker } from '@faker-js/faker';
import * as fs from 'fs';
export let request = "INSERT INTO account (first_name, last_name, nickname, birthday, gender, email, profile_pic) VALUES \n"
const gender = "FM"

for(let i = 1 ; i <= 250000; i++){
let firstName = faker.name.firstName();
let lastName = faker.name.lastName();
let nickname = faker.internet.userName(firstName);
let birthday = faker.date.betweens('1960-01-01', '2030-01-01',1)[0].toISOString().slice(0,10);
let email = faker.internet.email(firstName);
    if(i == 250000) request += "('"+firstName+"','"+lastName+"','"+nickname+"','"+gender[Math.floor(Math.random() * (1))]+"','"+birthday.slice(0,11)+"','"+email+"','"+firstName.slice(0,5)+".png');"
    else request += "('"+firstName+"','"+lastName+"','"+nickname+"','"+gender[Math.floor(Math.random() * (1))]+"','"+birthday+"','"+email+"','"+firstName.slice(0,5)+".png'),\n"
}
fs.writeFile('anotherMock.sql',request,(error) => {
    if(error){
        console.log(error)
    }
    else console.log("INSERTS DONE")
})
