import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import {Container} from './Container';
import {clearControls} from "../store/controls/controls-actions";
import {ThemeSwither} from "../features/theme/ThemeSwither";

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled(Link).attrs({
    to: '/',
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;

export const Header = () => {
    const dispatch = useDispatch();

    const cleanUp = () => {
        dispatch(clearControls())
    }

    return (
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Title onClick={cleanUp}>Where is the world?</Title>
                    <ThemeSwither/>
                </Wrapper>
            </Container>
        </HeaderEl>
    );
};
