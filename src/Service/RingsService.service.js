const BasicUrl = "https://jewelrystore.azurewebsites.net/api/Rings";

export const GetRingsData = async () => {
  try {
      return await fetch(`${BasicUrl}`)
      .then((res) => res.json())
      .catch((error) => console.log({ error: "is not work" }));
  } catch (error) {
    console.log("error");
  }
};