export const handleFetchAllPackages = async () => {
  try {
    const res = await fetch("https://pro-travels.vercel.app/api/packages");
    return res.json();
  } catch (e) {
    console.error(e);
  }
};

export const handleFetchUpcomming = async () => {
  try {
    const res = await fetch("https://pro-travels.vercel.app/api/upcomming");
    return res.json();
  } catch (e) {
    console.error(e);
  }
};

export const handleFetchRecommended = async () => {
  try {
    const res = await fetch("https://pro-travels.vercel.app/api/recommended");
    return res.json();
  } catch (e) {
    console.error(e);
  }
};
