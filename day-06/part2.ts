import { readFileSync } from "fs";

const file = readFileSync(__dirname + "/input.txt", 'utf-8')
const packetSequence = 14;

const detectMarker = () => {
    for (let i = 0; i < file.length; i++) {
        const group = file.slice(i, i + packetSequence)
        if (Array.from(new Set(group)).length === packetSequence) return i + packetSequence
    }
}
console.log(detectMarker())