import cli from 'cli-ux'
import axios from 'axios'
import db from '../../utils/db'

const createRepoDialog = async function () {
  cli.action.start('Creating github repo...')

  const createResponse = await axios.post('https://api.github.com/user/repos', {
    name: db.projectName,
    auto_init: true,
    private: true,
    gitignore_template: 'nanoc',
  }, {
    headers: {
      Authorization: `token ${db.accessToken}`,
    },
  })
  cli.log(JSON.stringify(createResponse.data))

  cli.action.stop('Github repo successfully created...')
}

export default createRepoDialog
