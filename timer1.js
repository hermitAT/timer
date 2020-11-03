let args = process.argv.slice(2);

for (let i = 0; i < args.length; i++) {
  if (!args[i] || args[i] < 0 || isNaN(args[i])) {
    i++;
  } else {
    let delay = 1000 * args[i];

    setTimeout(() => {
      process.stdout.write('\x07');
    }, delay);
  }
}