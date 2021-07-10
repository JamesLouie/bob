import cli from 'cli-ux'
import db from '../../utils/db'

const newProjectConfigDialog = async function () {
  const projectName = await cli.prompt('What is the name of your new project?')
  db.projectName = projectName
}

export default newProjectConfigDialog
