function copy(person1, person2) 
{
	var new_person = {};

	for (var key in person1)
	{
		if (Array.isArray(person1[key]))
			new_person[key] = person1[key].slice();
		else
			new_person[key] = person1[key];
	}

	for (var key in person2)
	{
		if (Array.isArray(person2[key]))
			new_person[key] = person2[key].slice();
		else
			new_person[key] = person2[key];
	}

	return new_person;
}

var person1 = {
	name: "Иван", 
	age: 17
};

var person2 = {
	surname: "Иванов",
	fatherName: "Иванович",
	car: ["BMW", "Audi", "Chevrolet"]
};

var extendedPerson = copy(person1, person2);
console.log(extendedPerson);