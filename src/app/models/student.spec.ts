import { Student } from './student';

describe('Student', () => {
  it('should create an instance', () => {
    expect({
      name: "",
      lastName: "",
      email: "",
      semester: 1,
      enrollment: "1",
      academiclevel: "",
  }).toBeTruthy();
  });
});
