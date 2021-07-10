const util = require('util')
const exec = util.promisify(require('child_process').exec)

const executeShellCommand = async function (cmd: string) {
  const {stdout} = await exec(cmd)
  return stdout
}

export default {
  executeShellCommand,
}
