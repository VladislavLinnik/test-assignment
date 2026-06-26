export function isUnder18(birthDate: Date) {
  const today = new Date();
  const age18Date = new Date(birthDate);
  age18Date.setFullYear(age18Date.getFullYear() + 18);

  return age18Date > today;
}
