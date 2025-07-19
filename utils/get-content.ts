function getContent(file: string) {
  const content = Deno.readFile(file).then((content) => content);

  console.log(content);

  return file;
}

export { getContent };
