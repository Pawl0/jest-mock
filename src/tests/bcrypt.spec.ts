import bcrypt from "bcrypt";

describe("bcrypt test init", () => {
  it("should hash a value", async () => {
    const value = "normal";

    const hash = await bcrypt.hash(value, 8);

    expect(hash).toBeDefined();
  });

  it("should mock the hash and return 'hashed'", async () => {
    const value = "normal";

    jest.spyOn(bcrypt, "hash").mockResolvedValueOnce("hashed");

    const hash = await bcrypt.hash(value, 8);

    expect(hash).toBe("hashed");
  });

  it("should compare values and return true", async () => {
    const value = "normal";

    const hash = await bcrypt.hash(value, 8);

    const compare = await bcrypt.compare(value, hash);

    expect(compare).toBeTruthy();
  });

  it("should mock the compare and return false", async () => {
    const value = "normal";

    const hash = await bcrypt.hash(value, 8);

    jest.spyOn(bcrypt, "compare").mockRejectedValueOnce(false);

    const compare = bcrypt.compare(value, hash);

    expect(compare).rejects.toBeFalsy();
  });
});
