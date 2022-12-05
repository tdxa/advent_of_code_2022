import { readFileSync } from "fs";

const WINDOWS_NEWLINE = "\r\n"
const WINDOWS_DOUBLE_NEWLINE = WINDOWS_NEWLINE.repeat(2)

const file = readFileSync(__dirname + "/input.txt", "utf-8")
const data = file.split(WINDOWS_DOUBLE_NEWLINE)

let most = 0
data.forEach(inventory => {
    const calories = inventory
        .split(WINDOWS_NEWLINE).map(Number)
        .reduce((calories, meal) => calories += meal, 0)

    if (most < calories) most = calories
})

console.log("most calories: ", most)