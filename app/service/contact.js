import { httpAxios } from "../utils/httpAxios";

export async function sendContactMessage(formData) {
  try {
    const response = await httpAxios.post("/contact", formData);
    return response.data;
  } catch (error) {
    console.error("❌ Contact form error:", error.response?.data || error.message);
    throw error;
  }
}
