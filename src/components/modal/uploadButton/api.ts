export const uploadToDrive = async (formData: FormData): Promise<boolean> => {
    const response = await fetch("http://localhost:8080/upload-drive", {
        method: "POST",
        body: formData,
      });

      return response.ok
}