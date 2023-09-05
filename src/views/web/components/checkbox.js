import { styled } from "styled-components";

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

export { Checkbox };
// 체크박스 컴포넌트 style
const CheckBoxWrapper = styled.label`
  display: flex;
  align-items: center;
  color: #3a3a3c;
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
    border: 1px solid #ebebf0;
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
    background: var(--color-primary);
  }
  input[type="checkbox"]:checked::after {
    display: block;
  }
`;
