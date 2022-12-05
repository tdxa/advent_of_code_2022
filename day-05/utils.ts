export const WINDOWS_NEWLINE = "\r\n"
export const WINDOWS_DOUBLE_NEWLINE = WINDOWS_NEWLINE.repeat(2)

export interface Step {
    cratePosition: number;
    from: number;
    to: number
}

export type Crate = string
export type Stack = Crate[]


export const parseStacks = (rawStacks: string) => {
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

export const parseSteps = (rawSteps: string):Step[]  => {
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