//ex1
function upper(strings,...values) {
	let str ='';
	strings.forEach((string, i)=>{
		const valuesUpper = values.map(val=> val.toUpperCase());
			str += string + (valuesUpper[i] || "");	
	});
	return str;
}

const namea = "kyle",
	twitter = "getify",
	topic = "JS Recent Parts";

const say = upper `Hello ${namea}(@ ${twitter}), welcome to ${topic}!`

console.log(say);

// object destructuring

function data(){
	return{
		a:1, b:2, c:3, d:4, f:5, g:6
	};
}
const {
	a:first,
	b:second,
	c: third
} = data();

// object rest
const {
	d:fourth,
	...fifth // all next are gathered into fifth (f &g)
} = data();
function data2(){
	return{
		aa:1, bb:2, cc:3, dd:4, ff:5, gg:6
	};
}
let one, two;
({
	aa:one,
	bb:two,
}) = data2();