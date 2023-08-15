export  const formatDate = (date : any) => {
    const options : any = {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    };
  
    const formattedDateTime = new Date(date).toLocaleString('en-IN', options);
    return formattedDateTime;
  };
  