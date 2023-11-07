import './index.css'

const GitHubRepos = props => {
  const {each} = props
  const {owner} = each

  return (
    <li className='list-card'>
      <img className='avatar' src={owner.avatar_url} alt='avatar' />
      <div className='repository-details-container'>
        <h1 className='repository-name'>{each.full_name}</h1>
        <p className='repository-description'>{each.description}</p>
        <div className='repository-count-container'>
          <p className='count'>stars</p>
          <p className='count'> issues : {each.open_issues_count}</p>
          <p className='published-time'>
            last pushed {each.name} by {}
          </p>
        </div>
      </div>
    </li>
  )
}

export default GitHubRepos
