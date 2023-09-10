import "styles/pagination.scss";
import Button from "views/admin/components/CustomButton";

function Pagination({
  page,
  pageSize,
  blockSize,
  totalCount,
  movePageEvent = () => {},
}) {
  const pageItems = [];

  const totalPage = Math.ceil(totalCount / pageSize);
  const nowBlockNum = Math.ceil((pageSize * page) / (blockSize * pageSize));

  const start = blockSize * (nowBlockNum - 1) + 1;
  const end =
    start + blockSize - 1 > totalPage ? totalPage : start + blockSize - 1;

  const pageBtnCls = (value) => {
    let cls = "pagination_btn";
    if (value === page) cls += " active";
    return cls;
  };

  for (let index = start; index <= end; index++) {
    pageItems.push(
      <li key={`pagination_${index}`}>
        <Button
          className={pageBtnCls(index)}
          size="small"
          name={index}
          btnClickEvent={() => {
            movePageEvent(index);
          }}
        ></Button>
      </li>
    );
  }

  return (
    <>
      <div className="pagination_wrapper">
        <Button
          className="move_first_btn"
          icon="page_first"
          disabled={page === 1}
          btnClickEvent={() => {
            movePageEvent(1);
          }}
        ></Button>
        <Button
          className="move_prev_btn"
          icon="page_prev"
          disabled={page === 1}
          btnClickEvent={() => {
            movePageEvent(page - 1);
          }}
        ></Button>
        <ul className="__paging">{pageItems}</ul>
        <Button
          className="move_next_btn"
          icon="page_next"
          disabled={page === totalPage}
          btnClickEvent={() => {
            movePageEvent(page + 1);
          }}
        ></Button>
        <Button
          className="move_last_btn"
          icon="page_last"
          disabled={page === totalPage}
          btnClickEvent={() => {
            movePageEvent(totalPage);
          }}
        ></Button>
      </div>
    </>
  );
}

export default Pagination;
