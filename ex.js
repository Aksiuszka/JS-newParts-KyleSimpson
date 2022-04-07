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
// let one, two
// ({
// 	aa:one,
// 	bb:two,
// }) = data2();

// nested object destructuring

function destructeddATA(){
	return {
		a1:1,
	b1:{
		c1:3,
		d1:4
	}
	};
}
const{
	a,
	b:{
		c,
		d
	} ={} //default
} = destructeddATA()||{};

// var defaults = {
// 	topic: "JavaScript",
// 	format: "Live",
// 	slides: {
// 		start: 0,
// 		end: 100
// 	}
// };

fakeAjax("http://get-the-workshop.tld",handleResponse);


// *******************************************************


function handleResponse(
	{
		topic= "Javascript",
		format= "Live",
		slides:{
			start=0,
			end=100
		}={}
	} ={}
) {

	TestCase({
		topic, format, slides:{
			start, end
		}
	});

}

function TestCase(data) {
	console.log(
		data.topic == "JS Recent Parts" &&
		data.format == "Live" &&
		data.slides.start === 0 &&
		data.slides.end == 77
	);
}


// *******************************************************


function fakeAjax(url,cb) {
	// fake ajax response:
	cb({
		topic: "JS Recent Parts",
		slides: {
			end: 77
		}
	});
}
const string ="jestem sobie tekstem"
const iterator = [...string];
console.log(iterator);
for(v of string){
	console.log(v);
}

function* infinite() {
    let index = 0;

    while (index<101) {
        yield index++;
    }
}
const numbery = infinite();
// should print 0..100 by 1s

//or
const numbers = {
	*[Symbol.iterator]({
		start = 0,
		stop = 100,
		step = 1,
	} = {}) {
		for (let num = start; num <= stop; num += step) {
			yield num;
		}
	}
};
for (let num of numbers) {
	console.log(num);
}

// should print 6..30 by 4s
console.log(
	`My lucky numbers are: ${
	[...numbers[Symbol.iterator]({
		start: 6,
		stop: 30,
		step: 4,
	})]}`
);
