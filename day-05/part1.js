"use strict";
var _a;
exports.__esModule = true;
var fs_1 = require("fs");
var file = (0, fs_1.readFileSync)(__dirname + "/input.txt", 'utf-8');
var WINDOWS_NEWLINE = "\r\n";
var _b = file.split("\r\n\r\n"), rawStacks = _b[0], rawSteps = _b[1];
var parseStacks = function (rawStacks) {
    var lines = rawStacks.split(WINDOWS_NEWLINE);
    return lines.reduce(function (stack, line) {
        var _a;
        for (var i = 0; i < line.length; i = i + 4) {
            var crateId = line[i + 1];
            var stock = (_a = stack[i / 4]) !== null && _a !== void 0 ? _a : [];
            if (/[A-Z]/.test(crateId)) {
                stock.push(crateId);
            }
            stack[i / 4] = stock;
        }
        return stack;
    }, []);
};
var parseSteps = function (rawSteps) {
    var lines = rawSteps.split(WINDOWS_NEWLINE);
    return lines.map(function (line) {
        var splittedLine = line.split(" ");
        return {
            cratePosition: parseInt(splittedLine[1]),
            from: parseInt(splittedLine[3]) - 1,
            to: parseInt(splittedLine[5]) - 1
        };
    });
};
var stacks = parseStacks(rawStacks);
var steps = parseSteps(rawSteps);
for (var _i = 0, steps_1 = steps; _i < steps_1.length; _i++) {
    var step = steps_1[_i];
    var moveCrate = stacks[step.from].splice(0, step.cratePosition);
    (_a = stacks[step.to]).unshift.apply(_a, moveCrate.reverse());
}
console.log(stacks.map(function (stack) { return stack[0]; }).join(""));
