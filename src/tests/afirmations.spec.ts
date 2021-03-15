import axios from "axios";

describe("afirmations api test", () => {
  const API_URL = "https://www.affirmations.dev/";
  it("should return afirmation", async () => {
    const result = await axios.get(API_URL);

    const { data } = result;

    console.log(data);

    expect(data).toBeDefined();
  });

  it("should return a psycopath affirmation", async () => {
    jest.spyOn(axios, "get").mockResolvedValueOnce({
      data: {
        affirmation:
          "A cada segundo que passa o apocalipse deixa de ser temido, para se tornar uma esperança!",
      },
    });

    const result = await axios.get(API_URL);

    const { data } = result;

    console.log(data);

    expect(data).toBeDefined();
    expect(data.affirmation).toEqual(
      "A cada segundo que passa o apocalipse deixa de ser temido, para se tornar uma esperança!"
    );
  });
});
