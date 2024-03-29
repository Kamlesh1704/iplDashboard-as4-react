import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    teamBannerImage: '',
    latestMatch: {},
    recentMatches: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const teamBannerUrl = data.team_banner_url

    const latestMatchDetails = data.latest_match_details

    const updatedLatestMatch = {
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      id: latestMatchDetails.id,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
    }

    const recentMatches = data.recent_matches

    const updatedRecentMatchData = recentMatches.map(eachMatch => ({
      umpires: eachMatch.umpires,
      result: eachMatch.result,
      manOfTheMatch: eachMatch.man_of_the_match,
      id: eachMatch.id,
      date: eachMatch.date,
      venue: eachMatch.venue,
      competingTeam: eachMatch.competing_team,
      competingTeamLogo: eachMatch.competing_team_logo,
      firstInnings: eachMatch.first_innings,
      secondInnings: eachMatch.second_innings,
      matchStatus: eachMatch.match_status,
    }))

    this.setState({
      teamBannerImage: teamBannerUrl,
      latestMatch: updatedLatestMatch,
      recentMatches: updatedRecentMatchData,
      isLoading: false,
    })
  }

  render = () => {
    const {teamBannerImage, latestMatch, recentMatches, isLoading} = this.state
    return isLoading ? (
      <div testid="loader">
        {' '}
        <Loader type="Oval" color="black" height={50} width={50} />{' '}
      </div>
    ) : (
      <div className="divvv">
        <img src={teamBannerImage} alt="team banner" className="bannerImg" />

        <p className="latest">Latest Matches</p>
        <div className="latestMatch">
          <LatestMatch matchDetaills={latestMatch} />
        </div>
        <ul className="ull">
          {recentMatches.map(eachMatch => (
            <MatchCard matchDetails={eachMatch} key={eachMatch.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default TeamMatches
