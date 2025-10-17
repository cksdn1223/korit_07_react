import axios from 'axios';
import './App.css'
import { useState } from 'react';

type Repository = {
  id: number
  full_name: string
  html_url: string
  owner: {login: string}
}

function App() {
  const [keyword, setKeyword] = useState('');
  const [repodata, setRepodata] = useState<Repository[]>([]);

  const handleClick = () => {
    axios.get<{items : Repository[]}>(`https://api.github.com/search/repositories?q=${keyword}`)
    .then(response => setRepodata(response.data.items))
    .catch(error => console.log(error))
  }

  return (
    <>
      <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      <button onClick={handleClick}>Search</button>
      {repodata.length === 0 ? (
        <p>No data available</p>
      ) : (
        <table>
          <tbody>
            {
              repodata.map(repo => 
                <tr key={repo.id}>
                  <td>{repo.full_name}</td>
                  <td><a href={repo.html_url}>{repo.owner.login}</a></td>
                </tr>
              )
            }
          </tbody>
        </table>
      )}
    </>
  )
}

export default App