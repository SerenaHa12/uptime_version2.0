import React from "react";
import "./table.css";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Actionbar from "../action_bar/Actionbar";

const columns = [
  { id: "name", label: "Asset", minWidth: 170 },
  { id: "code", label: "Status", minWidth: 92 },
  {
    id: "population",
    label: "Message",
    minWidth: 277,
    align: "left",
    // format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Last\u00a0Update",
    minWidth: 161,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "Scanning\u00a0Enabled",
    minWidth: 80,
    align: "left",
    format: (value) => value.toFixed(2),
  },
];

const rows = [
  { name: "glasswallet.app", code: "IN", population: '200- OK', size: 3287263 },
  { name: "China", code: "CN", population: '200- OK', size: 9596961 },
  { name: "Italy", code: "IT", population: '200- OK', size: 301340 },
  { name: "United States", code: "US", population: '200- OK', size: 9833520 },
  { name: "Canada", code: "CA", population: '200- OK', size: 9984670 },
  { name: "Australia", code: "AU", population: '200- OK', size: 7692024 },
  { name: "Germany", code: "DE", population: '200- OK', size: 357578 },
  { name: "Ireland", code: "IE", population: '200- OK', size: 70273 },
  { name: "Mexico", code: "MX", population: '200- OK', size: 1972550 },
  { name: "Japan", code: "JP", population: '200- OK', size: 377973 },
  { name: "France", code: "FR", population: '200- OK', size: 640679 },
  { name: "United Kingdom", code: "GB", population: '200- OK', size: 242495 },
  { name: "Russia", code: "RU", population: '200- OK', size: 17098246 },
  { name: "Nigeria", code: "NG", population: '200- OK', size: 923768 },
  { name: "Brazil", code: "BR", population: '200- OK', size: 8515767 },
];

const TableDashboard = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <main className="dashboard-table">
      {/* search and filter */}
      <Actionbar />

      <Paper sx={{ width: "100%" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth, backgroundColor: "#E8F1FC", fontSize: "16px", fontWeight: "600", fontFamily: "Public Sans" }}
                    className="column-label"
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </main>
  );
};

export default TableDashboard;
