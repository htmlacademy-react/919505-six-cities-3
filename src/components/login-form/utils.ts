export function validatePassword(password: string) {
  const regExp = /^(?=.*[a-zA-Z])(?=.*\d).+$/;
  return regExp.test(String(password));
}
