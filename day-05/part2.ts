import { readFileSync } from "fs";
import { parseStacks, parseSteps, WINDOWS_DOUBLE_NEWLINE } from "./utils";

const file = readFileSync(__dirname + "/input.txt", 'utf-8')
const [rawStacks, rawSteps] = file.split(WINDOWS_DOUBLE_NEWLINE)

const stacks = parseStacks(rawStacks)
const steps = parseSteps(rawSteps)

for (const step of steps) {
    const moveCrate = stacks[step.from].splice(0, step.cratePosition)
    stacks[step.to].unshift(...moveCrate)
}

console.log(stacks.map(stack => stack[0]).join(""))