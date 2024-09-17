import path from "node:path";
import fs from "node:fs";
import { log, error } from "node:console";
import random from "generate-random-data"

const __dirname = import.meta.dirname;
const my_dir = path.join(__dirname, "files");
const my_file = path.join(my_dir, "data.txt");
let buffer = "";

//Задача 1
/*buffer = Buffer.from('Hello, Node.js!');
log(buffer.toString());

fs.writeFile(my_file, buffer, (err) => {
    if (err){
        return error('Помилка запису даних:', err);
    }
    log('Дані з буферу записано у файл');
});*/

//Задача 2
const randomData = random.sentence(5, 10);
buffer = Buffer.from(randomData, 'utf-8');

fs.writeFile(my_file, buffer, (err) => {
    if (err){
        return error('Помилка запису даних:', err);
    }
    log('Дані з буферу записано у файл');
})

const data = fs.readFile(my_file);
log(data.toString());

//Задача 3
/*const str = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque reprehenderit non quia omnis sint tempora consequatur, quod illum earum placeat dolores voluptas quidem eos in facere nulla nesciunt nisi eligendi.';
buffer = Buffer.from(str, 'utf-8');
log(buffer);

const bufferToString = buffer.toString();
log(bufferToString);*/

//Задача 4
/*const buf1 = Buffer.from('Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque reprehenderit non quia omnis sint tempora consequatur,');
const buf2 = Buffer.from(' quod illum earum placeat dolores voluptas quidem eos in facere nulla nesciunt nisi eligendi.');

buffer = Buffer.concat([buf1, buf2]);

fs.writeFile(my_file, buffer, (error) => {
    if (error){
        return error('Помилка запису даних:', error);
    }
    log('Дані з буферу записано у файл');
})*/