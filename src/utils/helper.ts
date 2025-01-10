const camelToSnakeCase = (string: string) => string.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);

export { camelToSnakeCase };