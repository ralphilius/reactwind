export default function omit<T, K extends keyof T>(o: T, propertyNames: K[]) {
  propertyNames.map((n) => delete o[n]);
}