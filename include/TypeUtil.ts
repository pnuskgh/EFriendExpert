class TypeUtil {
  ynToBoolean(ynString: string) {
    const yn = ynString.trim();
    if (yn.length > 1 || !(yn === 'Y' || yn === 'N')) {
      throw new Error('Y 또는 N 한 글자로 이루어진 문자가 아닙니다.');
    }
    return yn === 'Y';
  }
}

export const typeUtil = new TypeUtil();
