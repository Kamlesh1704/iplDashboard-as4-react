import './index.css'

const LatestMatch = props => {
  const {matchDetaills} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    id,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = matchDetaills
  console.log(matchDetaills)
  return (
    <div className="divv">
      <div className="div1">
        <p className="competing-team">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="venue">{venue}</p>
        <p className="venue">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="imgg"
      />
      <div className="div2">
        <p className="first">First Innings</p>
        <p className="innings">{firstInnings}</p>
        <p className="first">Second Innings</p>
        <p className="innings">{secondInnings}</p>
        <p className="first">Man Of The Match</p>
        <p className="innings">{manOfTheMatch}</p>
        <p className="first">Umpires</p>
        <p className="innings">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
