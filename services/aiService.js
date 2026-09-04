export async function getAIResponse(message) {
  // Temporary delay to simulate AI thinking
  await new Promise((resolve) => setTimeout(resolve, 1200));

  // Temporary response
  return {
    success: true,
    response: `This is a temporary AI response to: "${message}"`,
  };
}