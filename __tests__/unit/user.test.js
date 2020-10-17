const bcrypt = require("bcryptjs");
const { User } = require("../../src/models");
const truncate = require("../utils/truncate");

describe("User", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should encrypt user password", async () => {
    const user = await User.create({
      name: "Felipe",
      email: "felipe.furlanetti@gmail.com",
      password: "1234",
    });

    const compareHash = await bcrypt.compare("1234", user.password_hash);

    expect(compareHash).toBe(true);
  });
});
