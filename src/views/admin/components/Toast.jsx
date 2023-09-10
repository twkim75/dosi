import styled from "@emotion/styled";
import { Flip, ToastContainer, toast } from "react-toastify";
import { ReactComponent as Success } from "assets/icon/toast/success.svg";
import { ReactComponent as Error } from "assets/icon/toast/error.svg";
import { ReactComponent as Info } from "assets/icon/toast/info.svg";

export const StyledToastConatiner = styled(ToastContainer)`
  margin-top: 10px;
  .Toastify__toast-icon {
    margin-right: 16px;
  }
  .Toastify__toast {
    box-shadow: none;
    border-radius: 999px;
    color: #3a3a3c;
    min-width: 264px;
    width: auto;
    height: 56px;
  }
  .Toastify__toast--info {
    background: #fffae6;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 170%;
  }
  .Toastify__progress-bar.Toastify__progress-bar--info {
    background-color: #f1c40f;
  }
  .Toastify__toast--success {
    background: #e7f9f1;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 170%;
  }
  .Toastify__toast--error {
    background: #ffecec;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 170%;
  }
`;

const defaultToastOption = {
  position: "top-center",
  autoClose: 1000,
  hideProgressBar: false,
  closeOnClick: true,
  draggable: true,
  pauseOnHover: false,
  closeButton: false,

  transition: Flip,
};

export const Toast = {
  info: (message, options = {}) => {
    toast.info(message, {
      ...defaultToastOption,
      icon: <Info />,
      ...options,
    });
  },
  success: (message, options = {}) => {
    toast.success(message, {
      ...defaultToastOption,
      icon: <Success />,
      ...options,
    });
  },
  error: (message, options = {}) => {
    toast.error(message, {
      ...defaultToastOption,
      icon: <Error />,
      ...options,
    });
  },
};
