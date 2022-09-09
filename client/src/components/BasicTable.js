import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

export default function BasicTable({ data, show, setShow }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Sr no.</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Duration</TableCell>
            <TableCell align="right">Upload Date</TableCell>
            <TableCell align="right">Views</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Video File</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={row._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">{row.duration}</TableCell>
              <TableCell align="right">
                {new Date(row.uploadDate).toDateString()}
              </TableCell>
              <TableCell align="right">{row.views}</TableCell>
              <TableCell align="right">{row.category}</TableCell>
              <TableCell>
                <Button
                  sx={{ color: "crimson" }}
                  onClick={() => setShow({ ...show, play: !show.play })}
                >
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
