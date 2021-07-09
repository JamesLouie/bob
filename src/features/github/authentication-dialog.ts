import cli from 'cli-ux'
import db from '../../utils/db'

const dialog = async function () {
  cli.log('We will need to collect some information to authenticate you...')

  const username = await cli.prompt('What is your username?')
  const accessToken = await cli.prompt('What is your access token?', {type: 'hide'})
  db.username = username
  db.accessToken = accessToken
}

export default dialog
