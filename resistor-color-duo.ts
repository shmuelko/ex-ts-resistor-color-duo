export function decodedValue(selectedColors: string[]): number {
  const colors: string[] = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

  return Number(`${colors.indexOf(selectedColors[0])}${colors.indexOf(selectedColors[1])}`)
}

//   return 2;
//   integer(colors.indexOf(selected-colors[0])) + integer(colors.indexOf(selected-colors[1]))