class Host {
  greet(name) {
    if (name) {
      return `Hello ${name}`;
    }
    return 'Hello Stranger';
  }

  farewell(name) {
    if (name) {
      return `Goodbye ${name}`;
    }
    return 'Goodbye Stranger';
  }
}

module.exports = Host;
