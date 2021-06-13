// bad implementation, refactor on green tests!

export const fizzbuzz = (num: number): string => {
  if (num % 3 == 0) {
    if (num % 5 == 0) {
      if (num % 7 == 0) {
        return "fizzbuzzbizz";
      } else {
        return "fizzbuzz";
      }
    } else {
      if (num % 7 == 0) {
        return "fizzbizz";
      } else {
        return "fizz";
      }
    }
  }
  if (num % 5 == 0) {
    if (num % 7 == 0) {
      return "buzzbizz";
    } else {
      return "buzz";
    }
  }
  if (num % 7 == 0) {
    return "bizz";
  }
  return String(num);
};
