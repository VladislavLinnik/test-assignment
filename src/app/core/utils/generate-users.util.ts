import { User } from '@features/users/models/user.model';

const FIRST_NAMES = ['James', 'Emma', 'Liam', 'Olivia', 'Noah', 'Ava', 'William', 'Sophia'];
const LAST_NAMES = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller'];

export function generateUsers(): User[] {
  return Array.from({ length: 2000 }, (_, i) => ({
    id: i,
    firstName: FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)],
    lastName: LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)],
    dateOfBirth: randomDate(new Date(1960, 0, 1), new Date(2020, 0, 1)),
    phone: `+1${Math.floor(1_000_000_000 + Math.random() * 9_000_000_000)}`,
    isActive: Math.random() > 0.5,
  }));
}

function randomDate(start: Date, end: Date): Date {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
