 // Helper function to calculate the incoming week's Monday and Friday
export const getIncomingWeekRange = () => {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const nextMonday = new Date(today);
    nextMonday.setDate(today.getDate() + (8 - dayOfWeek)); // Calculate the Monday of the incoming week
    const nextFriday = new Date(nextMonday);
    nextFriday.setDate(nextMonday.getDate() + 4); // Calculate the Friday of the incoming week
    return { nextMonday, nextFriday };
  };
