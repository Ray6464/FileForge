#!/usr/bin/env node
const flags = require('ray-flags');
const {readFileSync, writeFileSync} = require('fs');

/* Sucide Directives
 * If flags.f or flags.o is undefined sucide
 * */

const readEncode = {encoding:'utf8', flag:'r'};

function fileForge(mainContent) { 
	//const mainContent = readFileSync(flags.f, readEncode);
	const filesRequired = mainContent.match(/#include [A-z]*\.[A-z]*/g).map(instruction => instruction.split(" ")[1]);
	const requiredFilesContent = {};
	filesRequired.forEach(x => requiredFilesContent[x] = readFileSync(x, readEncode));
	const parsedContent = mainContent.split("\n").map(line => line.includes("#include") ? requiredFilesContent[line.split(" ")[1]].split("\n"): line).flat().join("\n");
	const finalContent = parsedContent.includes("#include")?fileForge(parsedContent):parsedContent;
	return finalContent;
}


console.log("Reading file: " + flags.o);
const mainFileContent = readFileSync(flags.f, readEncode);
writeFileSync(flags.o, fileForge(mainFileContent));
console.log("Done! Check output in "+ flags.o);


