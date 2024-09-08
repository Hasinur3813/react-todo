export function shortId(length = 8) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let id = "";

  for (let i = 0; i < length; i++) {
    let randomCharecter = characters.charAt(
      Math.floor(Math.random() * characters.length)
    );

    id += randomCharecter;
  }

  return id;
}
