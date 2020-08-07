import config from '../../config'

const LogoServices = {
  getTeamLogo(id) {
    return fetch(`https://www-league.nhlstatic.com/images/logos/teams-20182019-light/${id}.svg`, {
      method: 'GET'
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(res.statusText)
        }
        console.log('res', res)
        return res.json()
      })
  }
}