import cli from 'cli-ux'
import os from '../../utils/os'

const cloneRepoDialog = async function () {
  const templateSourceUrl = await cli.prompt('What is the template repo you would like to pull from?')
  cli.action.start('Pulling repo...')
  const consoleOut = await os.executeShellCommand(`git clone ${templateSourceUrl} --depth 1`)
  cli.action.stop('Completed pulling repo...')
  cli.log(consoleOut)
}

export default cloneRepoDialog
