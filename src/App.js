import {Component} from 'react'

import GitHubRepos from './components/GitHubRepos'
import './App.css'

class App extends Component {
  state = {
    data: [],
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch(
      'https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc',
      {
        headers: {
          Authorization: 'token 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',
        },
      },
    )

    const data = await response.json()

    const dataDetails = data.items

    this.setState({data: dataDetails})
  }

  render() {
    const {data} = this.state
    console.log(data)
    return (
      <div className="repos-container">
        <h1 className="heading">Most Starred Repos</h1>
        <ul className="repos-list-container">
          {data.map(each => (
            <GitHubRepos each={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
