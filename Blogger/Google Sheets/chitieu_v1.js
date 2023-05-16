function onEdit(e) {
  const listFunction = ["getStatus", "cusDivide", "calculateExpectedAmount"];

  listFunction.forEach((funcName) => {
    let curFunc = `=${funcName}`;
    let temp = `=sample_${funcName}`;
    let sheet = e.source.getActiveSheet();
    sheet.createTextFinder(`^\\${curFunc}`).matchFormulaText(true).useRegularExpression(true).replaceAllWith(temp);
    sheet.createTextFinder(`^\\${temp}`).matchFormulaText(true).useRegularExpression(true).replaceAllWith(curFunc);
  });
}

function refreshLastUpdate() {
  const listFunction = ["getStatus", "cusDivide", "calculateExpectedAmount"];

  listFunction.forEach((funcName) => {
    let curFunc = `=${funcName}`;
    let temp = `=sample_${funcName}`;
    let sheet = e.source.getActiveSheet();
    sheet.createTextFinder(`^\\${curFunc}`).matchFormulaText(true).useRegularExpression(true).replaceAllWith(temp);
    sheet.createTextFinder(`^\\${temp}`).matchFormulaText(true).useRegularExpression(true).replaceAllWith(curFunc);
  });
}

function onOpen() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var entries = [
    {
      name: "Tính toán lại",
      functionName: "refreshLastUpdate",
    },
  ];
  sheet.addMenu("Custom Menu", entries);
}

/**
 * Tính số tiền kỳ vọng
 * @param {money} Khoản đầu tư
 * @param {index} Tháng thứ
 * @return số tiền kỳ vọng
 * @calculateExpectedAmount
 */
function calculateExpectedAmount(money, index) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var expectedRate = sheet.getRange("E1").getValue();
  var currentMoth = sheet.getRange("E5").getValue();
  return money + ((money * expectedRate) / 12) * (currentMoth - index + 1);
}
var sample_calculateExpectedAmount = calculateExpectedAmount;

/**
 * Lấy trạng thái hiện tại của khoản đầu tư
 * @param {dealStatus} Trạng thái chốt deal
 * @param {maxDealPrice} Giá cao nhất có thể chốt deal
 * @return Trạng thái
 * @getStatus
 */
function getStatus(dealStatus, maxDealPrice) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var curPrice = sheet.getRange("E2").getValue();
  return dealStatus !== "Done" ? (curPrice <= maxDealPrice ? "Sell" : "Hold") : "Done";
}
var sample_getStatus = getStatus;

function cusDivide(a, b, c) {
  return b > 0 ? a / b : c;
}
var sample_cusDivide = cusDivide;
