export function getCurrentDate() {
    // Get current date and time
    const currentDate = new Date();
  
    // Array of month names
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  
    // Get day, month, date, and year
    const day = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
    const month = monthNames[currentDate.getMonth()];
    const date = currentDate.getDate();
    const year = currentDate.getFullYear();
  
    // Display the result
    return `${day}, ${month} ${date}, ${year}`;

  }
  
  // Call the function
//   getCurrentDate();
  