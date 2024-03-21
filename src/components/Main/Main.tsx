import styles from './Main.module.scss'
import { SetStateAction, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import { fetchFiles } from '../../redux/fetchFiles/action'
import { FilesState } from '../../redux/fetchFiles/reducer'
import { delPathUrl } from '../../redux/pathUrl/reducer'
import { setPath } from '../../redux/setPath/reducer'
import ButtonModul from '../ButtonModul/ButtonModul'
import ShowContent from '../ShowContent/ShowContent'
import Paper from '@mui/material/Paper'
import { Box, Breadcrumbs, Link, Table, TableBody, TablePagination } from '@mui/material'
import { TableHeader } from '../TableHeader/TableHeader'
import { TreeView, TreeItem } from '@material-ui/lab/'


const Main = () => {
  const update = useAppSelector(state => state.updateFilesReducer.update)
  const filesState: FilesState = useAppSelector(state => state.fetchReducer)
  const files = filesState.files
  const url = useAppSelector(state => state.pathUrlReducer.url)
  const path = useAppSelector(state => state.setPathReducer.path)
  const dispatch = useAppDispatch()
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  useEffect(() => {
    dispatch(fetchFiles(path))
  }, [path, update])



  function handleDelPath(path: string) {
    dispatch(setPath(path))
    dispatch(delPathUrl(path.length))
  }



  const handleChangePage = (event: any, newPage: SetStateAction<number>) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: { target: { value: string } }) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
    <Paper style={{ minHeight: 800, width: '900px', margin: '1rem', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Breadcrumbs aria-label="breadcrumb">
        {url.map((el) => (
          <Link underline="hover" color="inherit" onClick={e => handleDelPath(el.path)} key={el.path}>{el.name.toUpperCase()} </Link>
        ))}
      </Breadcrumbs>
      <ButtonModul />
      <Table>
        <TableHeader />
        <TableBody>
          {files.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(file => (
            <ShowContent file={file} key={file.name} />
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[10, 15, 20, 30]}
        component="div"
        count={files.length} // Общее количество элементов
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

export default Main
