import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: grey;

    display: flex;
    align-items: center;
    justify-content: center;

    // padding: 10px;

`;

export const Content = styled.div`
    background-color: red;
    width: 90%;    
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin: 10px;

    // border: 1px solid black;
    border-radius: 25px;
`