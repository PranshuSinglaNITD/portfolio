"use server"

export async function sendEmailAction(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;
  
  if (!name || !email || !message) {
    return { success: false, error: "Missing required fields" }
  }

  try {
    const res = await fetch("https://formsubmit.co/ajax/pranshucoder662@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        message,
        _subject: `New Portfolio Message from ${name}`,
        _replyto: email
      })
    });
    
    if (res.ok) {
      return { success: true }
    } else {
      return { success: false, error: "Failed to send message." }
    }
  } catch (error) {
    return { success: false, error: "Network error" }
  }
}
