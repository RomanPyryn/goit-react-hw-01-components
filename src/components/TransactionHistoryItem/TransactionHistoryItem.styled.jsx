import styled from "@emotion/styled";

export const TableRaw = styled.tr`
    color: gray;
    background-color: #fff;

    &:nth-of-type(even) {
        background-color: lightgrey;
    }
`;

export const TableData = styled.td`
    padding-top: 10px;
    padding-bottom: 10px;
`;