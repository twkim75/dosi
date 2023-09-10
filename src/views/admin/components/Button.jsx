import styled from "styled-components";

function Button({
  style,
  width,
  height,
  type,
  color,
  disabled,
  onClick = () => {},
  children,
}) {
  return (
    <DefaultStyledButton
      style={style}
      width={width}
      type={type}
      height={height}
      color={color}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </DefaultStyledButton>
  );
}

export default Button;

const colorConvert = (color) => {
  if (color === "admin_main") {
    return "var(--color-admin-main)";
  } else if (color === "admin_sub") {
    return "var(--color-admin-sub)";
  } else {
    return color;
  }
};

// 라디오 컴포넌트 style
const DefaultStyledButton = styled.button`
  outline: 0;
  border: none;
  cursor: pointer;
  padding: 8px 12px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-dark-1);
  width: ${({ width }) => (width ? width : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  border-radius: ${({ type }) =>
    type === "tile" ? "0" : "var(--border-radius)"};
  border: ${({ type }) =>
    type === "outlined" ? "1px solid var(--color-admin-border)" : "none"};
  box-shadow: ${({ type }) =>
    type === "outlined" ? "0px 1px 2px rgba(16, 24, 40, 0.05)" : "none"};
  background-color: ${({ color }) =>
    color ? colorConvert(color) : "transparent"};
  &:hover {
    opacity: 0.8;
  }
  &:disabled {
    opacity: 0.2;
  }
  > svg,
  img {
    margin-right: 6px;
  }
`;
