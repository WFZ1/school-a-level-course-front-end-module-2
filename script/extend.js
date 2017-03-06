function extend(person1, person2) {
	for (var key in person2) {
		person1[key] = person2[key];
	}

	return person1;
}

var person = {
	name: "Иван", 
	age: 17
};

var extendedPerson = extend(person, {surname: "Иванов", fatherName: "Иванович"});
console.log(extendedPerson); //{name: "Иван", age: 17, surname: "Иванов", fatherName: "Иванович"}