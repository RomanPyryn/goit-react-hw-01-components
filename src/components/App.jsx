import user from "./user"
import ProfileDescription from "./ProfileDescription";
import data from "./data"
import Statistics from "./Statistics";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template

      <ProfileDescription
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      
      <Statistics title="Upload stats" stats={data} />

      <Statistics stats={data} />
      
    </div>
  );
};
