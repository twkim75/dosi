import { useContext } from "react";
import styled, { css } from "styled-components";

import RadioContext from "./RadioContext";

function TextField({ ...rest }) {
  return <TextFieldInput {...rest} autoComplete={"off"}></TextFieldInput>;
}

const TextFieldInput = styled.input`
  height: ${(props) => (props.height ? props.height : "35px")};
  width: ${(props) => (props.width ? props.width : "100%")};
  padding: 8px 16px;
  font-size: 14px;
  color: var(--color-dark-1);

  border: 1px solid var(--color-admin-border);
  border-radius: var(--border-radius);
  &:focus-visible {
    outline: var(--color-admin-sub) auto 1px;
  }
  &[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

// 체크박스
function Checkbox({ children, disabled, checked, onChange, customStyle }) {
  return (
    <CheckBoxWrapper $customStyle={customStyle}>
      <input
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={({ target: { checked } }) => onChange(checked)}
      />
      {children}
    </CheckBoxWrapper>
  );
}
// 체크박스 컴포넌트 style
const CheckBoxWrapper = styled.label`
  display: flex;
  align-items: center;
  color: var(--color-dark-1);
  ${(props) => props.$customStyle?.label};
  input[type="checkbox"] {
    margin-right: 6px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: #fff;
    border-radius: 4px;
    cursor: pointer;
    height: 20px;
    outline: 0;
    width: 20px;
    border: 1px solid var(--color-admin-border);
    ${(props) => props.customStyle?.checkbox};
  }
  input[type="checkbox"]::after {
    border: solid #fff;
    border-width: 0 2px 2px 0;
    content: "";
    display: none;
    height: 40%;
    left: 40%;
    position: relative;
    top: 20%;
    transform: rotate(45deg);
    width: 15%;
  }
  input[type="checkbox"]:checked {
    background: var(--color-admin-sub);
  }
  input[type="checkbox"]:checked::after {
    display: block;
  }
`;

/** 라디오 */
// 라디오 그룹
function RadioGroup({ label, children, ...rest }) {
  return (
    <RadioGroupWrapper style={rest.style}>
      <legend>{label}</legend>
      <RadioContext.Provider value={rest}>{children}</RadioContext.Provider>
    </RadioGroupWrapper>
  );
}

// 라디오 버튼
function Radio({ children, value, name, disabled, first = false }) {
  const group = useContext(RadioContext);
  const inputStyle = first ? {} : { marginLeft: "20px" };
  return (
    <RadioWrapper disabled={disabled}>
      <input
        type="radio"
        value={value}
        style={inputStyle}
        name={name}
        disabled={disabled || group.disabled}
        checked={group.value !== undefined ? value === group.value : undefined}
        onChange={(e) => group.onChange && group.onChange(e.target.value)}
      />
      <span className="__label">{children}</span>
    </RadioWrapper>
  );
}

// 라디오 컴포넌트 style
const RadioGroupWrapper = styled.fieldset`
  border: 0;
  display: flex;
  align-items: center;
`;
const RadioWrapper = styled.label`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  font-size: 14px;
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
  color: var(--color-dark-1);

  > input {
    cursor: pointer;
    appearance: none;
    margin-right: 8px;
    width: 20px;
    height: 20px;

    border-radius: 50%;
    border: 1px solid #c7c9d9;
    background-color: #f2f2f5;

    &:checked {
      border: 4px solid var(--color-admin-sub);
      background-color: #fff;
    }
  }
`;

function Uploader({ children, ...rest }) {
  return (
    <>
      <UploaderLabel htmlFor={rest.id}>{children}</UploaderLabel>

      <UploaderInput
        type="file"
        id={rest.id}
        onChange={(e) => {
          rest.onChange(e);
        }}
      />
    </>
  );
}

const UploaderLabel = styled.label`
  cursor: pointer;
`;
const UploaderInput = styled.input`
  display: none;
`;

export { TextField, Checkbox, RadioGroup, Radio, Uploader };
