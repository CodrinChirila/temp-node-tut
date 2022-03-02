let boolean = true; 
const codrin = {
	nume: "Codrin",
	age: 16,
	height: 177
}

// setInterval(() => {
// 	if (boolean == true) {
// 		console.log(codrin);
// 		boolean = false;
// 	} else {
// 		console.log(codrin.age);
// 		boolean = true
// 	}
// }, 1000)


setInterval(() => {
	const {nume, ...rest} = codrin;
	boolean ? console.log(codrin) : console.log(rest);
	boolean = !boolean
}, 1000)