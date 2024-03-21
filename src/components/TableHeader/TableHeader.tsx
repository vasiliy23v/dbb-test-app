import { TableHead, TableRow, TableCell } from "@mui/material"


export const TableHeader = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell
                    variant="head"
                    align={'left'}
                    style={{ width: 300 }}
                    sx={{
                        backgroundColor: 'background.paper',
                    }}
                >
                    Name
                </TableCell>
                <TableCell
                    variant="head"
                    align={'center'}
                    style={{ width: 300 }}
                    sx={{
                        backgroundColor: 'background.paper',
                    }}
                >
                    Modified
                </TableCell>
                <TableCell
                    variant="head"
                    align={'center'}
                    style={{ width: 250 }}

                >
                    Who can access
                </TableCell>
                <TableCell
                    variant="head"
                    align={'center'}
                    style={{ width: 50 }}
                    sx={{
                        backgroundColor: 'background.paper',
                    }}
                >
                </TableCell>
            </TableRow>
        </TableHead>
    )
}
