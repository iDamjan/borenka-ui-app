export const uploadToDrive = async (formData: FormData): Promise<boolean> => {
  const response = await fetch("https://borenka.site/upload-drive", {
    method: "POST",
    body: formData,
  });

  return response.ok;
};
