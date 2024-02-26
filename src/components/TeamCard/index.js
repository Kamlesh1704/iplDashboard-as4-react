import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {teamImageUrl, name, id} = teamDetails

  return (
    <Link to={`/team-matches/${id}`} className="link">
      <li className="li">
        <img src={teamImageUrl} className="img" alt={name} />
        <p className="teamname">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
