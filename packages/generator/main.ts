(async () => {

  /**
   * 샘플이랑 요약 시트 제외하고 모두 json 파일로 변환
   */
  const excludeSheetNames = ['EFriendExpert', 'Sample'];
  const sheetNames = (await excelService.getSheetNames()).filter((sheetName) => !excludeSheetNames.includes(sheetName));
  for await (const sheetName of sheetNames) {
    await kisInfoService.writeKisInfo(sheetName);
  }

  /**
   * json 파일 목록 변환
   */

  jsonToOAuthModule();
  jsonToRestAPIModule();
  jsonToWebSocketModule();
})();



