import { readFileSync } from "fs";

const WINDOWS_NEWLINE = "\r\n"
const WINDOWS_DOUBLE_NEWLINE = WINDOWS_NEWLINE.repeat(2)

const file = readFileSync(__dirname + "/input.txt", "utf-8")
const data = file.split(WINDOWS_DOUBLE_NEWLINE)

const elves = data.map(inventory => {
    return inventory
        .split(WINDOWS_NEWLINE).map(Number)
        .reduce((calories, meal) => calories += meal, 0)
})

const topThree = elves.sort((a, b) => b - a).slice(0, 3)
const sum = topThree.reduce((calories, meal) => calories += meal, 0)

console.log("most calories: ", sum)