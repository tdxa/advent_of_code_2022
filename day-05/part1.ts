import { readFileSync } from "fs";

const file = readFileSync(__dirname + "/input.txt", 'utf-8')
const WINDOWS_NEWLINE = "\r\n"

interface Step {
    cratePosition: number;
    from: number;
    to: number
}

type Crate = string
type Stack = Crate[]

const [rawStacks, rawSteps] = file.split("\r\n\r\n")

const parseStacks = (rawStacks: string) => {
    const lines = rawStacks.split(WINDOWS_NEWLINE)
    
    return lines.reduce((stack, line) => {        
        for (let i = 0; i < line.length; i = i + 4) {
			const crateId = line[i + 1];
			const stock = stack[i / 4] ?? [];
			if (/[A-Z]/.test(crateId)) {
				stock.push(crateId);
			}
			stack[i / 4] = stock;
		}
		return stack;
    }, [] as Stack[])

}

const parseSteps = (rawSteps: string):Step[]  => {
    const lines = rawSteps.split(WINDOWS_NEWLINE)

    return lines.map(line => {
        const splittedLine = line.split(" ")
        return {
            cratePosition: parseInt(splittedLine[1]),
            from: parseInt(splittedLine[3])-1,
            to: parseInt(splittedLine[5])-1
        }
    })
}

const stacks = parseStacks(rawStacks)
const steps = parseSteps(rawSteps)

for (const step of steps) {
    const moveCrate = stacks[step.from].splice(0, step.cratePosition)
    stacks[step.to].unshift(...moveCrate.reverse())
}

console.log(stacks.map(stack => stack[0]).join(""))