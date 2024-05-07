export const handleFetchAllPackages = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/packages");
    return res.json();
  } catch (e) {
    console.error(e);
  }
};

export const handleFetchUpcomming = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/upcomming");
    return res.json();
  } catch (e) {
    console.error(e);
  }
};

export const handleFetchRecommended = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/recommended");
    return res.json();
  } catch (e) {
    console.error(e);
  }
};
