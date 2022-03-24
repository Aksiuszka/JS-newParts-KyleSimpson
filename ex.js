function upper(strings,...values) {
	let str ='';
	strings.forEach((string, i)=>{
		const valuesUpper = values.map(val=> val.toUpperCase());

			
			str += string + (valuesUpper[i] || "");	
		
	
	});
	return str;
}

var namea = "kyle",
	twitter = "getify",
	topic = "JS Recent Parts";

const say = upper `Hello ${namea}(@ ${twitter}), welcome to ${topic}!` //=== "Hello KYLE (@GETIFY), welcome to JS RECENT PARTS!"

console.log(say);
