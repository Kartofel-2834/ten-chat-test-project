export default async function sleep(delay = 0) {
  return new Promise((res) => setTimeout(res, delay));
}
