import user from "../user"
import ProfileDescription from "../ProfileDescription";
import data from "../data"
import Statistics from "../Statistics";
import friends from "../friends";
import FriendList from "../FriendList";
import transactions from "../transactions"
import TransactionHistory from "../TransactionHistory";
import { Container } from "./App.styled";

export const App = () => {
  return (
    <Container>
      <ProfileDescription
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      
      <Statistics title="Upload stats" stats={data} />

      <Statistics stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </Container>
  );
};
