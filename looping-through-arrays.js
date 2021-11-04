const pets = ['cat', 'dog', 'rat'];

for (const [i] of pets.entries()) {
  pets[i] += 's';
}

console.log(pets);
