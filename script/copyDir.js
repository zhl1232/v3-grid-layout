const child_process = require('child_process')

const copyDir = (src, dist) => {
  // eslint-disable-next-line no-sparse-arrays
  child_process.spawn('cp', ['-r', , src, dist])
}

copyDir('./packages', './docs')
