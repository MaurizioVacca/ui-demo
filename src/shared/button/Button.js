import styled from 'styled-components';

const Button = styled.button(({ theme, color = 'primary' }) => ({
    ...theme.buttons[color],
    outline: 0
}));

export default Button;
