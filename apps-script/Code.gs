const SHEET_NAME = "Captain Poll";

function doPost(e) {
  const sheet = getSheet();
  const data = JSON.parse(e.postData.contents);
  sheet.appendRow([new Date(data.timestamp), data.voter, data.pick1, data.pick2]);
  return ContentService.createTextOutput(JSON.stringify({ status: "ok" })).setMimeType(
    ContentService.MimeType.JSON
  );
}

function doGet(e) {
  const sheet = getSheet();
  const rows = sheet.getDataRange().getValues().slice(1);
  const votes = rows.map((r) => ({
    timestamp: r[0],
    voter: r[1],
    pick1: r[2],
    pick2: r[3],
  }));
  return ContentService.createTextOutput(JSON.stringify(votes)).setMimeType(
    ContentService.MimeType.JSON
  );
}

function getSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(["Timestamp", "Voter", "Captain Pick 1", "Captain Pick 2"]);
  }
  return sheet;
}
