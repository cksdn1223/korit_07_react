import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCars, getCars } from "../api/carapi";
import { DataGrid, GridColDef, GridCellParams } from "@mui/x-data-grid";
import { Button, Snackbar } from "@mui/material";
import { useState } from "react";
import AddCar from "./AddCar";

function Carlist() {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();
  const { isLoading, isSuccess, error, data } = useQuery({
    queryKey: ["cars"],
    queryFn: getCars
  })

  const { mutate } = useMutation(deleteCars, {
    onSuccess: () => {
      setOpen(true);
      queryClient.invalidateQueries({ queryKey: ["cars"] });   // 이 부분은 useQuery() 를 정의한 부분과 관련있습니다.
    },
    onError: err => console.log(err)
  })

  const columns: GridColDef[] = [
    { field: 'brand', headerName: 'Brand', width: 100 },
    { field: 'model', headerName: 'Model', width: 100 },
    { field: 'color', headerName: 'Color', width: 100 },
    { field: 'registrationNumber', headerName: 'Reg.nr', width: 200 },
    { field: 'modelYear', headerName: 'Model Year', width: 130 },
    { field: 'price', headerName: 'Price', width: 130 },
    {
      field: 'delete',
      headerName: '',
      width: 110,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params: GridCellParams) => (
        <Button onClick={() => {
          if (confirm(`${params.row.brand}의 ${params.row.model} 자동차를 삭제하시겠습니까? `)) mutate(params.row._links.self.href);
        }}>
          Delete
        </Button>
      )
    }
  ]

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (!isSuccess) {
    return <span>
      자동차들을 불러오는 데 실패했습니다. <br />
      {error instanceof Error ? error.message : "?Error"}
    </span>
  }
  else {
    return (
      // <table>
      //   <tbody>
      //     {
      //       data.map((car: CarResponse) => 
      //         <tr key={car._links.self.href}>
      //           <td>{car.brand}</td>
      //           <td>{car.model}</td>
      //           <td>{car.color}</td>
      //           <td>{car.registrationNumber}</td>
      //           <td>{car.modelYear}</td>
      //           <td>{car.price}</td>
      //         </tr>
      //       )
      //     }
      //   </tbody>
      // </table>
      <>
        <AddCar />
        <DataGrid
          rows={data}
          columns={columns}
          getRowId={row => row._links.self.href}
        />
        <Snackbar
          open={open}
          autoHideDuration={2000}
          onClose={() => setOpen(false)}
          message='선택한 자동차 정보가 삭제되었습니다'
        />
      </>
    )
  }
}

export default Carlist;