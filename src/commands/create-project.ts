import {Command} from '@oclif/command'
import introDialog from '../features/common/intro-dialog'
import newProjectConfigDialog from '../features/common/new-project-config-dialog'
import authenticationDialog from '../features/github/authentication-dialog'
import createRepoDialog from '../features/github/create-repo-dialog'
// import pullRepoDialog from '../features/github/clone-repo-dialog'

export class CreateProjectCommand extends Command {
  async run() {
    introDialog()
    await newProjectConfigDialog()
    await authenticationDialog()
    await createRepoDialog()
    // await pullRepoDialog()
  }
}
