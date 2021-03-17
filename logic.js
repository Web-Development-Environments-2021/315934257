function sendEmail() { 
    Email.send({ 
      Host: "smtp.gmail.com", 
      Username: "yonymilver@gmail.com", 
      Password: "1y1o1n1y", 
      To: 'milver@post.bgu.ac.il', 
      From: "yonymilver@gmail.com", 
      Subject: "Sending Email using javascript", 
      Body: "Well that was easy!!", 
    }).then(
		message => alert("mail sent successfully")
	);
  } 