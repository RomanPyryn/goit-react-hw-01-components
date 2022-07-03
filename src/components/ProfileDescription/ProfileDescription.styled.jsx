import styled from "@emotion/styled";

export const Profile = styled.div`
    font-weight: bold;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
    width: 300px;
    border: 2px solid lightgray;
    border-radius: 4px;
`;

export const Description = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: #ffffff;
`;

export const Avatar = styled.img`
    border: 1px solid lightgray;
    border-radius: 50%;
`;

export const Name = styled.p`
    font-size: 20px;
`;

export const Tag = styled.p`
    color: gray;
`;

export const Location = styled.p`
    color: gray; 
`;

export const Stats = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
`;

export const StatsItem = styled.li`
    width: calc(100%/3);
    border-top: 1px solid lightgrey;

    &:not(:last-child) {
        border-right: 1px solid lightgrey;
    }
`; 

export const Label = styled.span`
    padding-top: 10px;
    display: block;
    font-size: 14px;
    color: gray;
`;

export const Quantity = styled.span`
    padding-top: 10px;
    padding-bottom: 10px;
    display: block;
    font-size: 16px;
`;