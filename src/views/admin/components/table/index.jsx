import { styled } from "@mui/material/styles";
import { styled as sc, css } from "styled-components";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Radio, RadioGroup } from "../input";

// 팝업리스트 테이블
function PopupListTable({ data = [], changeDisplay }) {
  return (
    <StyledTableContainer component={Paper} elevation={0}>
      <Table>
        <TableHead>
          <TableRow height={"58px"}>
            <StyledTableCell width={"108px"} align="center">
              번호
            </StyledTableCell>
            <StyledTableCell align="center">제목</StyledTableCell>
            <StyledTableCell width={"400px"} align="center">
              노출여부
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => {
            const rnum = data.length - index;
            return (
              <StyledTableRow key={row.idx}>
                <StyledTableCell align="center">{rnum}</StyledTableCell>
                <StyledTableCell align="center">
                  <SubjectWrapper>{row.title}</SubjectWrapper>
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div>{row.display === "Y" ? "노출" : "미노출"}</div>
                  <DisplayChangeBtn
                    onClick={() => {
                      changeDisplay(row);
                    }}
                  >
                    {row.display === "N" ? "노출" : "미노출"}로 변환
                  </DisplayChangeBtn>
                </StyledTableCell>
              </StyledTableRow>
            );
          })}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
}

const DisplayChangeBtn = sc.button`
  margin-left: 10px;
  background-color : var(--color-admin-sub);
  color: white;
  padding: 4px 8px;
`;

const SubjectWrapper = sc.div`
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  ${({ width }) => {
    if (width)
      return css`
        max-width: ${width};
      `;
  }}
  // > span:hover {
  //   cursor: pointer;
  //   text-decoration: underline;
  // }
`;

// 이미지 리스트 테이블
function ImageListTable({ data = [], changeDisplay }) {
  return (
    <StyledTableContainer component={Paper} elevation={0}>
      <Table>
        <TableHead>
          <TableRow height={"58px"}>
            <StyledTableCell width={"108px"} align="center">
              번호
            </StyledTableCell>
            <StyledTableCell align="center">이미지 타입</StyledTableCell>
            <StyledTableCell align="center">노출여부</StyledTableCell>
            <StyledTableCell align="center">이미지 보기</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => {
            const rnum = data.length - index;
            const types = [
              "상단 슬라이드",
              "인테리어",
              "메뉴 - MAIN",
              "메뉴 - SOUP",
              " 메뉴 - FRIED",
              "메뉴 - STICK",
              "메뉴 - SIDE",
            ];
            const rtype = types[row.type - 1];
            return (
              <StyledTableRow key={row.idx}>
                <StyledTableCell align="center">{rnum}</StyledTableCell>
                <StyledTableCell align="center">{rtype}</StyledTableCell>
                <StyledTableCell
                  align="center"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div>{row.display === "Y" ? "노출" : "미노출"}</div>
                  <DisplayChangeBtn
                    onClick={() => {
                      changeDisplay(row);
                    }}
                  >
                    {row.display === "N" ? "노출" : "미노출"}로 변환
                  </DisplayChangeBtn>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <ShowImageBtn
                    onClick={() => {
                      window.open(row.img);
                    }}
                  >
                    이미지 보기
                  </ShowImageBtn>
                </StyledTableCell>
              </StyledTableRow>
            );
          })}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
}
const ShowImageBtn = sc.button`
  background-color : #fff;
  color: var(--color-dark-1);
  padding: 4px 8px;
  border: 1px solid var(--color-admin-border);
`;
export { PopupListTable, ImageListTable };

const StyledTableContainer = styled(TableContainer)`
  border: 1px solid var(--color-admin-border);
  border-radius: var(--border-radius);
`;
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontFamily: "Pretendard",
  borderBottom: "1px solid var(--color-admin-border)",
  color: "var(--color-dark-1)",
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#FAFAFC",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
