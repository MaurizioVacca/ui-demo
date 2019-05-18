import styled from 'styled-components';

const Button = styled.button(({ theme, color = 'primary' }) => ({
    ...theme.buttons[color]
}));

export default Button;
