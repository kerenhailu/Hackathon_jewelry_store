const BasicUrl = "https://localhost:44397/api/";

export const GetWatchesData = async () => {
  try {
    return fetch(`${BasicUrl}`)
      .then((res) => res.json())
      .catch((error) => console.log({ error: "is not work" }));
  } catch (error) {
    console.log("error");
  }
};