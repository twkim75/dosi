import "react-datepicker/dist/react-datepicker.css";
import "styles/datepicker.scss";

import { useState, forwardRef, useMemo, useRef } from "react";
import DatePicker from "react-datepicker";
import Button from "views/admin/components/CustomButton";
import { getDayCalendarFormat, getDayFormatYearMonth } from "utils/timeFormat";
import { ReactComponent as Calendar } from "assets/calendar.svg";

function CustomDatePicker({ startDate, setStartDate, endDate, setEndDate }) {
  const calendar = useRef(null);
  const [inputStartDate, setInputStartDate] = useState(startDate);
  const [inputEndDate, setInputEndDate] = useState(endDate);

  //   input
  const Input = forwardRef(({ value, onClick }, ref) => (
    <div className="datepicker_input_wrapper" ref={ref} onClick={onClick}>
      <div className="__calendar_icon">
        <Calendar></Calendar>
      </div>
      <input type="text" value={formatDate} readOnly />
    </div>
  ));

  const handleMouseOnHover = (e) => {
    if (!calendar) return;
  };

  const renderDayContents = (day) => {
    return (
      <div className="__day" onMouseOver={handleMouseOnHover}>
        {day}
      </div>
    );
  };

  const onChange = (dates) => {
    const [start, end] = dates;
    setInputStartDate(start);
    setInputEndDate(end);
  };

  // datepicker open시 초기화
  const onCalendarOpen = () => {
    setInputStartDate(startDate);
    setInputEndDate(endDate);
  };

  // 닫기 버튼
  const cancel = () => {
    setStartDate(startDate);
    setEndDate(endDate);
    calendar.current.setOpen(false);
  };
  // 적용 버튼
  const apply = () => {
    setStartDate(inputStartDate);
    setEndDate(inputEndDate);
    calendar.current.setOpen(false);
  };

  // input view date
  const formatDate = useMemo(() => {
    let format = `${startDate ? getDayCalendarFormat(startDate) : ""}`;
    if (endDate) format += ` ~ ${getDayCalendarFormat(endDate)}`;

    return format;
  }, [startDate, endDate]);

  return (
    <>
      <DatePicker
        ref={calendar}
        selectsRange={true}
        dateFormat="yyyy.MM.dd"
        startDate={inputStartDate}
        endDate={inputEndDate}
        maxDate={new Date()}
        shouldCloseOnSelect={false}
        onCalendarOpen={() => {
          onCalendarOpen();
        }}
        onChange={(update) => {
          onChange(update);
        }}
        customInput={<Input />}
        renderDayContents={renderDayContents}
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <>
            <div className="move_date__wrapper">
              <Button
                className="prev_btn"
                type="icon"
                icon="chevron_left"
                btnClickEvent={() => {
                  decreaseMonth();
                }}
              ></Button>
              <div className="date">{getDayFormatYearMonth(date)}</div>
              <Button
                className="next_btn"
                type="icon"
                icon="chevron_right"
                btnClickEvent={() => {
                  increaseMonth();
                }}
              ></Button>
            </div>
            <div className="display_date__wrapper">
              <input
                type="text"
                value={
                  inputStartDate ? getDayCalendarFormat(inputStartDate) : ""
                }
                readOnly
              />
              -
              <input
                type="text"
                value={inputEndDate ? getDayCalendarFormat(inputEndDate) : ""}
                readOnly
              />
            </div>
          </>
        )}
      >
        <div className="datepicker_bottom_btn__wrapper">
          <Button
            className="cancel_btn"
            type="outlined"
            name="취소"
            btnClickEvent={() => {
              cancel();
            }}
          ></Button>
          <Button
            className="apply_btn"
            type="primary"
            name="적용"
            btnClickEvent={() => {
              apply();
            }}
          ></Button>
        </div>
      </DatePicker>
    </>
  );
}

export { CustomDatePicker };
