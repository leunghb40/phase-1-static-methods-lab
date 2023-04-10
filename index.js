class Formatter {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9-' ]/g, '')
  }

  static titleize(str) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    return str.split(' ').map((word, index) => {
      if (index === 0 || !exceptions.includes(word)) {
        return this.capitalize(word)
      } else {
        return word
      }
    }).join(' ')
  }
}
