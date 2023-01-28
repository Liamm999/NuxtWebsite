export default defineEventHandler(async (event) => {
  // // querry param
  // const { name } = getQuery(event);

  // // querry body data
  // const { age } = await readBody(event)

  // call api with private key
  const data = await $fetch(
    "https://api.currencyapi.com/v3/latest?apikey=aEYWW6Q4AkzOunFiOr4yv4itlD9BMvMXmmGU6UQm"
  );

  return data;
});
