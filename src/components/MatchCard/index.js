import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeam, competingTeamLogo, matchStatus, result} = matchDetails
  let classes = ''
  if (matchStatus === 'Lost') {
    classes = 'Lost'
  } else {
    classes = 'won'
  }
  return (
    <li className="match-card">
      <img src={competingTeamLogo} alt={`competing team ${competingTeam}`} className="logo" />
      <p className="nameteam">{competingTeam}</p>
      <p className="status">{result}</p>
      <p className={classes}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
