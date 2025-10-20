import axios from 'axios';
import './App.css'
import { useState } from 'react';
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { ColDef, ICellEditorParams } from 'ag-grid-community';

type Repository = {
  id: number
  full_name: string
  html_url: string
  owner: {
    login: string
  }
}
// const linkRenderer = (params) => {
//   if (params.value) {
//     return (
//       // <a> 태그를 사용하여 링크를 만듭니다. target="_blank"로 새 창에서 열리게 합니다.
//       <a href={params.value} target="_blank" rel="noopener noreferrer">
//         링크 이동
//       </a>
//     );
//   }
//   return null;
// };
function App() {
  const [keyword, setKeyword] = useState('');
  const [repodata, setRepodata] = useState<Repository[]>([]);
  const [ columnDefs ] = useState<ColDef[]>([
    {field: 'owner.login', sortable: true, filter: true},
    {field: 'full_name', sortable: true, filter: true},
    {field: 'html_url', sortable: true, filter: false/* cellRenderer: linkRenderer*/},
    {
      field: 'full_name',
      headerName: 'Actions',
      cellRenderer: (params: ICellEditorParams) => (
        <button
          onClick={()=> alert(params.value)}
        >
          Press Me ! 😊
        </button>
      )
    }
  ]);


  const handleClick = () => {
    axios.get<{items : Repository[]}>(`https://api.github.com/search/repositories?q=${keyword}`)
    .then(response => setRepodata(response.data.items))
    .catch(error => console.log(error))
  }

  return (
    <div className='App'>
      <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder='Search'/>
      <button onClick={handleClick}>Search</button>
      <div className='ag-theme-material' style={{height: 500, width: 850}}>
        <AgGridReact
          columnDefs={columnDefs}
          rowData={repodata}
          paginationPageSize={7}
        />
      </div>
    </div>
  )
}

export default App