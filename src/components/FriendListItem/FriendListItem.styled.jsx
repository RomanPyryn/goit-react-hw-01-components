import styled from "@emotion/styled";

export const Item = styled.li`
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    &:not(:last-child) {
        margin-bottom: 10px;
    }
`;

export const Status = styled.span`
    margin-right: 10px;
    width: 15px;
    height: 15px;
    background-color: ${props => {
    if (props.type === "true") {
           return 'green'
        } else {
        return 'red'
        }
    }};
    border-radius: 50%;
`;

export const Avatar = styled.img`
    margin-right: 10px;
`;

export const Name = styled.p`
    font-size: 20px;
    font-weight: bold;
`;