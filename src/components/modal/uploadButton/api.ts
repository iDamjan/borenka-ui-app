export const uploadToDrive = async (formData: FormData): Promise<boolean> => {
    const response = await fetch("http://146.190.207.5:8080/upload-drive", {
        method: "POST",
        body: formData,
      });

      return response.ok
}
