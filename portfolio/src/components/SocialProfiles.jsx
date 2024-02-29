import SOCIAL_PROFILES from "../data/socialProfiles";

const SocialProfiles = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h3>تواصل معي</h3>
      {SOCIAL_PROFILES.map((profile) => (
          <a href={profile.link} target="_black" key={profile.id}>
            <img
              src={profile.icon}
              alt="icon"
              style={{ width: 20, margin: 5 }}
            />
          </a>
      ))}
    </div>
  );
};

export default SocialProfiles;
