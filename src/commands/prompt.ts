import {Command} from '@oclif/command'
import introDialog from '../features/common/common-dialog'
// import cli from 'cli-ux'
import authenticationDialog from '../features/github/authentication-dialog'

export class MyCommand extends Command {
  async run() {
    introDialog()
    await authenticationDialog()
  }
}
