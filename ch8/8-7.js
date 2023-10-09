export function reportYoungestAgeAndTotalSalary(people) {
  const youngest = Math.min(...people.map(p => p.age));
  const totalSalary = people.reduce(
    (total, person) => (total += person.salary),
    0
  );
  return `youngestAge: ${youngest}, totalSalary: ${totalSalary}`;
}
