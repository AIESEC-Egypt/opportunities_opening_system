// Helper functions
function getLastRowForSheet(sheetData) {
  var lr = 0;
  for (let i = 0; i < sheetData.length; i++) {
    if (sheetData[i][5] != "") {
      lr++;
    }
  }
  return lr;
}
