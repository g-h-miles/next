export const avatarIds: string[] = [];
for (let i = 1; i <= 15; i++) {
  const formattedNumber = i.toString().padStart(2, '0');
  avatarIds.push(formattedNumber);
}
