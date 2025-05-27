export const fetchEventDetails = async () => {
  try {
    const token = process.env.NEXT_PUBLIC_OFTEN_TOKEN;
    const res = await fetch(
      "http://159.89.162.224:8000/api/v1/invites/67f896a6-bdaf-47e4-9289-29d6586e5a70/logged_in",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    throw error;
  }
};
