import styled from "@emotion/styled";

export const Container = styled.section`
    width: 350px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
    background-color: #fff;
`;

export const Title = styled.h2`
    margin: 0;
    padding-top: 20px;
    padding-bottom: 20px;
    text-transform: uppercase;
    font-size: 20px;
    color: gray;
`;

export const Statlist = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const StatItem = styled.li`
    background-color: ${getRandomHexColor};
    width: calc(100%/5);
`;